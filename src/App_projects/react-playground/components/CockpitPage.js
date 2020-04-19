import React from "react";
import { Button } from "../assets/state";

function CockpitPage() {
  const [count, setCount] = React.useState(0);

  // Similar to componentDidMount and componentDidUpdate:
  React.useEffect(() => {
    // Update the document title using the browser API
    document.title = `You clicked ${count} times`;
  });
  const handleCount = () => {
    setCount((prevCount) => prevCount + 1);
  };
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={handleCount}>Click me</button>
    </div>
  );
}

export default CockpitPage;
