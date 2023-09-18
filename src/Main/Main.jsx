import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./Main.css";

const Main = () => {
	return (
		<div className='Main relative flex items-center justify-center'>
			<div className='absolute bg-black bg-opacity-60 top-0 bottom-0 right-0 left-0'></div>
			<div className='z-10 flex flex-col items-center justify-center h-1/2 w-1/2 bg-white bg-opacity-50 rounded-xl text-center gap-5'>
                <div className="text-primary font-bold text-4xl tracking-widest">
                    WELCOME
                </div>
				<div className="text-gray-900 font-semibold">
					<h1 className=" text-2xl">Let&rsquo;s move on our contact page</h1>
					<h2 className="">Just Click the button below!!</h2>
				</div>
				<Link
					to='/home'
					className='text-lg font-semibold bg-white bg-opacity-80 py-2 px-5 rounded-xl text-primary contact-button shadow-lg'>
					Contact Management System
				</Link>
			</div>
		</div>
	);
};

export default Main;
