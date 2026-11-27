import { ACTIONS } from './actions.jsx'

function DigitButton({ dispatch, digit, className = "" }) {

  const handleClick = () => dispatch({type: ACTIONS.ADD_DIGIT, payload: { digit }})
  return (
    <button
      type="button"
      className={`h-27 bg-[#dcdcdc] text-3xl text-black cursor-pointer active:brightness-90 ${className}`}
      onClick={handleClick}
    >
      {digit}
    </button>
  )
}

export default DigitButton