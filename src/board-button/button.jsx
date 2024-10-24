const Square = ({ value }) => {
  const handleClick = () => {
    console.log("Button is clickced!");
  };
  return (
    <>
      <button
        onClick={handleClick}
        className="bg-white border border-gray-500 h-12 w-12 m-1 leading-9 text-lg"
      >
        {value}
      </button>
    </>
  );
};

export default Square;
