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
  /**
   * when true, fill width to parent container
   */
  fullWidth?: boolean;
  action: () => void;
}

const Button = ({
  text,
  ariaLabel,
  type = "button",
  fullWidth,
  action,
}: IButton) => {
  const handleKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      console.log("Enter pressed");
      action();
    }
  };

  return (
    <button
      className={`
        bg-black 
        text-white 
        font-medium
        p-4
        px-6
        transition
        hover:bg-black/80
        ${fullWidth ? "w-full" : "w-fit"}
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
