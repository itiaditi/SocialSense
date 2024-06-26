"use client"
import React from 'react';
import { ResponsiveLine } from '@nivo/line';

interface LineChartProps {
  className?: string;
}

const LineChart: React.FC<LineChartProps> = ({ className }) => {
  return (
    <div className={className} style={{ height: '400px', width: '100%' }}>
      <ResponsiveLine
        data={[
          {
            id: 'Desktop',
            data: [
                { x: 'Jan', y: 43 },
              { x: 'Feb', y: 47 },
              { x: 'Mar', y: 51 },
              { x: 'Apr', y: 54 },
              { x: 'May', y: 57 },
              { x: 'Jun', y: 64 },
              { x: 'Jul', y: 67 },
              { x: 'Aug', y: 68 },
              { x: 'Sept', y: 70 },
              { x: 'Oct', y: 73 },
              { x: 'Nov', y: 76 },
              { x: 'Dec', y: 82 },
            ],
          },
          {
            id: 'Mobile',
            data: [
                { x: 'Jan', y: 53 },
                { x: 'Feb', y: 58 },
                { x: 'Mar', y: 62 },
                { x: 'Apr', y: 66 },
                { x: 'May', y: 70 },
                { x: 'Jun', y: 72 },
                { x: 'Jul', y: 75 },
                { x: 'Aug', y: 80 },
                { x: 'Sept', y: 85 },
                { x: 'Oct', y: 88 },
                { x: 'Nov', y: 92 },
                { x: 'Dec', y: 96 },
            ],
          },
        ]}
        margin={{ top: 10, right: 10, bottom: 40, left: 40 }}
        xScale={{ type: 'point' }}
        yScale={{ type: 'linear' }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 0,
          tickPadding: 16,
        }}
        axisLeft={{
          tickSize: 0,
          tickValues: 5,
          tickPadding: 16,
        }}
        colors={['#f1b505', '#dba12c']}
        pointSize={6}
        useMesh={true}
        gridYValues={6}
        theme={{
          tooltip: {
            chip: {
              borderRadius: '9999px',
            },
            container: {
              fontSize: '12px',
              textTransform: 'capitalize',
              borderRadius: '6px',
            },
          },
          grid: {
            line: {
              stroke: '#f3f4f6',
            },
          },
        }}
        curve="monotoneX"
        role="application"
      />
    </div>
  );
};

export default LineChart;