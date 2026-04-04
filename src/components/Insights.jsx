import transactions from "../data/transaction";
export default function Insights()
{
 const totalIncome=[...transactions].filter((obj)=>obj.type==='income')
                   .reduce((prevResult,currObj)=>prevResult+currObj.amount,0);

const totalExpense=[...transactions].filter((obj)=>obj.type==='expense')
                   .reduce((prevResult,currObj)=>prevResult+currObj.amount,0);
let message="";
if(totalExpense>=totalIncome){
    message="You are overspending ⚠️";
}else if(totalIncome>=totalExpense)
{
  message="You are saving money 👍";
}else{
    message="Balanced"
}

const saving=totalIncome-totalExpense;
const categoryMap={};
transactions.forEach((obj)=>{
    if(obj.type==='expense'){
        categoryMap[obj.category] = (categoryMap[obj.category] || 0)  +obj.amount  
    }
})

 let maxCategory="";
 let maxAmount=0;
 const keys=Object.keys(categoryMap)
 keys.forEach((key)=>{
  if(categoryMap[key]>maxAmount){
    maxAmount=categoryMap[key];
    maxCategory=key;
  }

 })
 console.log( "keys : ",keys);
console.group(maxAmount);
console.group(maxCategory);
console.log(  "categoryMap  ",categoryMap);
    return (
         <div className="container mt-4" >
               <div className="row mt-5">
        <div className="col-md-4 mt-5" >
          <div className="mx-4 mt-5 p-4 text-center card shadow"style={{height:"200px"}}>
            <h5 className="mt-5">
    <i className="bi bi-piggy-bank me-2 text-success"></i>
    Savings
  </h5>
  <p className="text-success mt-2">₹ {saving}</p>
          </div>
        </div>

        <div className="col-md-4 mt-5" >
         <div className="mx-4 mt-5 p-4 text-center card shadow"style={{height:"200px"}}>
          <h5 className="mt-5">
    <i className="bi bi-bar-chart-line me-2 text-primary"></i>
    Financial Status
  </h5>
  <p className="mt-2">{message}</p>
          </div>
        </div>

          <div className="col-md-4 mt-5">
           <div className="mx-4 mt-5 p-4 text-center card shadow" style={{height:"200px"}}>
<h5 className="mt-5">
    <i className="bi bi-trophy me-2 text-warning"></i>
    Highest Spending
  </h5 >
  <p className="mt-2">{maxCategory} (₹ {maxAmount})</p>
          </div>
          </div>

               </div>
            </div>
    );
}



