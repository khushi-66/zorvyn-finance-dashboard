import { LineChart,Line,XAxis,YAxis,Tooltip,CartesianGrid } from "recharts";
export default function  Linechart(){
   const chartData=[
  { name: "Mar", income: 20000, expense: 15000 },
  { name: "Apr", income: 30000, expense: 20000 },
  { name: "May", income: 25000, expense: 18000 },
];
    return(
        <>
        
        
   <LineChart width={500} height={400} data={chartData}>
    <CartesianGrid strokeDasharray="3 3"/>
    <XAxis dataKey="name"/>
    <YAxis/>
    <Tooltip/>
    <Line type="monotone" dataKey="income" stroke="#28a745"/>
   <Line type="monotone" dataKey="expense" stroke="#dc3545"/>
   
   </LineChart></>
    );
}