import css from './styles/Backdrop.module.css';

function Backdrop(props) {
  return <div className={css.backdrop} onClick={props.onCancel} />
}

export default Backdrop;