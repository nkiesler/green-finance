import Link from 'next/link';
import Navbar from '../Navbar';
import Particles from 'react-particles-js';

const Header = () => {

	const clickHandler = () => {
		const h = window.innerHeight;
    	window.scrollTo(0, h);
	}

	return (
		<header>
		    <div className="overlay"></div>
		    <div className="header-content">
		        <Navbar/>
		        <div className="intro position-relative">

		            <div className="container">

		                <h1 className="intro-big">
		                    Get 5% interest on your fortune
		                </h1>
		                <div className="intro-small">
		                    Getting 5% in todays world is still possible, how it works
		                    <a href="#" className="arrow-btn ml-3 d-inline-flex align-items-center justify-content-center">
		                        <svg width="15" height="8" viewBox="0 0 15 8" fill="none" xmlns="http://www.w3.org/2000/svg">
		                            <path d="M14.3536 4.35355C14.5488 4.15829 14.5488 3.84171 14.3536 3.64645L11.1716 0.464466C10.9763 0.269204 10.6597 0.269204 10.4645 0.464466C10.2692 0.659728 10.2692 0.976311 10.4645 1.17157L13.2929 4L10.4645 6.82843C10.2692 7.02369 10.2692 7.34027 10.4645 7.53553C10.6597 7.7308 10.9763 7.7308 11.1716 7.53553L14.3536 4.35355ZM0 4.5H14V3.5H0V4.5Z"
		                                  fill="#FCFCFC"/>
		                        </svg>
		                    </a>
		                </div>
		                <a className="scroll-btn mt-lg-0 mt-5" onClick={clickHandler}>Scroll to see more
		                    <svg className="ml-3" width="15" height="8" viewBox="0 0 15 8" fill="none"
		                         xmlns="http://www.w3.org/2000/svg">
		                        <path d="M14.3536 4.35355C14.5488 4.15829 14.5488 3.84171 14.3536 3.64645L11.1716 0.464466C10.9763 0.269204 10.6597 0.269204 10.4645 0.464466C10.2692 0.659728 10.2692 0.976311 10.4645 1.17157L13.2929 4L10.4645 6.82843C10.2692 7.02369 10.2692 7.34027 10.4645 7.53553C10.6597 7.7308 10.9763 7.7308 11.1716 7.53553L14.3536 4.35355ZM0 4.5H14V3.5H0V4.5Z"
		                              fill="#FCFCFC"/>
		                    </svg>
		                </a>
		            </div>

		        </div>
		    </div>

			<Particles 
		        params={{ 
		          particles: { 
		            number: { 
		              value: 150, 
		              density: { 
		                enable: true, 
		                value_area: 1000, 
		              } 
		            }, 
		            size: {
		            	value: 3
		            }
		          },
		          interactivity: {
				    events: {
				      onHover: {
				        enable: true,
				        mode: "repulse"
				      },
				      resize: true
				    }
				  },	
		        }} 
		      /> 
		</header>
	)
	
};

export default Header;