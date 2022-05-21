import React from 'react';

export const ProjectTableHeaderModal = () => {
  return (
    <thead style={{ visibility: 'hidden', height: 0 }}>
      <tr>
        <td style={{ width: '5%' }} />
        <td style={{ width: '35%' }} />
        <td style={{ width: '30%' }} align='left' />
        <td style={{ width: '15%' }} align='center' />
        <td style={{ width: '15%' }} align='center' />
      </tr>
    </thead>
  );
};
