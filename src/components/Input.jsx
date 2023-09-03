
function Input({label, type, id, inputRef, placeholder, className}) {
  return (
    <>
      <label htmlFor={id} className='sr-only'>
        {label}
      </label>
      <input
        ref={inputRef} 
        type={type}
        name={id}
        id={id}
        placeholder={placeholder}
        className={className}
      />
    </>
  );
}
export default Input;
