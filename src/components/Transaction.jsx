import { useEffect, useState } from "react";
import transaction from "../data/transaction"
import { CSVLink } from "react-csv";
export default function Transaction()
{
    const[search,setSearch]=useState('');
     const[filtertype,setFilterType]=useState('');
     const[filtercategory,setFilterCategory]=useState('');
     const[data,setData]=useState(transaction);
     const [inputvalue,setInputvalue]=useState('');
     const[sortValue,setSortValue]=useState('');
      const[role,setRole]=useState('');
     const[Alldata,setAllData]=useState(()=>{
      const saved=localStorage.getItem("transactions");
      return saved? JSON.parse(saved) :transaction
     });
    const[editData,setEditData]=useState(null);
   const[showform,setShowForm]=useState(false);
   const[newData,setNewData]=useState({
            amount: "",
            type: "income",
            category: "Salary",
   })

 const handleAdd=()=>{
     const newtransaction={
      id: Date.now(),
      date: new Date().toLocaleDateString(),
      ...newData,
      amount:Number(newData.amount),
     };

     setAllData([newtransaction,...Alldata])
     setShowForm(false);
      setNewData({
    amount: "",
    type: "income",
    category: "Salary",
  });
    };
    const[selectedIds,setSelectedIds]=useState([]);

    const handleMultipleDelete = () => {
  if (window.confirm("Delete selected transactions?")) {
    const updated = Alldata.filter(
      (item) => !selectedIds.includes(item.id)
    );
    setAllData(updated);
    setSelectedIds([]); 
  }
};

    useEffect(() => {
  localStorage.setItem("transactions", JSON.stringify(Alldata));
}, [Alldata]);
const handleEdit=(item)=>{
            setEditData(item);
           }
         const handleUpdate=()=>{
             let updated=Alldata.map((obj)=>(
                 obj.id === editData.id ?editData : obj
             )
            )
             setAllData(updated);
               setEditData(null);
         }
       
     const handleDelete=(id)=>{
         if(window.confirm("Are You Sure")){
         const updated=Alldata.filter((obj)=>obj.id!=id);
         setAllData(updated);
        }
     }


      
useEffect(()=>{
  let updatedData=[...Alldata];

    if(! isNaN(search.trim())){
updatedData=updatedData.filter(
      (obj)=>  obj.amount >= Number(search.trim())
      ||
      obj.amount === Number(search.trim())
)
    }else{
updatedData=updatedData.filter(
      (obj)=>  obj.category.toLowerCase().includes(search.toLowerCase())
      ||
      obj.type.toLowerCase().includes(search.toLowerCase())
     )

    }
if(filtertype !== '')
    {
      updatedData=updatedData.filter((obj)=>obj.type === filtertype 
      
      )
    }

    if(filtercategory !== '')
    {
updatedData=updatedData.filter((obj)=>obj.category === filtercategory 
    )
    }

    if(sortValue==='low')
    {
      updatedData=updatedData.sort((a,b)=>a.amount-b.amount);
    }else if(sortValue==='high'){
      updatedData=updatedData.sort((a,b)=>b.amount-a.amount);
    };

setData(updatedData);
},[search,filtercategory,filtertype,sortValue,Alldata]);

return (
<div className="container-fluid px-2 px-md-4">

  {data.length === 0 ? (
    <h2 className="text-center mt-4">No transactions available</h2>
  ) : (
    <>
     
      <div className="d-flex justify-content-between align-items-center mt-3"> 
        <div className="btn btn-primary mb-3 fs-5 px-4">
          <i className="bi bi-clock-history me-2"></i>
          Transaction History
        </div>
   
        {role === "admin" && selectedIds.length > 0 && (
  <button
    className="btn btn-danger mb-2"
    onClick={handleMultipleDelete}
  >
    🗑 Delete Selected ({selectedIds.length})
  </button>
)}
     
     {role==='admin' && (<>
      <button className="btn btn-success mb-3" onClick={()=>setShowForm(!showform)}>
        <i className="bi bi-plus-lg me-1"></i>
    Add Transaction
  </button>
   
    <CSVLink
        data={data}
        headers={[
          { label: "ID", key: "id" },
          { label: "Date", key: "date" },
          { label: "Amount", key: "amount" },
          { label: "Category", key: "category" },
          { label: "Type", key: "type" },
        ]}
        filename="transactions.csv"
        className="btn btn-success mb-3 ms-2"
      >
        📥 Download CSV
      </CSVLink>
</>
)}



        <select
    className="form-select w-auto"
    onChange={(e) => setRole(e.target.value)}
  >
    <option value="viewer">Viewer</option>
    <option value="admin">Admin</option>
  </select>
      </div>

      
      <div className="row g-2 align-items-center mb-3">

       
        <div className="col-12 col-lg-6">
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              placeholder="Search Transaction"
              onChange={(e) => setInputvalue(e.target.value)}
            />
            <button
              className="btn btn-primary"
              onClick={() => setSearch(inputvalue)}
            >
              <i className="bi bi-search"></i>
            </button>
          </div>
        </div>

        
        <div className="col-12 col-lg-6">
          <div className="d-flex flex-column flex-sm-row gap-2 justify-content-lg-end">

            <select
              className="form-select"
              onChange={(e) => setFilterType(e.target.value)}
            >
              <option value="">All Types</option>
              <option value="income">Income</option>
              <option value="expense">Expense</option>
            </select>

            <select
              className="form-select"
              onChange={(e) => setFilterCategory(e.target.value)}
            >
              <option value="">All Categories</option>
              <option value="Salary">Salary</option>
              <option value="Freelance">Freelance</option>
              <option value="Food">Food</option>
              <option value="Rent">Rent</option>
              <option value="Transport">Transport</option>
            </select>
            <div className="col-12 col-lg-4">
    <select
      className="form-select"
      onChange={(e) => setSortValue(e.target.value)}
    >
      <option value="">Sort By</option>
      <option value="low">Amount Low → High</option>
      <option value="high">Amount High → Low</option>
    </select>
     </div>
   </div>
  </div>
</div>
   <div>
       
       {showform && (
  <div className="card shadow p-3 mb-3">

    <h5 className="text-center text-success mb-3">
      ➕ Add Transaction
    </h5>

    <div className="row g-2">

      <div className="col-12 col-md-4">
        <input
          type="number"
          className="form-control"
          placeholder="Amount"
          value={newData.amount}
          onChange={(e) =>
            setNewData({ ...newData, amount: e.target.value })
          }
        />
      </div>

      <div className="col-12 col-md-4">
        <select
          className="form-select"
          value={newData.type}
          onChange={(e) =>
            setNewData({ ...newData, type: e.target.value })
          }
        >
          <option value="income">Income</option>
          <option value="expense">Expense</option>
        </select>
      </div>

      <div className="col-12 col-md-4">
        <select
          className="form-select"
          value={newData.category}
          onChange={(e) =>
            setNewData({ ...newData, category: e.target.value })
          }
        >
          <option value="Salary">Salary</option>
          <option value="Food">Food</option>
          <option value="Freelance">Freelance</option>
          <option value="Transport">Transport</option>
          <option value="Rent">Rent</option>
        </select>
      </div>

    </div>

    <div className="d-flex justify-content-center gap-2 mt-3">

      <button className="btn btn-success" onClick={handleAdd}>
        Add
      </button>

      <button
        className="btn btn-secondary"
        onClick={() => setShowForm(false)}
      >
        Cancel
      </button>

    </div>

  </div>
)}

{editData && (
  <div className="card shadow p-3 mb-3">

    <h5 className="mb-3 text-center text-primary">
      ✏️ Edit Transaction
    </h5>

    <div className="row g-2">

      <div className="col-12 col-md-6">
        <input
        placeholder="Enter Amount"
          type="number"
          className="form-control"
          value={editData.amount}
          onChange={(e) =>
            setEditData({ ...editData, amount: e.target.value })
          }
        />
      </div>

         <div className="col-12 col-md-6">
        <input
        placeholder="Enter Date"
          type="date"
          className="form-control"
          value={editData.date}
          onChange={(e) =>
            setEditData({ ...editData, date: e.target.value })
          }
        />
      </div>

      <div className="col-12 col-md-6">
        <select
          className="form-select"
          value={editData.type}
          onChange={(e) =>
            setEditData({ ...editData, type: e.target.value })
          }
        >
          <option value="income">Income</option>
          <option value="expense">Expense</option>
        </select>
      </div>

      <div className="col-12 col-md-6">
        <select
          className="form-select"
          value={editData.category}
          onChange={(e) =>
            setEditData({ ...editData, category: e.target.value })
          }
        >
          <option value="Freelance">Freelance</option>
          <option value="Rent">Rent</option>
          <option value="Transaction">Transaction</option>
          <option value="Salary">Salary</option>
          <option value="Food">Food</option>
        </select>
      </div>

    </div>

    <div className="d-flex justify-content-center gap-2 mt-3">
      <button className="btn btn-success" onClick={handleUpdate}>
        Update
      </button>

      <button
        className="btn btn-secondary"
        onClick={() => setEditData(null)}
      >
        Cancel
      </button>
    </div>
</div>
)}

       
   </div>
   
      
      <div className="table-responsive">
        <table className="table table-hover table-bordered align-middle text-center">
          <thead >
            <tr>
              <th>ID</th>
              <th>Date</th>
              <th>Amount</th>
              <th>Category</th>
              <th>Type</th>
              <th>Status</th>
              {
                role==='admin'&& (
                  <>
                  <th>Action</th>
                  <th>Select</th>
                  </>
                )
              }
            </tr>
          </thead>

          <tbody>
            {data.map((obj) => (
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
               {role==='admin' && (<><td>
                 <div className="d-flex justify-content-center gap-2">
                    <button
        className="btn btn-warning btn-sm"
        onClick={() => handleEdit(obj)}
      >
        <i className="bi bi-pencil me-2"></i>
      </button>

      
      <button
        className="btn btn-danger btn-sm ms-2"
        onClick={() => handleDelete(obj.id)}
      >
        <i className="bi bi-trash me-2"></i>
      </button>

                 </div></td>

                 <td>
                  <div className="form-check">
<input className="form-check-input"
      type="checkbox"
      checked={selectedIds.includes(obj.id)}
      onChange={(e) => {
        if (e.target.checked) {
          setSelectedIds([...selectedIds, obj.id]);
        } else {
          setSelectedIds(selectedIds.filter(id => id !== obj.id));
        }
      }}
    /></div>
                 </td></>
               )}
              </tr>
            ))}
          </tbody>

        </table>
      </div>

    </>
  )}
</div>)}