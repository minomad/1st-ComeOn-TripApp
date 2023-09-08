function Input({ label, type, id, inputRef, placeholder, className, labelClass, ...restProps }) {
  return (
    <>
      <input
        ref={inputRef}
        type={type}
        name={id}
        id={id}
        placeholder={placeholder}
        className={className}
        {...restProps}
      />
      <label htmlFor={id} className={labelClass}>
        {label}
      </label>
    </>
  );
}
export default Input;
