import DigitButton from "./components/DigitButtons"
import OperationButton from "./components/OperationButton"
import { useReducer } from "react"
import { ACTIONS } from "./components/actions"
import reducer from "./components/Reducer"

const keyStyle = "h-27 bg-[#dcdcdc] text-3xl text-black cursor-pointer active:brightness-90"

function App() {

  const [state, dispatch] = useReducer(reducer, {})

  return (
    <main className="flex min-h-screen items-center justify-center p-4 font-[Arial,sans-serif]">
      <div className="w-full max-w-sm">
        <input
          type="text"
          value={state.currentOperand || state.previousOperand || 0}
          readOnly
          aria-label="Calculator display"
          className="block h-16 w-full bg-[#7a7c89] px-4 text-right text-5xl text-white focus:outline-none"
        />

        <div className="grid grid-cols-4 gap-px bg-[#7a7c89] pt-px">
          <button className={keyStyle} onClick={() => dispatch({type: ACTIONS.CLEAR})}>AC</button>
          <button className={keyStyle}>+/-</button>
          <button className={keyStyle}>%</button>
          <OperationButton operation="/" dispatch={dispatch}/>

          <DigitButton digit="7" dispatch={dispatch}/>
          <DigitButton digit="8" dispatch={dispatch}/>
          <DigitButton digit="9" dispatch={dispatch}/>
          <OperationButton operation="*" dispatch={dispatch}/>

          <DigitButton digit="4" dispatch={dispatch}/>
          <DigitButton digit="5" dispatch={dispatch}/>
          <DigitButton digit="6" dispatch={dispatch}/>
          <OperationButton operation="-" dispatch={dispatch}/>

          <DigitButton digit="1" dispatch={dispatch}/>
          <DigitButton digit="2" dispatch={dispatch}/>
          <DigitButton digit="3" dispatch={dispatch}/>
          <OperationButton operation="+" dispatch={dispatch}/>

          <DigitButton digit="0" className="col-span-2" dispatch={dispatch}/>
          <DigitButton digit="." dispatch={dispatch}/>
          <button
            className="h-27 bg-[#f38636] text-3xl text-white cursor-pointer active:brightness-90"
            onClick={() => dispatch({ type: ACTIONS.EVALUATE })}
          >
            =
          </button>
        </div>
      </div>
    </main>
  )
}

export default App