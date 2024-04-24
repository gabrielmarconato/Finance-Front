import "./App.css";
import { Box } from "./components/Box";
import { Categorias } from "./components/Categorias";
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
      {/* <Pagode /> */}
      <Categorias />
    </div>
  );
}

export default App;
