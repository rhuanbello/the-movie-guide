import { Container } from './styles';
import Logo from '../../assets/logo.svg';
import { useNavigate } from "react-router-dom";

export const Header = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <div>
        <img src={Logo} onClick={() => navigate('/')} />
      </div>
    </Container>
  );
}

