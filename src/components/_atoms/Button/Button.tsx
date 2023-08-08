import { ButtonHTMLAttributes } from "react";

interface IButton {
  text: string;
  ariaLabel?: string;
  /**
   * defaults `type="button"`
   *
   * prevents buttons triggering form submit unless explicitly set to `type="submit"`
   */
  type?: ButtonHTMLAttributes<HTMLButtonElement>["type"];
  action: () => void;
}

const Button = ({ text, ariaLabel, type = "button", action }: IButton) => {
  const handleKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") console.log("Enter pressed");
  };

  return (
    <button
      className={`
        bg-black 
        text-white 
        font-medium
        p-4
        w-fit
        transition-all
        hover:bg-black/80
      `}
      onClick={action}
      onKeyUp={handleKeyUp}
      aria-label={ariaLabel || text}
      type={type}
    >
      {text}
    </button>
  );
};

export default Button;
