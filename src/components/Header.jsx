import { AiOutlineSortAscending, AiOutlineSortDescending, AiOutlinePlus } from 'react-icons/ai';
import Searchbar from './Searchbar';
import { useEffect, useState } from 'react';
import AddContact from './AddContact/AddContact';
import axiosCustomInstance from '../axios/axiosCustomInstance';

const Header = ({ contacts, setContacts, setQuery}) => {
  // Show the Add Contact page with popup
	const [showPopup, setShowPopup] = useState(false);
  const [sortBy, setSortBy] = useState(null)
  
  useEffect(() => {
		const fetchData = async () => {
			let data;
			if (!sortBy) {
				data = await axiosCustomInstance.get(
					`/api/contacts`
				);
			} else if (sortBy === 'descending') {
				data = await axiosCustomInstance.get(
					`/api/contacts/descending`
				);
			} else if (sortBy === 'ascending') {
				data = await axiosCustomInstance.get(
					`/api/contacts/ascending`
				);
			} 
			setContacts(data.data);
		};

		fetchData().catch((err) => alert('error', err.message));
	}, [sortBy, contacts]);

	const handleFindContact = (e) => {
		e.preventDefault();

		axiosCustomInstance
			.get(`/api/contacts/contact?name=${e.target.name.value}`)
			.then((res) => setContacts([res.data]))
			.catch((err) => alert('error', err.message));
	};
	const togglePopup = () => {
		setShowPopup(!showPopup);
	};
    return (
        <div className='w-full bg-primary flex items-center justify-between py-3 px-6 text-white'>
				<h1 className='text-xl font-semibold'>Contacts</h1>

				<div className="flex items-center gap-2">
					{/* Search Bar */}
					<Searchbar setQuery={setQuery}/>

          {/* Ascending Order */}
          <div className="text-2xl text-primary bg-white my-3 px-3 py-2 rounded-lg cursor-pointer" title='Ascending Order' onClick={() => setSortBy('ascending')}>
            <AiOutlineSortAscending />
          </div>

          {/* Descending Order */}
          <div className="text-2xl text-primary bg-white my-3 px-3 py-2 rounded-lg cursor-pointer" title='Descending Order' onClick={() => setSortBy('descending')}>
            <AiOutlineSortDescending />
          </div>

          {/* Create New Contact */}
          <div className="text-2xl px-3 py-2 text-primary bg-white my-3 rounded-lg cursor-pointer" title='Create New Contact' onClick={togglePopup}>
            <AiOutlinePlus/>
          </div>
          {showPopup && (
					<AddContact togglePopup={togglePopup}></AddContact>
				)}
				</div>
        
			</div>
    );
};

export default Header;