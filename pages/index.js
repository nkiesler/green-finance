import {Header} from '../components/Homepage';
import {Info} from '../components/Homepage';
import {Stats} from '../components/Homepage';
import {Carousel} from '../components/Homepage';
import {Features} from '../components/Homepage';
import {Clients} from '../components/Homepage';
import Footer from '../components/Footer';



export default function Index() {
  return (
    <>
    	<Header/>
    	<Info/>
    	<Stats/>
    	<Carousel/>
    	<Features/>
    	<Clients/>
    	<Footer/>
    </>
  );
}