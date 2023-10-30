import { Arrow } from ".";

const Button: React.FC<{ text: string }> = (props) => {
  return (
    <button className="group flex items-center shadow-sm shadow-neutral-500 px-5 py-3 bg-red-600 hover:bg-red-500 text-white transition-all">
      <span>{props.text}</span>
      <span className="group-hover:translate-x-4 transition-transform w-4 mx-4">
        <Arrow />
      </span>
    </button>
  );
};

export default Button;
