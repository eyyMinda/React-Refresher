import { useState } from "react";
import Modal from "./Modal";
import Backdrop from "./Backdrop";

function Card(props) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  function handleModal() {
    isModalOpen ? setIsModalOpen(false) : setIsModalOpen(true);
  }
  function handleConfirmDelete() {
    handleModal();
  }

  return (
    <>
      <div className="card">
        <h3>{props.title}</h3>
        <p>{props.description}</p>

        <div className='actions'>
          <button className='btn' onClick={handleModal}>Delete</button>
        </div>
      </div>

      {isModalOpen && <Modal onCancel={handleModal} onConfirm={handleConfirmDelete} />}
      {isModalOpen && <Backdrop onCancel={handleModal} />}
    </>
  )
}

export default Card;