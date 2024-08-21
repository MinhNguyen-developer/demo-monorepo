import Button from "lib/Button.tsx";

function App() {
  return (
    <>
      <h1
        style={{
          color: "black",
        }}
      >
        Using monorepos with Nx
      </h1>
      <Button onClick={() => console.log("Clicked")}>Click me!</Button>
    </>
  );
}

export default App;
