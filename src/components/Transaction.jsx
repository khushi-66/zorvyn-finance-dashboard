import { useEffect, useState } from "react";
import transaction from "../data/transaction"
import { Link } from "react-router-dom";
export default function Transaction()
{
    const[search,setSearch]=useState('');
    const handleSearch=(e)=>{
    setSearch(e.target.value);
    console.log(search);
    }  
return (
<div className='container-fluid '>

   {/* ##################### transaction button  #################### */}
    <div className="d-flex justify-content-center mt-3">
<div className='text-center btn btn-primary mb-3 fs-4 px-4'>
    <i className="bi bi-clock-history me-2"></i>
    Transaction History</div>
    </div>

{/* ##################### Search and Filter  Button  #################### */}
<div className="d-flex flex-row justify-content-between align-items-center mb-3">
    <div className="d-flex align-items-center" style={{minWidth:"50%"}}>
<input className="form-control" id="searchbtn"type="text" value={search} placeholder="Search Transaction" onChange={()=>handleSearch(e)}/>
    <div className="row">
    <label htmlFor="searchbtn" className="ms-4 px-2 btn btn-primary form-label mt-1 py-2 col-12">
        <i className="bi bi-search me-2"></i>
        Search
      
    </label></div>
    
    </div>
    <div className="d-flex gap-1">
      <label htmlFor="filter" className="btn btn-primary me-2">FilterBy</label>
    
    <select className="form-select">
      <option value="">All Types</option>
      <option value="income">Income</option>
      <option value="expense">Expense</option>
    </select>

     <select className="form-select">
      <option value="">All Categories</option>
      <option value="Salary">Salary</option>
      <option value="Freelance">Freelance</option>
      <option value="Food">Food</option>
      <option value="Rent">Rent</option>
      <option value="Transport">Transport</option>
    </select>
    </div>
</div>



<table class="table table-hover table-bordered">
  <thead>
    <tr>
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
    transaction.map((obj)=>(
        <tr>
      <td>{obj.id}</td>
      <td>{obj.date}</td>
      <td>{obj.amount}</td>
      <td>{obj.category}</td>
      <td>{obj.type}</td>
       {obj.type==='income' ?( <td> Incoming ₹ {obj.amount}</td>):( <td>outgoing ₹ {obj.amount}</td>)}
     </tr>
     ))}
</tbody>
</table>
</div>

    );
}