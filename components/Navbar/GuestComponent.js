import Link from "next/link";

const GuestComponent = () => (
	<li className="nav-item auth-btns">
    	<Link href="/login">
        	<span className="auth-btn">Login</span>
    	</Link>
    	<Link href="/signup">
        	<span className="auth-btn mt-md-0 mt-2 signup">Sign up</span>
        </Link>	
    </li>
);

export default GuestComponent;