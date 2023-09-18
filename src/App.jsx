import { useState } from "react";
import ContactTable from "./components/ContactTable";
import Header from "./components/Header";


function App() {
	const [contacts, setContacts] = useState([]);
	const [query , setQuery] = useState("");
	return (
		<div className='w-full'>
			{/* contact table header */}
			<Header contacts={contacts} setContacts={setContacts} setQuery={setQuery}/>

			{/* contact table */}
			<div className="m-2 ">
			<ContactTable contacts={contacts} setContacts={setContacts} query={query} />
			</div>
		</div>
	);
}

export default App;
