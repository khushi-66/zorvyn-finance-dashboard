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

    
    <div className="row g-3 mt-2">

      <div className="col-12 col-md-4">
        <div className="card shadow p-4 text-center">
          <h5>💰 Total Balance</h5>
          <h3 className="text-primary">₹ {balance}</h3>
        </div>
      </div>

      <div className="col-12 col-md-4">
        <div className="card shadow p-4 text-center">
          <h5>
            <i className="bi bi-graph-up-arrow me-2 text-success"></i>
            Income
          </h5>
          <h3 className="text-success">₹ {totalincome}</h3>
        </div>
      </div>

      <div className="col-12 col-md-4">
        <div className="card shadow p-4 text-center">
          <h5>
            <i className="bi bi-graph-down-arrow me-2 text-danger"></i>
            Expense
          </h5>
          <h3 className="text-danger">₹ {totalExpense}</h3>
        </div>
      </div>

    </div>

    {/* Charts Section */}
    <div className="row mt-4">

      {/* Line Chart */}
      <div className="col-12 col-md-6 mt-4">
        <h4 className="text-center mb-3">
          <i className="bi bi-bar-chart-line me-2 text-primary"></i>
          Monthly Income vs Expense
        </h4>

        <div className="w-100 overflow-auto">
          <Linechart />
        </div>
      </div>

      {/* Pie Chart */}
      <div className="col-12 col-md-6 mt-4">
        <h4 className="text-center mb-3">
          <i className="bi bi-pie-chart me-2 text-primary"></i>
          Expense Distribution
        </h4>

        <div className="w-100 overflow-auto">
          <Piechart data={pieData} />
        </div>
      </div>

    </div>

   
    <div className="text-center mt-4">
      <h4 className="mb-3">
        <i className="bi bi-clock-history me-2"></i>
        Recent Transaction History
      </h4>
    </div>

    <div className="table-responsive">
      <table className="table table-hover table-bordered text-center">
        <thead >
          <tr>
            <th>ID</th>
            <th>Date</th>
            <th>Amount</th>
            <th>Category</th>
            <th>Type</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {recentTransaction.map((obj) => (
            <tr key={obj.id}>
              <td>{obj.id}</td>
              <td>{obj.date}</td>
              <td>₹ {obj.amount}</td>
              <td>{obj.category}</td>
              <td>{obj.type}</td>

              <td>
                {obj.type === "income" ? (
                  <span className="text-success fw-bold">
                    + ₹ {obj.amount}
                  </span>
                ) : (
                  <span className="text-danger fw-bold">
                    - ₹ {obj.amount}
                  </span>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

  </div>
);}