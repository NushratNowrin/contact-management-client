import { IoIosContact } from 'react-icons/io';
import { AiFillDelete, AiFillEdit } from 'react-icons/ai';
// import { useState } from 'react';
const Contact = (props) => {
	// const [checked, setChecked] = useState();
    const {  userName, spoc, number, email, date} = props.contact;
	const handleChange = props.handleChange;
    // const handleChecked = () =>{
    //     setChecked(!checked);
    // }  
	return (
		<tr className={`even:bg-[#F2F0F2] hover:bg-yellow-100  cursor-pointer relative checked:bg-black`}>
			<td>
				<input
					className={` checkbox appearance-none rounded-sm border border-primary checked:bg-primary`}
					type="checkbox"
					checked={props.contact?.isChecked || false} 
					onChange={handleChange}
					name={userName}
					id=''
                    
				/>
			</td>
			<td className="text-left align-baseline"><IoIosContact className='inline text-xl text-primary mr-1'/>{userName}</td>
			
			<td>CTA</td>
			<td>{spoc}</td>
			<td>{number}</td>
			<td>{email}</td>
			<td>{date}</td>
            <td>
            <AiFillDelete className='text-lg inline mr-2 text-primary cursor-pointer transition-all ease-in-out duration-100 hover:text-red-700'/><AiFillEdit className='text-lg inline text-primary cursor-pointer transition-all ease-in-out duration-100 hover:text-green-700'/>
            </td>
		</tr>
	);
};

export default Contact;
