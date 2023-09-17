import { IoIosContact } from "react-icons/io";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { useState } from "react";
import Swal from "sweetalert2/dist/sweetalert2.js";
import "sweetalert2/src/sweetalert2.scss";

const Contact = (props) => {
	const contact = props.contact;
	const [myContacts, setMyContacts] = useState(contact);
	const handleSingleDelete = (_id) => {
		// fetch(`http://localhost:5000/contacts/${_id}`, {
		// 	method: "DELETE",
		// })
		// 	.then((res) => res.json())
		// 	.then((data) => {
		// 		if (data.deletedCount > 0) {
		Swal.fire({
			title: "Are you sure?",
			text: "You won't be able to revert this!",
			icon: "warning",
			showCancelButton: true,
			confirmButtonColor: "#3085d6",
			cancelButtonColor: "#d33",
			confirmButtonText: "Yes, delete it!",
		}).then((result) => {
			if (result.isConfirmed) {
				fetch(`http://localhost:5000/contacts/${_id}`, {
					method: "DELETE",
				})
					.then((res) => res.json())
					.then((data) => {
						if (data.deletedCount > 0) {
							Swal.fire("Deleted!", "Your file has been deleted.", "success");
							const remaining = contact.filter(
								(SingleContact) => SingleContact._id !== _id
							);
							setMyContacts(remaining);
						}
						if (result.isCancel) {
							Swal.fire("Not Deleted");
							setMyContacts(contact);
						}
					});
			}
		});
	};
	const { _id, userName, spoc, number, email, date } = myContacts;
	const handleChange = props.handleChange;
	return (
		<tr
			className={`even:bg-[#F2F0F2] hover:bg-yellow-100 ${
				props.contact?.isChecked == true
					? "bg-green-300 even:bg-green-300 hover:bg-green-300"
					: ""
			}`}>
			<td>
				<input
					className={` checkbox appearance-none rounded-sm border border-primary checked:bg-primary cursor-pointer`}
					type='checkbox'
					checked={props.contact?.isChecked || false}
					onChange={handleChange}
					name={userName}
					id=''
				/>
			</td>
			<td className='text-left align-baseline'>
				<IoIosContact className='inline text-xl text-primary mr-1' />
				{userName}
			</td>

			<td>CTA</td>
			<td>{spoc}</td>
			<td>{number}</td>
			<td>{email}</td>
			<td>{date}</td>
			<td>
				<AiFillDelete
					onClick={() => handleSingleDelete(_id)}
					className='text-lg inline mr-2 text-primary cursor-pointer transition-all ease-in-out duration-100 hover:text-red-700'
				/>
				<AiFillEdit className='text-lg inline text-primary cursor-pointer transition-all ease-in-out duration-100 hover:text-green-700' />
			</td>
		</tr>
	);
};

export default Contact;
