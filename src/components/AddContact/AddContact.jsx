import { RxCross2 } from "react-icons/rx";
import moment from 'moment';
import Swal from "sweetalert2";
import "./AddContact.css"

const AddContact = ({togglePopup}) => {
    const handleform = (event) => {
		event.preventDefault();
		const form = event.target;
		const userName = form.userName.value;
		const email = form.email.value;
		const number = form.number.value;
		const date = form.date.value;
		const contact = {
			userName,
			email,
			number,
			date
		};
		console.log(contact);
		// form.reset();
		fetch("http://localhost:5000/api/contacts", {
			method: "POST",
			headers: {
				"content-type": "application/json",
			},
			body: JSON.stringify(contact),
		})
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				if (data.insertedId) {
					Swal.fire({
						title: "Success",
						text: "contact added Successfully",
						icon: "success",
						confirmButtonText: "Okay",
					});

					form.reset();
				}
			});
            togglePopup();
	};
    return (
        <div className='bg-white'>
			<div className='popup-2'>
				<div className='popup-content2 text-base'>
                <button
						onClick={togglePopup}
						className='w-full flex justify-end items-end mb-10'>
						<RxCross2 className='text-3xl  text-primary hover:text-red-600' />
					</button>
					<h1 className=' text-3xl text-center font-bold text-primary'>
						Add Contact
					</h1>
					<form className='card-body my-5' onSubmit={handleform}>
						<div className='form-control'>
							<input
								type='text'
								name='userName'
								id='userName'
								placeholder='Contact Name'
								required
								className='w-full px-5 py-1 rounded-lg placeholder-gray-400 border-b-2 border-gray-400 text-black mb-3 focus:bg-violet-200 focus:placeholder-gray-400'
							/>
						</div>
						<div className='form-control'>
							<input
								type='text'
								name='number'
								id='number'
								placeholder='Contact Number'
								required
								className='w-full px-5 py-1 rounded-lg placeholder-gray-400 border-b-2 border-gray-400 text-black mb-3 focus:bg-violet-200 focus:placeholder-gray-400'
							/>
						</div>
						<div className='form-control'>
							<input
								type='email'
								name='email'
								id='email'
								placeholder='Email'
								required
								className='w-full px-5 py-1 rounded-lg placeholder-gray-400 border-b-2 border-gray-400 text-black mb-3 focus:bg-violet-200 focus:placeholder-gray-400'
							/>
						</div>
						<div className='form-control'>
							<input
								type='text'
								name='date'
								id='date'
								placeholder='Date'
                                value={ moment().format('D-M-Y') }
								readOnly
								className='w-full px-5 py-1 rounded-lg placeholder-gray-400 border-b-2 border-gray-400 text-black mb-3 focus:bg-violet-200 focus:placeholder-gray-400'
							/>
						</div>
						<div className='form-control mt-6'>
							<input type="submit" value="Add" className='px-4 py-2 text-white bg-primary hover:bg-pink-600 rounded-lg' />				
						</div>
					</form>
				</div>
			</div>
		</div>
    );
};

export default AddContact;