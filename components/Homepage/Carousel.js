import Link from 'next/link';

const Carousel = () => (
	<section className="section-content text-center">
	    <div className="container">
	    
	        <div className="golden-text">what we do</div>
	        <div className="section-heading">Earn interest today</div>
	        <div className="owl-carousel section-slider">
	            <div data-dot="<button className='section-dot'><span>1</span></button>" className="item">
	                <div className="slider-item">
	                    <div className="slider-item-heading">
	                        Get a gross return of 5% P.A
	                    </div>
	                    <div className="slider-item-content">
	                        Our collaboration with leasing companies and other ventures enable us to conduct low-risk
	                        investments and provide you the interest you deserve on your store of value.
	                    </div>
	                    <Link href="/signup">
	                    	<button className="carousel-button">Sign up</button>
	                    </Link>	
	                </div>
	            </div>
	            
	        </div>

	    </div>
	</section>
);

export default Carousel;