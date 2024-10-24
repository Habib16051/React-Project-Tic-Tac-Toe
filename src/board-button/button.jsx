import PropTypes from "prop-types";
import { useState } from "react";
const Square = () => {
  const [value, setValue] = useState(null);
  //   const handleClick = () => {
  //     console.log("Button is clickced!");

  return (
    <>
      {/* Implement arrow function */}
      <button
        onClick={() => {
          setValue("X");
        }}
        className="bg-white border border-gray-500 h-12 w-12 m-1 leading-9 text-lg"
      >
        {value}
      </button>
    </>
  );
};

Square.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired, // Expect either string or number
};
export default Square;
