import { useState } from "react";

const Searchbar = () => {
	const [, setQuery] = useState("");
	return (
		<div className='text-secondary'>
			<form>
				<div>
					<input
						type='search'
						name='search'
						id='search'
						placeholder='Search here by name'
						className='input input-bordered my-3 px-3 py-2 rounded-lg'
						onChange={(event) => setQuery(event.target.value)}
					/>
				</div>
			</form>
		</div>
	);
};

export default Searchbar;
