import React from "react";

function useHover() {
  const hoverRef = React.useRef(null);
  const [hovering, setHovering] = React.useState(false);

  React.useEffect(() => {
    const node = hoverRef.current;

    const handleMouseOver = () => setHovering(true);
    const handleMouseLeave = () => setHovering(false);

    if (node) {
      node.addEventListener("onMouseEnter", handleMouseOver);
      node.addEventListener("onMouseLeave", handleMouseLeave);

      return () => {
        node.removeEventListener("onMouseEnter", handleMouseOver);
        node.removeEventListener("onMouseLeave", handleMouseLeave);
      };
    }
  }, [hoverRef.current]);

  return [hoverRef, hovering];
}

function App() {
  const [hoverRef, hovering] = useHover();

  return <div ref={hoverRef}>{`Test ${hovering}`}</div>;
}
