import { useState } from "react";
import { DelBtn, UpdBtn } from "../Workers/Workers.styled";
import { RiDeleteBin6Line } from "react-icons/ri";
import { BiEditAlt } from "react-icons/bi";
import { Loader, Modal } from "../../components";
import { useDeleteEmployeeMutation } from "../../redux/employesApi";
import PropTypes from "prop-types";
import { BtnBox, HeaderBtn } from "../Header/Header.styled";
import { Item, Text, BtnSpan } from "./WorkerItem.styled";
import { Link } from "react-router-dom";

export const WorkerItem = ({ index, name, code, id }) => {
  const [removePerson, object] = useDeleteEmployeeMutation();
  const deleting = object.isLoading;

  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  const handleDeletePerson = async (id) => {
    await removePerson(id).unwrap();
  };

  return (
    <Item>
      <Text style={{ flex: "0.2" }}>{index + 1}</Text>
      <Text style={{ flex: "0.3" }}>{code}</Text>
      <Text style={{ flex: "0.7" }}>{name}</Text>
      <BtnSpan style={{ flex: "0.2" }}>
        <DelBtn onClick={handleOpenModal}>
          {deleting ? <Loader size={20} /> : <RiDeleteBin6Line />}
        </DelBtn>
        <Link to="/update">
          <UpdBtn>
            <BiEditAlt />
          </UpdBtn>
        </Link>
      </BtnSpan>

      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        <h3>Хотите удалить {name}?</h3>
        <BtnBox>
          <HeaderBtn
            variant="contained"
            color="success"
            onClick={() => handleDeletePerson(id)}
          >
            {deleting ? <Loader size={20} /> : "Да"}
          </HeaderBtn>
          <HeaderBtn
            sx={{ marginLeft: "15px" }}
            variant="contained"
            color="error"
            onClick={handleCloseModal}
          >
            Нет
          </HeaderBtn>
        </BtnBox>
      </Modal>
    </Item>
  );
};

WorkerItem.propTypes = {
  name: PropTypes.string,
  code: PropTypes.string,
  id: PropTypes.string,
  index: PropTypes.number,
};
