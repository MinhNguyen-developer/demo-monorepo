import { Button } from "lib";
import "./App.css";

function App() {
  return (
    <div>
      <h1>Using monorepos with Nx</h1>
      <Button onClick={() => console.log("Clicked")}>Click me!</Button>
    </div>
  );
}

export default App;
