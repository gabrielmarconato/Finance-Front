import api from "../services/api";
import { useEffect, useState } from "react";

export function Categorias() {
  const [isLoading, setLoading] = useState(true);
  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    const getCategorias = async () => {
      await api.get("/categoria/").then((res) => {
        console.log(res.data);
        setCategorias(res.data);
        setLoading(false);
      });
    };

    if (isLoading) {
      getCategorias();
    }
  }, []);

  return !isLoading ? (
    <div>
      {categorias.map((categoria) => {
        return (
          <>
            <p>Nome: {categoria.nome}</p>
            <p>Descrição: {categoria.descricao}</p>
          </>
        );
      })}
    </div>
  ) : (
    <></>
  );
}
