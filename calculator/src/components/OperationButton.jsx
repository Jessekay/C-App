import { ACTIONS } from './actions.jsx'

const LABELS = { "/": "÷", "*": "x" }

function OperationButton({ dispatch, operation, className = ""}) {

  const handleOperation = () => dispatch({type: ACTIONS.CHOOSE_OPERATION, payload: { operation }})

  return (
    <button
      type="button"
      className={`h-27 bg-[#f38636] text-3xl text-white cursor-pointer active:brightness-90 ${className}`}
      onClick={handleOperation}
    >
      {LABELS[operation] ?? operation}
    </button>
  )
}

export default OperationButton