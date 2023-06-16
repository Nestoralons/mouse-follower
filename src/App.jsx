import "./App.css";
import { useEffect, useState } from "react";
function App() {
  const [enabled, setEnabled] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const handleMove = (event) => {
      const { clientX, clientY } = event;
      console.log("me muevo", { clientX, clientY });
      setPosition({ x: clientX, y: clientY });
    };
    if (enabled) {
      window.addEventListener("pointermove", handleMove);
    }
    return () => {
      window.removeEventListener("pointermove", handleMove);
    };
  }, [enabled]);

  function handleclick() {
    setEnabled(!enabled);
  }
  return (
    <main>
      {enabled && (
        <div
          style={{
            position: "absolute",
            backgroundColor: "rgb(0,0,0,0.5)",
            border: "1px solid black",
            borderRadius: "50%",
            opacity: 0.8,
            pointerEvents: "none",
            left: -20,
            top: -20,
            width: 40,
            height: 40,
            transform: `translate(${position.x}px,${position.y}px)`,
          }}
        />
      )}
      <div></div>
      <button onClick={handleclick}>
        {" "}
        {enabled ? "Desactivar" : "Activar"} seguir puntero
      </button>
    </main>
  );
}

export default App;
