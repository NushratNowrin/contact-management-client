const Searchbar = ({ setQuery }) => {
	return (
		<div className='text-secondary'>
			<form>
				<input
					type='search'
					name='search'
					id='search'
					placeholder='Search here by name'
					className='input input-bordered my-3 px-3 py-2 rounded-lg'
					onChange={(event) => setQuery(event.target.value)}
				/>
			</form>
		</div>
	);
};

export default Searchbar;
