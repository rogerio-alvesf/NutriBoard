import React from 'react';

interface DashboardProps {
  data: string;
}

const Dashboard = ({ data }: DashboardProps) => {
  return (
    <div>
      <h1>Página de Dashboard</h1>
      <p>Dados do dashboard: {data}</p>
    </div>
  );
};

export const getServerSideProps = async () => {
  const data = 'Dados do dashboard carregados do servidor';

  return {
    props: { data },
  };
};

export default Dashboard;