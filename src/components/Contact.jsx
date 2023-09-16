const Contact = (contact) => {
    const { name, spoc, number, email, date} = contact
	return (
		<tr className="even:bg-[#F2F0F2]">
			<td>
				<input
					className='checkbox appearance-none rounded-sm checked:bg-primary border border-primary'
					type='checkbox'
					name=''
					id=''
				/>
			</td>
			<td>{name}</td>
			<td>Action</td>
			<td>CTA</td>
			<td>{spoc}</td>
			<td>{number}</td>
			<td>{email}</td>
			<td>{date}</td>
		</tr>
	);
};

export default Contact;
