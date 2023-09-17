import { useState } from "react";
import "./App.css";
import ContactTable from "./components/ContactTable";
import Header from "./components/Header";


function App() {
	const [query , setQuery] = useState("");

	return (
		<div className='w-full'>
			{/* contact table header */}
			<Header setQuery={setQuery}/>

			{/* contact table */}
			<div className="m-2 ">
			<ContactTable query={query} />
			</div>
		</div>
	);
}

export default App;
