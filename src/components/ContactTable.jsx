import { useEffect, useState } from "react";
import Contact from "./Contact";
import { AiFillDelete } from 'react-icons/ai';
const ContactTable = ({query}) => {
	// Fetch contacts
	const [contacts, setContacts] = useState([]);
	useEffect(() => {
		fetch("http://localhost:5000/api/contacts")
			.then((res) => res.json())
			.then((data) => setContacts(data));
	}, []);
	// console.log(contacts)
	const anyChecked = contacts.find((element) => element?.isChecked === true);
	const handleChange = (e) => {
		const { name, checked } = e.target;
		if (name === "allSelect") {
			const checkedValue = contacts.map((user) => {
				return { ...user, isChecked: checked };
			});
			setContacts(checkedValue);
			// console.log(checkedValue);
		} else {
			const checkedValue = contacts.map((user) =>
				user.userName === name ? { ...user, isChecked: checked } : user
			);
			setContacts(checkedValue);
		}
	};
	// console.log(contacts);
	// console.log(anyChecked);
	return (
		<div>
			<div className={`flex items-center justify-end ${anyChecked? "visible" : "invisible"}`}>
				
				<button className='bg-red-500 rounded-md font-semibold hover:bg-red-700 text-white px-5 py-2 mb-2 flex items-center'>
				<AiFillDelete className="text-lg mr-2 text-white cursor-pointer"/><span>Delete</span>
				</button>
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
								checked={!contacts.some((user) => user?.isChecked !== true)}
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
					{contacts.filter((contact) => contact.userName.toLowerCase().includes(query.toLowerCase())).map((contact) => (
						<Contact
							key={contact.id}
							contact={contact}
							handleChange={handleChange}></Contact>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default ContactTable;
