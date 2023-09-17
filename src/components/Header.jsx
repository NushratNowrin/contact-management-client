import { AiOutlineSortAscending, AiOutlineSortDescending, AiOutlinePlus } from 'react-icons/ai';
import Searchbar from './Searchbar';
import { useState } from 'react';
import AddContact from './AddContact/AddContact';

const Header = ({ setQuery}) => {
  // Show the Add Contact page with popup
	const [showPopup, setShowPopup] = useState(false);
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
          <div className="text-2xl text-primary bg-white my-3 px-3 py-2 rounded-lg cursor-pointer" title='Ascending Order'>
            <AiOutlineSortAscending />
          </div>

          {/* Descending Order */}
          <div className="text-2xl text-primary bg-white my-3 px-3 py-2 rounded-lg cursor-pointer" title='Descending Order'>
            <AiOutlineSortDescending />
          </div>

          {/* Create New Contact */}
          <div className="text-2xl text-primary bg-white my-3 px-3 py-2 rounded-lg cursor-pointer" title='Create New Contact' >
            <AiOutlinePlus onClick={togglePopup}/>
            {showPopup && (
					<AddContact togglePopup={togglePopup}></AddContact>
				)}
          </div>
          
				</div>
			</div>
    );
};

export default Header;