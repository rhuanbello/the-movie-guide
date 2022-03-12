import {
  Container,
  PersonInfo
} from './styles';

export const PersonCredits = ({ personDetails }) => {

  const {
    also_known_as,
    birthday,
    place_of_birth,
    gender,
    moviesCount
  } = personDetails || {};

  const listOfPersonInfo = [
    {
      title: 'Gênero',
      content: gender === '1' ? 'Masculino' : 'Feminino',
    },
    {
      title: 'Data de Nascimento',
      content: `
      ${new Date(birthday).toLocaleDateString('pt-BR', { dateStyle: 'long' })} 
      (${new Date().getFullYear() - new Date(birthday).getFullYear()} anos de idade)`,
    },
    {
      title: 'Local de Nascimento',
      content: place_of_birth,
    },
    {
      title: 'Aparece em',
      content: moviesCount + ' filmes',
    },
    {
      title: 'Também conhecido(a) como',
      content: also_known_as,
    },
  ]

  return (
    <Container>
      <h2>Informações Pessoais</h2>
      {listOfPersonInfo.map(({ title, content }) => (

        <PersonInfo>
          <h3>{title}</h3>
          {content === also_known_as ? (
            content?.map((name) => (
              <p>{name}</p>
            ))
          ) : (
            <p>{content}</p>
          )}
        </PersonInfo>

      ))}
    </Container>
  );
};


