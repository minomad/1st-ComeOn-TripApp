import React from 'react';

// eslint-disable-next-line react/display-name
const MyForm = React.forwardRef(({ children, onSubmit, className }, formRef) => {
  return (
    <form onSubmit={onSubmit} className={className} ref={formRef}>
      {children}
    </form>
  );
});

export default MyForm;
