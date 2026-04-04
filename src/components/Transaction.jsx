import { useEffect, useState } from "react";
import transaction from "../data/transaction"
import { Link } from "react-router-dom";
export default function Transaction()
{
    const[search,setSearch]=useState('');
     const[filtertype,setFilterType]=useState('');
     const[filtercategory,setFilterCategory]=useState('');
     const[data,setData]=useState(transaction);
     const [inputvalue,setInputvalue]=useState('');


useEffect(()=>{
  let filteredData=[...transaction];

    if(! isNaN(search.trim())){
filteredData=filteredData.filter(
      (obj)=>  obj.amount >= Number(search.trim())
      ||
      obj.amount === Number(search.trim())
)
    }else{
filteredData=filteredData.filter(
      (obj)=>  obj.category.toLowerCase().includes(search.toLowerCase())
      ||
      obj.type.toLowerCase().includes(search.toLowerCase())
     )

    }
if(filtertype !== '')
    {
      filteredData=filteredData.filter((obj)=>obj.type === filtertype 
      
      )
    }

    if(filtercategory !== '')
    {
filteredData=filteredData.filter((obj)=>obj.category === filtercategory 
    )
    }


 setData(filteredData);
},[search,filtercategory,filtertype]);

return (
<div className='container-fluid '>
  
{data.length === 0 ?( 
  <h2>No transactions available</h2>):(
<>
{/* ##################### transaction button  #################### */}
    <div className="d-flex justify-content-center mt-3">
<div className='text-center btn btn-primary mb-3 fs-4 px-4'>
    <i className="bi bi-clock-history me-2"></i>
    Transaction History</div>
    </div>

{/* ##################### Search and Filter  Button  #################### */}
<div className="d-flex flex-row justify-content-between align-items-center mb-3">
    <div className="d-flex align-items-center" style={{minWidth:"50%"}}>
<input className="form-control" id="searchbtn"type="text" 
 placeholder="Search Transaction"
 onChange={(e)=>setInputvalue(e.target.value)}/>
    <div className="row">
    <label onClick={()=>setSearch(inputvalue)} htmlFor="searchbtn" className="ms-4 px-2 btn btn-primary form-label mt-1 py-2 col-12">
        <i className="bi bi-search me-2"></i>
        Search
      
    </label></div>
    
    </div>
    <div className="d-flex gap-1">
      <label htmlFor="filter" className="btn btn-primary me-2">FilterBy</label>
    
    <select className="form-select" onChange={(e)=>setFilterType(e.target.value)}>
      <option value="">All Types</option>
      <option value="income">Income</option>
      <option value="expense">Expense</option>
    </select>

     <select className="form-select"  onChange={(e)=>setFilterCategory(e.target.value)}>
      <option value="">All Categories</option>
      <option value="Salary">Salary</option>
      <option value="Freelance">Freelance</option>
      <option value="Food">Food</option>
      <option value="Rent">Rent</option>
      <option value="Transport">Transport</option>
    </select>
    </div>
</div>

{/* ############################## Show Transaction ####################################### */}
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
    data.map((obj)=>(
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
</table></>
)};
</div>

    );
}