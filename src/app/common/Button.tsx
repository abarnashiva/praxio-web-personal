import { Arrow } from ".";

const Button: React.FC<{ text: string; outline?: boolean; onClick?:()=>void }> = (props) => {
  const baseStyles = `group flex items-center shadow-sm shadow-neutral-500 px-5 py-3 transition-all  border-2 border-primary `;
  const filledStyles = `bg-primary-500 hover:bg-primary-400 text-white`;
  const outlinedStyles = ` hover:border-primary-400 text-primary`;
  const btnStyles = `${baseStyles} ${
    props.outline ? outlinedStyles : filledStyles
  } my-4`;
  return (
    <button className={`${btnStyles}`} onClick={props.onClick}>
      <span>{props.text}</span>
      <span className="group-hover:translate-x-4 transition-transform w-4 mx-4">
        <Arrow fill={`${props.outline ? "#ED1F24CC" : ""}`} />
      </span>
    </button>
  );
};

const SecondaryButton: React.FC<{ text: string; outline?: boolean; onClick?:()=>void }> = (props) => {
  const baseStyles = `group flex items-center shadow-sm shadow-neutral-500 px-5 py-3 transition-all  border-2 border-white `;
  const filledStyles = `bg-white hover:bg-white hover:shadow-md text-primary-500 font-semibold`;
  const outlinedStyles = ` hover:border-primary-400 text-primary`;
  const btnStyles = `${baseStyles} ${
    props.outline ? outlinedStyles : filledStyles
  } my-4`;
  return (
    <button className={`${btnStyles}`} onClick={props.onClick}>
      <span>{props.text}</span>
      <span className="group-hover:translate-x-4 transition-transform w-4 mx-4">
        <Arrow fill="#ed1f24cc" />
      </span>
    </button>
  );
};

const SimpleButton: React.FC<{ text: string; outline?: boolean; onClick?:()=>void }> = (props) => {
  const baseStyles = `group flex items-center shadow-sm shadow-neutral-500 px-5 py-3 transition-all  border-2 border-primary `;
  const filledStyles = `bg-primary-500 hover:bg-primary-400 text-white`;
  const outlinedStyles = ` hover:border-primary-400 text-primary`;
  const btnStyles = `${baseStyles} ${
    props.outline ? outlinedStyles : filledStyles
  } my-4 mx-auto`;
  return (
    <button className={`${btnStyles}`} onClick={props.onClick}>
      <span>{props.text}</span>
    </button>
  );
};

export { Button, SecondaryButton, SimpleButton };

