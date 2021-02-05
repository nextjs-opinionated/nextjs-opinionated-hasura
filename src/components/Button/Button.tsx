import React, { FC } from "react";

type ButtonTypes = {
  /**
   * Label of the button
   */
  label: string;
  /**
   * Boolean value to define the button style
   */
  outlined?: boolean;
  /**
   * Button click action
   */
  onClick(): void;
};

const BASE_BUTTON =
  "outline-none rounded-full shadow py-3 px-12 font-normal uppercase tracking-wider text-lg focus:outline-none";
const CONTAINED_BUTTON = `${BASE_BUTTON}  bg-blue-500  hover:bg-blue-700 text-white`;
const OUTLINED_BUTTON = `${BASE_BUTTON}   border-2 border-blue-500  hover:border-blue-700   text-blue-500 `;
const Button: FC<ButtonTypes> = ({
  onClick,
  label = "Some label",
  outlined,
}) => {
  return (
    <button
      onClick={onClick}
      className={outlined ? OUTLINED_BUTTON : CONTAINED_BUTTON}
    >
      <span>{label}</span>
    </button>
  );
};
export default Button;
