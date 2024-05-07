import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header>
        <h1>Aplicação Web</h1>  
        <nav>
          <p>Home</p>
          <p>Produto</p>
          <p>Comprar</p>
        </nav>
      </header>
      <Outlet />
      <footer>
        rodapé
      </footer>
    </div>
  );
}

export default App;
