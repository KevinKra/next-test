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
  outlined?: boolean;
  disabled?: boolean;
  action: () => void;
}

const Button = ({
  text,
  ariaLabel,
  type = "button",
  fullWidth,
  showButtonMirror,
  outlined,
  disabled,
  action,
}: IButton) => {
  const handleKeyUp = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    if (e.key === "Enter") {
      console.log("Enter pressed");
      action();
    }
  };

  return (
    <div className="relative w-full h-fit">
      {showButtonMirror && (
        <div className="z-[-1] -translate-x-2 translate-y-2 absolute bg-rose-500 h-full w-full" />
      )}
      <button
        className={`
        font-medium
        p-4
        px-6
        transition
        ${fullWidth ? "w-full" : "w-fit"}
        ${
          outlined
            ? "bg-white text-black border border-black hover:bg-gray-50 active:bg-gray-100"
            : "bg-black text-white hover:bg-gray-900 active:bg-gray-800"
        }
        ${
          disabled && outlined && "text-rose-500 hover:bg-white active:bg-white"
        }
        ${
          disabled &&
          !outlined &&
          "text-gray-400 bg-gray-700 hover:bg-gray-700 active:bg-gray-700 line-through"
        }
      `}
        disabled={disabled}
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
