import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

interface PopulationChartProps {
  populationData: { year: number; value: number }[];
}

const PopulationChart: React.FC<PopulationChartProps> = ({ populationData }) => {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <LineChart data={populationData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="year" />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="value" stroke="#82ca9d" />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default PopulationChart;
