import { Container } from './styles';
import { useNavigate } from "react-router-dom";

export default function Error404() {
  const navigate = useNavigate();

  return (
    <Container>
      <article>
        <h2>Error 404</h2>
        <p>Page Not Found</p>
        <button 
          onClick={() => {
            navigate('/')
          }}
        >
          Voltar à Página Principal
        </button>
      </article>
      <div>
        <img 
          src="https://c.tenor.com/tsiFx3FQXbcAAAAi/john-travolta-actor.gif" 
          alt="this slowpoke moves" 
        />
      </div>
    </Container>
  );
}

