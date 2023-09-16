import { useEffect, useState } from "react";
import Contact from "./Contact";

const ContactTable = () => {
	// Fetch contacts
	const [contacts, setContacts] = useState([]);
	useEffect(() => {
		fetch("/contact.json")
			.then((res) => res.json())
			.then((data) => setContacts(data));
	}, []);
	// console.log(contacts)

	return (
		<div>
			<table className='table w-full border-collapse border border-slate-200 text-sm'>
				{/* Table Header */}
				<thead className='bg-primary text-center text-white'>
					<tr>
						<td>
							<input
								className='checkbox appearance-none border border-gray-300 rounded-sm checked:bg-gray-300'
								type='checkbox'
								name=''
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
						<Contact key={contact.id} {...contact}></Contact>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default ContactTable;
