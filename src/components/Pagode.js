import { useState } from "react";

export function Pagode() {
  const [posicao, setPosicao] = useState({ x: 0, y: 0 });

  function novaPosicao() {
    const novoX = Math.random() * (window.innerWidth - 100);
    const novoY = Math.random() * (window.innerHeight - 100);

    setPosicao({ x: novoX, y: novoY });
  }

  function zecaPagodinho() {
    const youtubeURL = "https://www.youtube.com/watch?v=FpM1tJ5yef4";
    window.location.href = youtubeURL;
  }

  return (
    <div>
      <h1>Você gosta de pagode?</h1>
      <button
        onClick={zecaPagodinho}
        style={{ "font-size": 18, "margin-right": 14 }}
      >
        Sim
      </button>
      <button
        onMouseOver={novaPosicao}
        style={{
          "font-size": 18,
          position: "absolute",
          top: posicao.x,
          left: posicao.y,
        }}
      >
        Não
      </button>
    </div>
  );
}
