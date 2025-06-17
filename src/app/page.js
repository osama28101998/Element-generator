"use client";
import { useState } from "react";
import ElementSelector from "./components/ElementSelector";
import RenderedElement from "./components/RenderedElement";
import HistoryList from "./components/HistoryList";

export default function Home() {
  const [selectedElement, setSelectedElement] = useState("");
  const [selectionHistory, setSelectionHistory] = useState([]);

  const elements = [
    "input",
    "label",
    "textarea",
    "button",
    "select",
    "div",
    "span",
    "p",
    "h1",
    "img",
  ];

  const handleElementChange = (e) => {
    const newElement = e.target.value;
    setSelectedElement(newElement);
    if (newElement) {
      setSelectionHistory((prev) => [...prev, newElement]);
    }
  };

  const handleDelete = (index) => {
    setSelectionHistory((prev) => prev.filter((_, i) => i !== index));
  };
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-teal-100 to-green-100 flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-2xl bg-white rounded-lg shadow-xl min-h-[80vh] p-8">
        <h1 className="text-4xl font-extrabold text-center text-indigo-600 mb-8">
          HTML Element Generator
        </h1>
        <div className="flex flex-col items-center space-y-6">
          <ElementSelector
            selectedElement={selectedElement}
            elements={elements}
            onElementChange={handleElementChange}
          />
          <RenderedElement element={selectedElement} />
          {selectionHistory.length > 0 && (
            <HistoryList selectionHistory={selectionHistory} onDelete={handleDelete} />
          )}
        </div>
      </div>
    </div>
  );
}
