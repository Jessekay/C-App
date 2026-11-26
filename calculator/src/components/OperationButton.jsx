const LABELS = { "/": "÷", "*": "x" }

function OperationButton({ operation, className = ""}) {
  return (
    <button
      type="button"
      className={`h-27 bg-[#f38636] text-3xl text-white cursor-pointer active:brightness-90 ${className}`}
    >
      {LABELS[operation] ?? operation}
    </button>
  )
}

export default OperationButton