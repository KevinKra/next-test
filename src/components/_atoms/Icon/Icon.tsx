import React from "react";

interface IIcon {
  /**
   * provide a single icon element, example: `<MdiDelete />`
   * note: styles applied directly to the icon will override the css tailwind styles.
   */
  children: JSX.Element;
  noHover?: boolean;
  onClick?: () => void;
  /**
   * note: customStyles override all base styles
   */
  customStyles?: string;
}

/**
 * `<Icon />` component serves as a baseline wrapper to unify the styles and behaviors for icons.
 * It is not required to wrap every single instance of icons, but generally provides a consistent
 * ui behavior across implementations.
 */
const Icon = ({ onClick, customStyles, children, noHover }: IIcon) => {
  // if implementation includes an onClick property, we treat is as a button.
  if (onClick) {
    return (
      <button
        className={
          customStyles
            ? customStyles
            : `text-warmGray-700 cursor-pointer transition ${
                noHover ? "" : "hover:text-warmGray-800"
              }`
        }
        type="button"
        onClick={onClick}
      >
        {children}
      </button>
    );
  } else {
    return (
      <div
        className={
          customStyles
            ? customStyles
            : `text-warmGray-700 transition ${
                noHover ? "" : "hover:text-warmGray-800"
              }`
        }
      >
        {children}
      </div>
    );
  }
};

export default Icon;
