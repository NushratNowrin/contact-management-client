import { RxCross2 } from "react-icons/rx";
import "./AddContact.css"

const AddContact = ({ togglePopup }) => {
    return (
        <div className='bg-white'>
			<div className='popup2'>
				<div className='popup-content2'>
					<button
						onClick={togglePopup}
						className='w-full flex justify-end items-end mb-10'>
						<RxCross2 className='text-3xl  text-primary hover:text-[#3e5ec1]' />
					</button>
					<h1 className=' text-3xl text-center font-bold text-primary'>
						Edit Contact
					</h1>
					<form className='card-body my-5'>
						<div className='form-control'>
							<input
								type='text'
								name='userName'
								id='userName'
								placeholder='Contact Name'
								required
								className='w-full px-3 py-1 rounded-xl placeholder-gray-500 border-2 border-gray-400 text-black mb-3 focus:bg-violet-200 focus:placeholder-gray-300'
							/>
						</div>
						<div className='form-control'>
							<input
								type='text'
								name='number'
								id='number'
								placeholder='Contact Number'
								required
								className='w-full px-3 py-1 rounded-xl placeholder-gray-500 border-2 border-gray-400 text-black mb-3 focus:bg-violet-200 focus:placeholder-gray-300'
							/>
						</div>
						<div className='form-control'>
							<input
								type='email'
								name='email'
								id='email'
								placeholder='Email'
								required
								className='w-full px-3 py-1 rounded-xl placeholder-gray-500 border-2 border-gray-400 text-black mb-3 focus:bg-violet-200 focus:placeholder-gray-300'
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

export default AddContact;