import { useState } from "react";
import "./App.css";

function App() {
  const [points, setPoints] = useState([]);
  const [removedPoints, setRemovedPoints] = useState([]);

  function handleClicks(e) {
    const { pageX, pageY } = e;
    setPoints([...points, { x: pageX, y: pageY }]);
  }

  console.log(points);

  function handleUndo() {
    const newPoints = points;
    const removed = newPoints.pop();
    setPoints([...points]);
    if (!removed) return;
    setRemovedPoints([...removedPoints, removed]);
  }

  function handleRedo() {
    const newArray = removedPoints;
    const removed = newArray.pop();
    if (!removed) return;
    setPoints([...points, removed]);
  }

  return (
    <>
      <button disabled={points.length === 0} onClick={() => handleUndo()}>
        undo
      </button>
      <button
        disabled={removedPoints.length === 0}
        onClick={() => handleRedo()}
      >
        redo
      </button>
      <div className="App" onClick={handleClicks}>
        {points.map((point, idx) => (
          <div
            className="points"
            key={idx}
            style={{
              left: point.x + "px",
              top: point.y + "px",
            }}
          ></div>
        ))}
      </div>
    </>
  );
}

export default App;
