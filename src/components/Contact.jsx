import { IoIosContact } from 'react-icons/io';
import { AiFillDelete, AiFillEdit } from 'react-icons/ai';
const Contact = (contact) => {
    const { name, spoc, number, email, date} = contact
	return (
		<tr className="even:bg-[#F2F0F2] hover:bg-yellow-100">
			<td>
				<input
					className='checkbox appearance-none rounded-sm checked:bg-primary border border-primary'
					type='checkbox'
					name=''
					id=''
				/>
			</td>
			<td className="text-left align-baseline"><IoIosContact className='inline text-xl text-primary mr-1'/>{name}</td>
			
			<td>CTA</td>
			<td>{spoc}</td>
			<td>{number}</td>
			<td>{email}</td>
			<td>{date}</td>
            <td>
            <AiFillDelete className='text-lg inline mr-2 text-primary'/><AiFillEdit className='text-lg inline text-primary'/>
            </td>
		</tr>
	);
};

export default Contact;
