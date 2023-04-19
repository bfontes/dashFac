import React from 'react';

import { TableHeader, Table } from '../../components';

const DisplayTable = () => (
  <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
    <TableHeader category="Table" title="Efficiency Indicators and Machine Downtime" />
    <div className="w-full">
      <Table />
    </div>
  </div>
);

export default DisplayTable;
