import css from './styles/Modal.module.css';

function Modal(props) {
  return (
    <div className={css.modal}>
      <h3>Are you sure?</h3>

      <button className={css.btn + " " + css.btn_alt} onClick={props.onCancel}>Cancel</button>
      <button className={css.btn} onClick={props.onConfirm}>Confirm</button>
    </div >
  )
}

export default Modal;