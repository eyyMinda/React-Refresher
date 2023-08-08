import { useState } from "react";
import Modal from "./Modal";
import Backdrop from "./Backdrop";
import css from './styles/Todo.module.css';

function Card(props) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  function handleModal() {
    setIsModalOpen(!isModalOpen);
  }
  function handleConfirmDelete() {
    handleModal();
  }

  return (
    <>
      <div className={css.card}>
        <h3>{props.title}</h3>
        <p>{props.description}</p>

        <div className={css.actions}>
          <button className={css.btn} onClick={handleModal}>Delete</button>
        </div>
      </div>

      {isModalOpen && <Modal onCancel={handleModal} onConfirm={handleConfirmDelete} />}
      {isModalOpen && <Backdrop onCancel={handleModal} />}
    </>
  )
}

export default Card;