import React from 'react';
import { Table } from 'reactstrap';


const DespositTable = () => {
	return (
		<Table borderless>
	      <thead>
	        <tr>
	          <th>Title</th>
	          <th></th>
	        </tr>
	      </thead>
	      <tbody>
	        <tr>
	          <td>Total Deposit</td>
	          <td>28.000</td>
	        </tr>
	        <tr>
	          <td>Earned profit</td>
	          <td>+ 700</td>
	        </tr>
	        <tr>
	          <td>Next quarterly payout</td>
	          <td>April 1</td>
	        </tr>
	        <tr>
	          <td>Given Interest rate</td>
	          <td>5%</td>
	        </tr>
	      </tbody>
	    </Table>
	);
}

export default DespositTable;