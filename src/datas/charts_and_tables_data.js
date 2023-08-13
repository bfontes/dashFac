import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject } from '@syncfusion/ej2-react-charts';

export const metricData = {
  data: [
    {
      id: "oee",
      label: "oee",
      value: 0.68,
      type: "percentage",
      description: "The overall equipment efficiency",
      category: "efficiency",
    },
    {
      id: "sl",
      label: "Speed loss",
      value: -10.5,
      type: "number",
      description: "The line speed loss",
      category: "efficiency",
    },
    {
      id: "lbp",
      label: "Loss before pallets",
      value: -268,
      type: "number",
      description: "Loss of produced goods before reaching the palletizer",
      category: "efficiency",
    },
    {
      id: "cln_shift",
      label: "Cleaning in shift",
      value: 2280,
      type: "secs",
      description:
        "Time spent cleaning the machines during the last shift",
      category: "shift",
    },
    
    {
      id: "unexplained",
      label: "Unexplained downtime",
      value: 180,
      type: "secs",
      description: "The downtime caused by undocumented reasons",
      category: "downtime",
    },
    {
      id: "mech_problems",
      label: "Mechanical problems",
      value: 1210,
      type: "secs",
      description: "The downtime caused by mechanical problems",
      category: "downtime",
    },
  ],
};
export const StackedData = {
  data: [
    {
      id: "cln_shift",
      label: "Cleaning in shift",
      value: 2280,
      type: "secs",
      description:
        "Time spent cleaning the machines during the last shift",
      category: "shift",
    },
    
    {
      id: "unexplained",
      label: "Unexplained downtime",
      value: 180,
      type: "secs",
      description: "The downtime caused by undocumented reasons",
      category: "downtime",
    },
    {
      id: "mech_problems",
      label: "Mechanical problems",
      value: 1210,
      type: "secs",
      description: "The downtime caused by mechanical problems",
      category: "downtime",
    },
  ],
};

const areaChartData = [
  [
    { x: new Date(2002, 0, 1), y: 630 },
    { x: new Date(2003, 0, 1), y: 2880 },
  ],
  [
    { x: new Date(2002, 0, 1), y: 180 },
    { x: new Date(2003, 0, 1), y: 1210 },
  ],
];
export const areaPrimaryXAxis = {
  valueType: 'DateTime',
  labelFormat: 'y',
  majorGridLines: { width: 0 },
  intervalType: 'Years',
  edgeLabelPlacement: 'Shift',
  labelStyle: { color: 'gray' },
};

export const areaPrimaryYAxis = {
  labelFormat: '{value}s',
  lineStyle: { width: 0 },
  maximum: 2900,
  interval: 300,
  majorTickLines: { width: 0 },
  minorTickLines: { width: 0 },
  labelStyle: { color: 'gray' },

};

export const areaCustomSeries = [
  {
    dataSource: areaChartData[0],
    xName: 'x',
    yName: 'y',
    name: 'Shift',
    opacity: '0.8',
    type: 'SplineArea',
    width: '2',

  },
  {
    dataSource: areaChartData[1],
    xName: 'x',
    yName: 'y',
    name: 'Downtime',
    opacity: '0.8',
    type: 'SplineArea',
    width: '2',
  },
];


export const barPrimaryXAxis = {
  valueType: 'Category',
  interval: 1,
  majorGridLines: { width: 0 },
};
export const barPrimaryYAxis = {
  majorGridLines: { width: 0 },
  majorTickLines: { width: 0 },
  lineStyle: { width: 0 },
  labelStyle: { color: 'transparent' },
};

export const barChartData = [
  [
    { x: 'cln_shift"', y: 630 },
  ],
  [
    { x: '"mech_problems', y: 1210 },
  ],
  [
    { x: 'unexplained', y: 180 },
  ],
];

export const barCustomSeries = [
  {
    dataSource: barChartData[0],
    xName: 'x',
    yName: 'y',
    name: 'Time spent (in seconds) cleaning the machines during the last shift',
    type: 'Column',
    marker: {
      dataLabel: {
        visible: true,
        position: 'Top',
        font: { fontWeight: '600', color: '#ffffff' },
      },
    },
  },
  {
    dataSource: barChartData[1],
    xName: 'x',
    yName: 'y',
    name: 'The downtime (in seconds) caused by mechanical problems',
    type: 'Column',
    marker: {
      dataLabel: {
        visible: true,
        position: 'Top',
        font: { fontWeight: '600', color: '#ffffff' },
      },
    },
  },
  {
    dataSource: barChartData[2],
    xName: 'x',
    yName: 'y',
    name: 'The downtime (in seconds) caused by undocumented reasons',
    type: 'Column',
    marker: {
      dataLabel: {
        visible: true,
        position: 'Top',
        font: { fontWeight: '600', color: '#ffffff' },
      },
    },
  },
];


export const pieChartData = [
  { x: 'oee', y: 0.68, text: '68%' },
  { x: 'Speed loss', y:-10.5, text: '-10.5%' },
  { x: 'Loss before pallets', y: -268, text: '-268%' },
  { x: 'Cleaning in shift', y: 2280, text: '228%' },
  { x: 'Shift duration', y: 8, text: '0.8%' },
  { x: 'Unexplained downtime', y: 180, text: '1.8%' },
  { x: 'Mechanical problems', y: 1210, text: '12.1%' },
];

export const ecomPieChartData = [
  { x: 'Speed loss', y:-10.5, text: '-10.5%' },
  { x: 'Shift duration', y: 8, text: '0.8%' },
  
];
const categories = ["efficiency", "shift", "downtime"];
//criar um array de dados da matriz, que correspondem a categoria atual usando o filter, em seguida
//uso o map dnv para tranformar o resultado em um array de obj, com propriedades x e y,
//o resultado é um array de array 
const stackedChartData = categories.map((category) => {
  return StackedData.data.filter((item) => item.category === category).map((item) => {
    {/*retorna um array para cada categoria com objetos com props x e y */}
    return { x: item.label, y: item.value };
  });
});
export const stackedCustomSeries = categories.map((category, index) => {
  return {
    dataSource: stackedChartData[index],
    xName: 'x',
    yName: 'y',
    name: category,
    type: 'StackingColumn',
    background: index === 0 ? 'blue' : index === 1 ? 'orange' : 'green',
  };
});

export const stackedPrimaryXAxis = {
  majorGridLines: { width: 0 },
  minorGridLines: { width: 0 },
  majorTickLines: { width: 0 },
  minorTickLines: { width: 0 },
  interval: 1,
  lineStyle: { width: 0 },
  labelIntersectAction: 'Rotate45',
  valueType: 'Category',
};

export const stackedPrimaryYAxis = {
  lineStyle: { width: 0 },
  minimum: -300,
  maximum: 3000,
  interval: 300,
  majorTickLines: { width: 0 },
  majorGridLines: { width: 1 },
  minorGridLines: { width: 1 },
  labelFormat: '{value}',
}
