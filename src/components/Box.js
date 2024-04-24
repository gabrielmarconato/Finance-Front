export function Box({ nome, idade, verify }) {
  return (
    <div>
      {verify ? <p>Nome: {nome}</p> : <p>Idade: {idade}</p>}
      {nome === "Arlindo Cruz" ? (
        <>
          <label for="text-form">Meu lugar, </label>
          <input type="text" id="text-form" />
        </>
      ) : (
        <></>
      )}
    </div>
  );
}
