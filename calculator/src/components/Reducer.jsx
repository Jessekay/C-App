import ACTIONS from './actions.jsx'

function reducer(state, {type, payload}) {
  switch(type) {
    case ACTIONS.ADD_DIGIT:
      if (state.overwrite) {
        return {
          ...state,
          currentOperand: payload.digit,
          overwrite: false
        }
      }
      if (payload.digit === "0" && currentOperand === "0") {
        return state;
      }

      if (payload.digit === "." && currentOperand === ".") {
        return state;
      }

  }
}

function evaluate({ currentOperand, previousOperand, operation }) {
  const prev = parseFloat(previousOperand)
  const current = parseFloat(currentOperand)
  
  if(isNaN(prev) || isNaN(current)) return ""

  let computation = ""

  switch(operation) {
    case "+":
      computation = prev + current
      break;

    case "-":
      computation = prev - current
      break;
    case "*":
      computation = prev * current
      break
    case "/":
      computation = prev / current
      break;
  }
  return computation.toString()
}

export default reducer