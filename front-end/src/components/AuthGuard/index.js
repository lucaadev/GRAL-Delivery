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
  return children;
}

export default AuthGuard;
