import Link from 'next/link';
import Newsletter from "./Newsletter"; // concept and newsletter
import CallRequest from "./CallRequest";

const Info = () => (
	<section className="section-content main-txt">
	    <div className="container">
	        <div className="row">
	            <div className="col-lg-4 col-12">
	                <div className="golden-text">
	                    what we do
	                </div>
	                <div className="section-heading">
	                    What we do
	                </div>
	                <p>
	                    We corporate with cash short industries providing them the capital they need to operate in return for a interest rate enabling us to provide you 5%.
	                </p>
	            </div>
	            <div className="col-lg-4 col-md-6">

	                <Newsletter/>

	            </div>
	            <div className="col-lg-4 col-md-6">
	                <div className="section-item mt-lg-0">
	                    <div className="icon">
	                        <img src="img/section1/graphic_arrow.svg" alt="icon" />
	                        <div className="partners-heading mt-2">
	                            Nordic Based
	                        </div>
	                        <p className="mt-2 desc">Our team are from Denmark and will be able to assist you in all Nordic
	                            languages, German and English</p>
	                        <Link href="/team">
		                        <button className="section-btn mt-2">
		                            Our Team
		                        </button>
	                        </Link>
	                    </div>
	                </div>
	                <CallRequest />
	            </div>

	        </div>
	    </div>
	</section>
);

export default Info;