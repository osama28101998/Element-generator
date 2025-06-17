import React from "react";

const ElementSelector = ({ selectedElement, elements, onElementChange }) => (
  <select
    value={selectedElement}
    onChange={onElementChange}
    className="w-full max-w-md p-3 border-2 border-indigo-300 rounded-lg bg-white focus:outline-none focus:border-indigo-500 transition duration-300 text-gray-700"
  >
    <option value="">Select an HTML Element</option>
    {elements.map((element) => (
      <option key={element} value={element}>
        {element.charAt(0).toUpperCase() + element.slice(1)}
      </option>
    ))}
  </select>
);

export default ElementSelector;
