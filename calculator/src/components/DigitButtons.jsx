function DigitButton({ digit, className = "" }) {
  return (
    <button
      type="button"
      className={`h-27 bg-[#dcdcdc] text-3xl text-black cursor-pointer active:brightness-90 ${className}`}

    >
      {digit}
    </button>
  )
}

export default DigitButton