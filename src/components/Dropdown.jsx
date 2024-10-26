const Dropdown = ({ items }) => {
  return (
    <ul className="absolute mt-1 bg-white shadow-lg rounded-md py-2 z-50 flex flex-col space-y-2 px-2">
      {items.map((item, index) => (
        <li key={index} className="roboto transition-all duration-300 ease-in-out transform hover:text-translate-x-2 cursor-pointer px-3 py-2 rounded hover:bg-bluegradient text-blue-900/80 hover:text-white">
          {item}
        </li>
      ))}
    </ul>
  );
};

export default Dropdown;
