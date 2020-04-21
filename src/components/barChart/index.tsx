import React from 'react';

import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Tooltip,
  XAxis,
  YAxis
} from 'recharts';

interface BarData {
  dataKey: string,
  fill: string
};

interface BarProps {
  bars: BarData[],
  xAxis: string,
  [key: string]: any // this allow any props for ReactChart
};

export default function({
  bars = [],
  xAxis,
  ...rechartAttrs
}: BarProps) {
  return (
    <BarChart {...rechartAttrs}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey={xAxis} />
      <YAxis />
      <Tooltip />
      <Legend />
      {bars.map(({ dataKey, fill }) => (
        <Bar dataKey={dataKey} fill={fill}/>
      ))}
    </BarChart>
  );
};
