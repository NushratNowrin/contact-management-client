import { AiOutlineSortAscending, AiOutlineSortDescending, AiOutlinePlus } from 'react-icons/ai';
import Searchbar from './Searchbar';

const Header = () => {
    return (
        <div className='w-full bg-primary flex items-center justify-between py-3 px-6 text-white'>
				<h1 className='text-xl font-semibold'>Contacts</h1>

				<div className="flex items-center gap-2">
					{/* Search Bar */}
					<Searchbar />

          {/* Ascending Order */}
          <div className="text-2xl text-primary bg-white my-3 px-3 py-2 rounded-lg" title='Ascending Order'>
            <AiOutlineSortAscending />
          </div>

          {/* Descending Order */}
          <div className="text-2xl text-primary bg-white my-3 px-3 py-2 rounded-lg" title='Descending Order'>
            <AiOutlineSortDescending />
          </div>

          {/* Create New Contact */}
          <div className="text-2xl text-primary bg-white my-3 px-3 py-2 rounded-lg" title='Create New Contact'>
            <AiOutlinePlus />
          </div>
				</div>
			</div>
    );
};

export default Header;