import React from 'react';

// eslint-disable-next-line react/display-name
const MyInput = React.forwardRef(
  ({ label, type, id, placeholder, className, labelClass, ...restProps }, inputRef) => {
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
  },
);

export default MyInput;
