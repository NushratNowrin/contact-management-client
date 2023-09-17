import { useEffect, useState } from "react";
import Contact from "./Contact";

const ContactTable = () => {
	// Fetch contacts
	const [contacts, setContacts] = useState([]);
	// const [checkOn, setCheckOn] = useState([]);
	useEffect(() => {
		fetch("http://localhost:5000/contacts")
			.then((res) => res.json())
			.then((data) => setContacts(data));
	}, []);


	// console.log(contacts)
   const handleChange =(e) =>{
	const {name, checked} = e.target;
	if(name === "allSelect"){
		const checkedValue = contacts.map((user) => {return {...user, isChecked:checked}})
		setContacts(checkedValue)
		console.log(checkedValue)
		
	} else{
		const checkedValue = contacts.map( (user) => user.userName === name ? {...user, isChecked:checked} : user)
		setContacts(checkedValue)
	}
		
   }
	return (
		<div>
			<div className="flex items-center justify-end">
				<button className="bg-red-500 rounded-md font-semibold hover:bg-red-700 text-white px-3 py-2">Delete</button>
				</div>
			<table className='table w-full border-collapse border border-slate-200 text-sm'>
				{/* Table Header */}
				<thead className='bg-primary text-center text-white'>
					<tr>
						<td>
							<input
								className='checkbox appearance-none border border-gray-300 rounded-sm checked:bg-gray-300'
								type='checkbox'
								name='allSelect'
								checked = {!contacts.some( (user)=>user?.isChecked !== true )}
								onChange={handleChange}
								id=''
							/>
						</td>
						<td>Contact Name</td>
						<td>CTA</td>
						<td>SPOC</td>
						<td>Mobile</td>
						<td>Email</td>
						<td>Created Date</td>
                        <td>Action</td>
					</tr>
				</thead>

				{/* Table Body */}
				<tbody className='text-center'>
					{contacts.map((contact) => (
						<Contact key={contact.id} contact={contact} handleChange={handleChange}></Contact>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default ContactTable;
