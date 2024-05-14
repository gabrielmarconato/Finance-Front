import { useEffect, useState } from "react";
import api from "../service/api";
import { useParams, Link } from "react-router-dom";

export function Produtos() {
  const { id } = useParams();
  console.log(" params: ", id);
  const [categories, setCategories] = useState([]);
  const [joke, setJoke] = useState("");

  useEffect(() => {
    const getCategories = async () => {
      await api.get('/categories').then((res) => {
        setCategories(res.data);
      })
    }

    const getJokeByCategory = async () => {
      await api.get(`/random?category=${id}`).then((res) => {
        setJoke(res.data.value);
      })
    }

    if(!id) getCategories();
    else if(id) getJokeByCategory();
  }, []);

  return !id ? (
    <div>
      {categories.map((categorie) => {
        return (
          <Link 
            key={categorie} 
            style={{ color: 'blue', marginBottom: '20px' }}
            to={`/itens/${categorie}`}
          >
            {categorie}
          </Link>
        )
      })}
    </div> 
  ) :
  (
    <div style={{ margin: "2rem" }}>
      <cite>{joke}</cite>
    </div>
  );
}
