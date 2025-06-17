import React from "react";
import HistoryItem from "./HistoryItem";

const HistoryList = ({ selectionHistory, onDelete }) => (
  <div className="w-full max-w-md mt-8">
    <h2 className="text-2xl font-semibold text-gray-800 mb-4">
      Total Elements: {selectionHistory.length}
    </h2>
    <ul className="space-y-4 max-h-72 overflow-auto">
      {selectionHistory.map((element, index) => (
        <HistoryItem
          key={index}
          element={element}
          index={index}
          onDelete={onDelete}
        />
      ))}
    </ul>
  </div>
);

export default HistoryList;
