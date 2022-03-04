import { Modal } from '@mui/material';
import { Container, Content } from './styles';
import { AiOutlineClose } from "react-icons/ai";


export const EditProfileModal = ({ openModal, handleModalState }) => {

  return (
    <Modal
      open={openModal}
      onClose={handleModalState}
    >
      <Container>
        <Content profileChanged={false}>
          <header>
            <button
              onClick={handleModalState}
            >
              <AiOutlineClose />
            </button>
            <h3>
              Editar Perfil
            </h3>
            <button>
              Salvar
            </button>
          </header>
          <p>
            Text in a modal
          </p>
          <p>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </p>
        </Content>
      </Container>
    </Modal>
  )

}