import { node, string, func } from 'prop-types';

function Button({ children, type, className, onClick, ...restProps }) {
  return (
    <button type={type} className={className} onClick={onClick} {...restProps}>
      {children}
    </button>
  );
}
export default Button;

Button.propTypes = {
  children: node,
  type: string,
  className: string,
  onClick: func,
};
