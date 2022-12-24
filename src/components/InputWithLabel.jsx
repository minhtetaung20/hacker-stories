function InputWithLabel({ id, value, onChange, childern, isFocus = false }) {
  return (
    <>
      <label htmlFor={id}>{childern}</label>
      <input
        type="text"
        id={id}
        value={value}
        onChange={onChange}
        autoFocus={isFocus}
      />
    </>
  );
}

export default InputWithLabel;
