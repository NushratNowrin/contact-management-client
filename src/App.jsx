import { useContext, useState } from "react";
import ContactTable from "./components/ContactTable";
import Header from "./components/Header";
import Login from "./components/Login/Login";
import { AuthContext } from "./Provider/AuthProviders";

function App() {
	const [contacts, setContacts] = useState([]);
	const [query, setQuery] = useState("");
	const { user, login, logout } = useContext(AuthContext);
	return (
		<div>
			<div className='w-full'>
				{/* contact table header */}
				<Header
					contacts={contacts}
					setContacts={setContacts}
					setQuery={setQuery}
				/>

				{/* contact table */}
				<div className='m-2 '>
					<ContactTable
						contacts={contacts}
						setContacts={setContacts}
						query={query}
					/>
				</div>
			</div>
		</div>
	);
}

export default App;
