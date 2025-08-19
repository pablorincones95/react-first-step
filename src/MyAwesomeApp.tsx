import type { CSSProperties } from "react";

export function MyAwesomeApp() {
  const firstName = "Pablo";

  const lastName = "Rincones";

  const favoriteGames = ["elden ring", "god of war", "fifa"];

  const isActive = true;

  const address = {
    street: "calle falsa",
    number: 123,
    city: "bogota",
    country: "colombia",
  };

  const myStyles: CSSProperties = {
    backgroundColor: "#fafafa",
    borderRadius: 20,
    padding: 10,
    marginTop: 30,
  };

  return (
    <>
      <h1>{firstName} </h1>

      <h3>{lastName}</h3>

      <p>{favoriteGames}</p>

      <p>{isActive ? "activo" : "inactivo"}</p>

      <p style={myStyles}>{JSON.stringify(address)}</p>
    </>
  );
}
