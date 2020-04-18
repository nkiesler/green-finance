import Navbar from '../Navbar';
import Head from 'next/head';


const MainLayout = props => (
	<div>
	    <Navbar navbarTheme="dark" />
	    {props.children}
	 </div>
);

export { MainLayout };