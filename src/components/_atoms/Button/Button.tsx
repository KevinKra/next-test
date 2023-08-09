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
      action();
    }
  };

  return (
    <div className="relative h-fit w-full">
      {showButtonMirror && (
        <div className="absolute z-[-1] h-full w-full -translate-x-2 translate-y-2 bg-rose-500" />
      )}
      <button
        className={`
        p-4
        px-6
        font-medium
        transition
        ${fullWidth ? "w-full" : "w-fit"}
        ${
          outlined
            ? "border border-black bg-white text-black hover:bg-gray-50 active:bg-gray-100"
            : "bg-black text-white hover:bg-gray-900 active:bg-gray-800"
        }
        ${
          disabled && outlined && "text-rose-500 hover:bg-white active:bg-white"
        }
        ${
          disabled &&
          !outlined &&
          "bg-gray-700 text-gray-400 line-through hover:bg-gray-700 active:bg-gray-700"
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
