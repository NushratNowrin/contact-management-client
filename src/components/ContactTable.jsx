import { useContext, useEffect, useState } from "react";
import Contact from "./Contact";
import { AiFillDelete } from "react-icons/ai";
import Download from "./Download";
import { AuthContext } from "../Provider/AuthProviders";
import { Link } from "react-router-dom";

const ContactTable = ({ contacts, setContacts, query }) => {
	const { user, logout } = useContext(AuthContext);
	const handleLogOut = () => {
		logout()
			.then((result) => {
				// Sign-out successful.
			})
			.catch((error) => {});
	};
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

	return (
		<div>
			<div className='flex items-center justify-between'>
				<div>
					<Download contacts={contacts}></Download>
				</div>
				<div className={` ${anyChecked ? "visible" : "invisible"}`}>
					<button className='bg-red-500 rounded-md font-semibold hover:bg-red-700 text-white px-5 py-2 mb-2 flex items-center'>
						<AiFillDelete className='text-lg mr-2 text-white cursor-pointer' />
						<span>Delete</span>
					</button>
				</div>
				{user ? (
							<div className='flex mx-10 gap-5'>
								{user.photoURL != null ? (
									<img
										className='h-10 w-10 rounded-full'
										src={user.photoURL}
										title={user.email}
										alt=''
									/>
								) : (
									<img
										className='h-10 w-10 rounded-full'
										src='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'
										title={user.email}
										alt=''
									/>
								)}

								<div className='w-16 h-10 '>
									<button
										onClick={handleLogOut}
										className=' bg-red-400 px-5 py-2 font-bold text-black rounded-lg button-hover'>
										Logout
									</button>
								</div>
							</div>
						) : (
							<button className='bg-red-400 px-5 py-2 font-bold text-black rounded-lg button-hover flex mx-10'>
								<Link to='/login'>Login</Link>
							</button>
						)}
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
						<td>Mobile</td>
						<td>Email</td>
						<td>Created Date</td>
						<td>Action</td>
					</tr>
				</thead>

				{/* Table Body */}
				<tbody className='text-center'>
					{contacts
						.filter((contact) =>
							contact.userName.toLowerCase().includes(query.toLowerCase())
						)
						.map((contact) => (
							<Contact
								key={contact._id}
								contact={contact}
								handleChange={handleChange}></Contact>
						))}
				</tbody>
			</table>
		</div>
	);
};

export default ContactTable;
