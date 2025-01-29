import React from 'react';
import Navbar from '../shared/Navbar';

const SiteHeader = () => {
	return (
		<header className="relative z-50 mb-2 w-full">
			{/* <div className="flex items-center justify-between"> */}
				<Navbar />
			{/* </div> */}
		</header>
	);
};

export default SiteHeader;
