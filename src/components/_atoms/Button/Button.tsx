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
  /**
   * when true, reveals a matching width div below the button for visual aesthetic
   */
  showButtonMirror?: boolean;
  action: () => void;
}

const Button = ({
  text,
  ariaLabel,
  type = "button",
  fullWidth,
  showButtonMirror,
  action,
}: IButton) => {
  const handleKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      console.log("Enter pressed");
      action();
    }
  };

  return (
    <div className="relative w-full h-full">
      {showButtonMirror && (
        <div className="z-[-1] -translate-x-2 translate-y-2 absolute bg-rose-500 h-full w-full" />
      )}
      <button
        className={`
        bg-black 
        text-white 
        font-medium
        p-4
        px-6
        transition
        hover:bg-gray-800
        ${fullWidth ? "w-full" : "w-fit"}
      `}
        onClick={action}
        onKeyUp={handleKeyUp}
        aria-label={ariaLabel || text}
        type={type}
      >
        {text}
      </button>
    </div>
  );
};

export default Button;
