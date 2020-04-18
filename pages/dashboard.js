import React, { useContext } from 'react';
import Layout from '../components/MainLayout';
import { Dashboard as DashboardComponent } from '../components/Dashboard';
import { AppContext } from '../components/context/AppContext';


export default function Dashboard() {
	const {user} = useContext(AppContext);


	 return (
	    <Layout>
	     	<DashboardComponent/>
	    </Layout>
	 );
}