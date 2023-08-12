//Complete the custom Input component based on the props that it expects to receive
import "./Input.css"

export const Input = ({size,variant,value,onChange,type}) => {
  return <input className={`${size||"md"} ${variant}${type || "text"}`} value={value} onChange={onChange}/>;
};
