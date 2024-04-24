import "./App.css";
import { Box } from "./components/Box";
import { Pagode } from "./components/Pagode";
import { Pergunta } from "./components/Pergunta";

function App() {
  return (
    <div className="App">
      {/* <p>Hello</p>
      <Pergunta />
      <Pergunta />
      <Pergunta />
      <Pergunta />
      <Box nome={"Arlindo Cruz"} idade={22} verify={false} /> */}
      <Pagode />
    </div>
  );
}

export default App;
