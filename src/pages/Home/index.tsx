import { Link, useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  function handleClick() {
    navigate('/coffees');
    // navigate(-1) para voltar
  }

  return (
    <>
      <h1>Coffeeteria</h1>
      <Link to="/coffees">
        <button>Conheça nossos produtos</button>
      </Link>

      <button onClick={ handleClick }>Entrar</button>
    </>
  );
}

export default Home;
