/* eslint-disable jsx-a11y/alt-text */
import * as React from 'react';
import ImgAdmin from '../../../assets/img/admin-gerente.png';

function DashboardContent() {

  return (
    <img src={ImgAdmin} />
  );
}

export default function Dashboard() {
return <DashboardContent />;
}