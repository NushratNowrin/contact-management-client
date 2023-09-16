import "./App.css";
import ContactTable from "./components/ContactTable";
import Header from "./components/Header";


function App() {

	return (
		<div className='w-full'>
			{/* contact table header */}
			<Header />

			{/* contact table */}
			<div className="m-2 ">
			<ContactTable />
			</div>
		</div>
	);
}

export default App;
