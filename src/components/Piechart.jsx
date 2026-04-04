import { Legend, Pie, PieChart, Tooltip } from "recharts";

export default function Piechart({data})
{
    return(
       <PieChart  width={500} height={400}>
        <Pie
          data={data}
          dataKey="value"
          nameKey="name"
          outerRadius={150}
        />
        <Tooltip/>
        <Legend/>
        
       </PieChart>
    );
}