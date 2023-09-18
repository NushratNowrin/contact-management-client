import React from 'react';
import { FaFileDownload } from 'react-icons/fa';
import axiosCustomInstance from '../axios/axiosCustomInstance';

const Download = () => {
    const handleDownload = ({contacts}) => {
		axiosCustomInstance({
			url: `/api/contacts/download?email=${contacts[0]?.email}`,
			method: 'GET',
			responseType: 'blob', // Important
		}).then((response) => {
			const url = window.URL.createObjectURL(new Blob([response.data]));
			const link = document.createElement('a');
			link.href = url;
			link.setAttribute('download', 'user_data.xlsx');
			document.body.appendChild(link);
			link.click();
		});
	};
    return (
        <button className='bg-green-500 rounded-md font-semibold hover:bg-green-700 text-white px-5 py-2 mb-2 flex items-center' onClick={handleDownload}>
				<FaFileDownload className="text-lg mr-2 text-white cursor-pointer"/><span>Download</span>
				</button>
    );
};

export default Download;



// export default function DownloadContactsBtn({ userEmail }) {
// 	const handleDownload = () => {
// 		axiosCustomInstance({
// 			url: `/api/contacts/download?email=${userEmail}`,
// 			method: 'GET',
// 			responseType: 'blob', // Important
// 		}).then((response) => {
// 			const url = window.URL.createObjectURL(new Blob([response.data]));
// 			const link = document.createElement('a');
// 			link.href = url;
// 			link.setAttribute('download', 'user_data.xlsx');
// 			document.body.appendChild(link);
// 			link.click();
// 		});
// 	};

// 	return (
		
// 	);
// }