import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function AuthGuard({ children }) {
  const navigate = useNavigate();

  useEffect(() => {
    // const usuarioLogado = false;
    // if (usuarioLogado) {
    //   navigate('/login');
    // }
    // testa se usuario esta logado
    navigate('/login');
  }, [navigate]);

  // condicional se os dados do usuario estao preenchidos no context e inserir Loading ate estar.

  return children;
}

export default AuthGuard;
