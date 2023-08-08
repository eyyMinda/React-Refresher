
function Modal(props) {
  return (
    <div className='modal'>
      <h3>Are you sure?</h3>

      <button className='btn btn--alt' onClick={props.onCancel}>Cancel</button>
      <button className='btn' onClick={props.onConfirm}>Confirm</button>
    </div>
  )
}

export default Modal;