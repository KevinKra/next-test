import { ButtonHTMLAttributes } from "react";
import toast from "react-hot-toast";

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
  showDecoration?: boolean;
  /**
   * when `toastMessage` provided, toast message will trigger on action
   */
  toastMessage?: string;
  outlined?: boolean;
  disabled?: boolean;
  action: () => void;
}

const Button = ({
  text,
  ariaLabel,
  type = "button",
  fullWidth,
  showDecoration,
  toastMessage,
  outlined,
  disabled,
  action,
}: IButton) => {
  // custom toast that appears on button click --if conditions met
  const buttonToast = () =>
    toast.custom(
      <div className="border border-black bg-white p-4 shadow-lg">
        <p>{toastMessage}</p>
      </div>,
      { position: "bottom-right" },
    );

  const handleKeyUp = (e?: React.KeyboardEvent<HTMLButtonElement>) => {
    if (e.key === "Enter") {
      toastMessage && buttonToast();
      action();
    }
  };

  const handleClick = () => {
    toastMessage && buttonToast();
    action();
  };

  return (
    <div className="relative h-fit w-full">
      {showDecoration && (
        <div className="absolute z-10 h-full w-full -translate-x-2 translate-y-2 bg-rose-500" />
      )}
      <button
        className={`
          relative
          z-20
          p-4
          px-6
          font-medium
          transition
          ${fullWidth ? "w-full" : "w-fit"}
          ${
            outlined
              ? "border border-black bg-white text-black hover:bg-gray-50 active:bg-gray-100"
              : "border border-black bg-black text-white hover:bg-gray-900 active:bg-gray-800"
          }
          ${
            disabled &&
            outlined &&
            "cursor-default hover:bg-white active:bg-white"
          }
          ${disabled && !outlined && "text-gray-400 line-through"}
      `}
        disabled={disabled}
        onClick={handleClick}
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
