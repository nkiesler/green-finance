import Layout from '../components/MainLayout';
import {Team as TeamComponent} from '../components/Team';
import Footer from '../components/Footer';

export default function Team() {
  return (
    <Layout>
    	<TeamComponent/>
    	<Footer/>
    </Layout>
  );
}