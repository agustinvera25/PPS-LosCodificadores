// components/Button.js

import './Buttons.css';
export default function Buttons(){


const Button = ({ variant, children, onClick }) => {
  return (
    <button className={`button ${variant}`} onClick={onClick}>
      {children}
    </button>
  );
};


}