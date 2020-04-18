import React, { useContext } from "react";
import Link from "next/link";
import { AppContext } from "../context/AppContext";
import GuestComponent from "./GuestComponent";
import UserComponent from "./UserComponent";


const Navbar = props => {

	const { user } = useContext(AppContext);

	const { navbarTheme } = props;

	const clickHandler = () => {
		const h = window.innerHeight;
    	window.scrollTo(0, h);
	}

	return(
	    <nav className={"navbar navbar-expand-lg navbar-light d-flex pt-4 " + navbarTheme}>
	        <div className="container">
	        	<Link href="/">
		            <div className="navbar-brand font-weight-bold">
		                <img src={ navbarTheme == "dark" ? "/img/logoblue.png" : "/img/logowhite.png"} width="40" />
		            </div>
	            </Link>
	            <button className="navbar-toggler" type="button" data-toggle="collapse"
	                    data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
	                    aria-expanded="false" aria-label="Toggle navigation">
	                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
	                     stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
	                     className="feather feather-menu">
	                    <line x1="3" y1="12" x2="21" y2="12"/>
	                    <line x1="3" y1="6" x2="21" y2="6"/>
	                    <line x1="3" y1="18" x2="21" y2="18"/>
	                </svg>
	            </button>

	            <div className="collapse navbar-collapse" id="navbarSupportedContent">
	                <ul className="navbar-nav ml-auto align-items-lg-center">
	                	<Link href="/">
		                    <li className="nav-item active">
		                        <span className="nav-link">Home <span className="sr-only">(current)</span></span>
		                    </li>
		                </Link>    
	                    <li className="nav-item">
	                        <span className="nav-link" onClick={clickHandler}>How it works</span>
	                    </li>
	                    <Link href="/team">
		                    <li className="nav-item">
		                        <span className="nav-link">Team</span>
		                    </li>
		                </Link>
	                    { user ? <UserComponent/> : <GuestComponent/> }
	                    
	                </ul>
	            </div>
	        </div>
	    </nav>
	)
}

export { Navbar };