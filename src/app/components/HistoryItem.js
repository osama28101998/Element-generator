import React from "react";
import { renderElement } from "../utils";

const HistoryItem = ({ element, index,onDelete }) => (
  <li
    key={index}
    className="p-4  bg-gray-50 border border-indigo-200 rounded-lg flex  space-x-2 items-center"
  >
    <span className="text-sm font-medium text-indigo-600 mb-2">
      {element.charAt(0).toUpperCase() + element.slice(1)}
    </span>
    {renderElement(element)}

    <button
      onClick={() => onDelete(index)}
      className="  bg-red-600 text-white px-2 py-2 rounded-md  transition duration-200"
      aria-label={`Delete ${element} from history`}
    >
      Delete
    </button>
  </li>
);

export default HistoryItem;
