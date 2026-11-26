import DigitButton from "./components/DigitButtons"
import OperationButton from "./components/OperationButton"

const keyStyle = "h-27 bg-[#dcdcdc] text-3xl text-black cursor-pointer active:brightness-90"

function App() {
  return (
    <main className="flex min-h-screen items-center justify-center p-4 font-[Arial,sans-serif]">
      <div className="w-full max-w-sm">
        <input
          type="text"
          value="0"
          readOnly
          aria-label="Calculator display"
          className="block h-16 w-full bg-[#7a7c89] px-4 text-right text-5xl text-white focus:outline-none"
        />

        <div className="grid grid-cols-4 gap-px bg-[#7a7c89] pt-px">
          <button className={keyStyle}>AC</button>
          <button className={keyStyle}>+/-</button>
          <button className={keyStyle}>%</button>
          <OperationButton operation="/" />

          <DigitButton digit="7" />
          <DigitButton digit="8" />
          <DigitButton digit="9" />
          <OperationButton operation="*" />

          <DigitButton digit="4" />
          <DigitButton digit="5" />
          <DigitButton digit="6" />
          <OperationButton operation="-" />

          <DigitButton digit="1" />
          <DigitButton digit="2" />
          <DigitButton digit="3" />
          <OperationButton operation="+" />

          <DigitButton digit="0" className="col-span-2" />
          <DigitButton digit="." />
          <OperationButton operation="=" />
        </div>
      </div>
    </main>
  )
}

export default App