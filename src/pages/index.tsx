import React from 'react';

interface HomePageProps {
  data: string;
}

const HomePage = ({ data }: HomePageProps) => {
  return (
    <div>
      <h1>Página Inicial com Renderização do Lado do Servidor</h1>
      <p>Dados buscados do servidor: {data}</p>
    </div>
  );
};

export const getServerSideProps = async () => {
  // Simule a busca de dados de um servidor
  const data = 'Olá do servidor!';

  return {
    props: { data },
  };
};

export default HomePage