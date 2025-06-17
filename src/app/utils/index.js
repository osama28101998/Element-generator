 export const renderElement = (element) => {
    switch (element) {
      case "input":
        return (
          <input
            className="w-full max-w-md p-2 border-2 border-indigo-300 rounded-lg focus:outline-none focus:border-indigo-500 transition duration-300"
            placeholder="Enter text"
          />
        );
      case "label":
        return (
          <label className="text-lg font-medium text-gray-700">
            Sample Label
          </label>
        );
      case "textarea":
        return (
          <textarea
            className="w-full max-w-md p-2 border-2 border-indigo-300 rounded-lg focus:outline-none focus:border-indigo-500 transition duration-300"
            placeholder="Enter your text here"
            rows="4"
          />
        );
      case "button":
        return (
          <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition duration-300">
            Click Me
          </button>
        );
      case "select":
        return (
          <select className="w-full max-w-md p-2 border-2 border-indigo-300 rounded-lg focus:outline-none focus:border-indigo-500 transition duration-300">
            <option>Option 1</option>
            <option>Option 2</option>
            <option>Option 3</option>
          </select>
        );
      case "div":
        return (
          <div className="w-full max-w-md p-4 bg-gray-100 border-2 border-indigo-300 rounded-lg">
            This is a div
          </div>
        );
      case "span":
        return <span className="text-lg text-indigo-600">This is a span</span>;
      case "p":
        return <p className="text-lg text-gray-700">This is a paragraph.</p>;
      case "h1":
        return <h1 className="text-3xl font-bold text-gray-800">Heading 1</h1>;
      case "img":
        return (
          <img
            src="/assets/images/chair.webp"
            alt="Sample"
            className="w-full h-52 max-w-md rounded-lg shadow-md"
          />
        );
      default:
        return <p className="text-gray-500">Select an element to display</p>;
    }
  };
