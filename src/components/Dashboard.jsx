import { useState } from 'react';
import transaction from '../data/transaction'

import Linechart from './Linechart';
import Piechart from './Piechart';
export default function Dashboard()
{
  const[data,setData]=useState(transaction);
const recentTransaction=[...data].slice(-5).reverse();
  

  const totalincome=data.filter((obj)=>obj.type==='income')
  .reduce((acc,currObj)=>acc+currObj.amount,0);

  const totalExpense=data.filter((obj)=>obj.type==='expense')
  .reduce((acc,currObj)=>acc+currObj.amount,0)

  const balance=totalincome-totalExpense;



const categoryMap={};
data.forEach((t)=>{
  if(t.type==='expense')
  {
    categoryMap[t.category]=(categoryMap[t.category] || 0) + t.amount;
  }
});


const pieData=Object.keys(categoryMap).map((key)=>({
  name:key,
  value:categoryMap[key]
}));


  return(
   <div className="container-fluid">

      <h2 className="text-center mt-3 mb-4">
        <i className="bi bi-speedometer2 me-2 text-primary"></i>
        Finance Dashboard
      </h2>
      <div className="row g-3 mt-4">
          <div className="col-md-4">
          <div className="card shadow p-4 text-center">
            <h5>
              💰 Total Balance
            </h5>
            <h3 className="text-primary">₹ {balance}</h3>
          </div>
        </div>

       
        <div className="col-md-4">
          <div className="card shadow p-4 text-center">
            <h5>
              <i className="bi bi-graph-up-arrow me-2 text-success"></i>
              Income
            </h5>
            <h3 className="text-success">₹ {totalincome}</h3>
          </div>
        </div>

        
        <div className="col-md-4">
          <div className="card shadow p-4 text-center">
            <h5>
              <i className="bi bi-graph-down-arrow me-2 text-danger"></i>
              Expense
            </h5>
            <h3 className="text-danger">₹ {totalExpense}</h3>
          </div>
        </div>

      </div>

    <div className="row mt-4 mb-4">
       
       <div className="col-6 mt-4">
        <h4 className="mt-4 mb-4 text-center">
          <i className="bi bi-bar-chart-line me-2 text-primary"></i>
          Monthly Income vs Expense
        </h4>
        <div className="d-flex justify-content-center">
         <Linechart/> 
        </div>
        
       </div>

       <div className="col-6 mt-4">
       <h4 className="mt-4 text-center mb-4">
      <i className="bi bi-pie-chart me-2 text-primary"></i>
      Expense Distribution
    </h4>
     <div className="d-flex justify-content-center">
 <Piechart data={pieData}/>
     </div>
     
       </div>

    </div>

{/* ############################## Show Transaction ####################################### */}
<div className="d-flex justify-content-center mt-4">
<h1 className='text-center  mb-3 fs-3 px-4'>
    <i className="bi bi-clock-history me-2"></i>
   Recent Transaction History</h1>
    </div>

<table className="table table-hover table-bordered">
  <thead>
    <tr >
      <th scope="col">ID</th>
      <th scope="col">Date</th>
      <th scope="col">Amount</th>
      <th scope="col">Category</th>
      <th scope="col">Type</th>
      <th scope="col">Note</th>
      </tr>
  </thead>
  <tbody>
{
    recentTransaction.map((obj)=>(
        <tr key={obj.id}>
      <td>{obj.id}</td>
      <td>{obj.date}</td>
      <td>{obj.amount}</td>
      <td>{obj.category}</td>
      <td>{obj.type}</td>
       {obj.type==='income' ?( <td className='text-success'> Incoming ₹ {obj.amount}</td>):( <td className='text-danger'>outgoing ₹ {obj.amount}</td>)}
     </tr>
     ))}
</tbody>
</table>

</div>
    
  );
}
   