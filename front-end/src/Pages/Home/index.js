import React from 'react';
import AuthGuard from '../../components/AuthGuard';

function Home() {
  return (
    <AuthGuard>
      <h1>Home</h1>
    </AuthGuard>
  );
}

// Incluir <Login /> quando for necessário verificar a autenticação do usuario

export default Home;
