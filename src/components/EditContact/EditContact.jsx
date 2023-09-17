import { RxCross2 } from "react-icons/rx";
import "./EditContact.css";
import Swal from "sweetalert2/dist/sweetalert2.js";
import "sweetalert2/src/sweetalert2.scss";

const EditContact = ({ togglePopup, contact }) => {
    const { _id, userName, number, email } = contact;
    // console.log(_id, userName)
	const handleUpdate = (event) => {
		event.preventDefault();
		const form = event.target;
		const updatedUserName = form.name.value;
		const updatedNumber = form.phone.value;
		const updatedEmail = form.mail.value;
		const updatedContact = { userName:updatedUserName, number:updatedNumber, email:updatedEmail };
		fetch(
			`http://localhost:5000/api/contacts/${_id}`,
			{
				method: "PUT",
				headers: {
					"content-type": "application/json",
				},
				body: JSON.stringify(updatedContact),
			}
		)
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				if (data.modifiedCount > 0) {
					Swal.fire({
						title: "Success",
						text: "Contact is updated successfully",
						icon: "success",
						confirmButtonText: "Okay",
					});
					form.price.value = "";
					form.quantity.value = "";
					form.description.value = "";
				}
			});
            togglePopup();
	};
	return (
		<div className='bg-white'>
			<div className='popup'>
				<div className='popup-content'>
					<button
						onClick={togglePopup}
						className='w-full flex justify-end items-end mb-10'>
						<RxCross2 className='text-3xl  text-primary hover:text-red-600' />
					</button>
					<h1 className=' text-3xl text-center font-bold text-primary'>
						Edit Contact
					</h1>
					<form className='card-body my-5' onSubmit={handleUpdate}>
						<div className='form-control'>
							<input
								type='text'
								name='name'
								id='name'
								placeholder='Contact Name'
                                defaultValue={userName}
								required
								className='w-full px-5 py-1 rounded-lg placeholder-gray-400 border-b-2 border-gray-400 text-black mb-3 focus:bg-violet-200 focus:placeholder-gray-400'
							/>
						</div>
						<div className='form-control'>
							<input
								type='text'
								name='phone'
								id='phone'
								placeholder='Contact Number'
                                defaultValue={number}
								required
								className='w-full px-5 py-1 rounded-lg placeholder-gray-400 border-b-2 border-gray-400 text-black mb-3 focus:bg-violet-200 focus:placeholder-gray-400'
							/>
						</div>
						<div className='form-control'>
							<input
								type='email'
								name='mail'
								id='mail'
								placeholder='Email'
                                defaultValue={email}
								required
								className='w-full px-5 py-1 rounded-lg placeholder-gray-400 border-b-2 border-gray-400 text-black mb-3 focus:bg-violet-200 focus:placeholder-gray-400'
							/>
						</div>
						<div className='form-control mt-6'>
							<input type="submit" value="Update" className='px-4 py-2 text-white bg-primary hover:bg-pink-600 rounded-lg' />
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default EditContact;
