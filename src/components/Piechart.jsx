import { PieChart, Pie, Tooltip, Legend, ResponsiveContainer } from "recharts";

export default function Piechart({ data }) {
  return (
    <div style={{ width: "100%", height: "300px" }}>
      <ResponsiveContainer>
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            outerRadius="80%"
            label
          />
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}