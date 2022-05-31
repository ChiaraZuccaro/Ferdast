import { MediumCard } from "../Cards/MediumCard/mediumCard";

export const CardList = () => {
  const itDescript = "Esplora le meraviglie d'italia";
  const itImg = "";

  const espDescript = "Esplora las meravillas de España";
  const fraDescript = "Explorez les merveilles de la France";
  const englDescript = "Explore the wonders of England";
  return (
    <>
      <MediumCard name={"Italia"} description={itDescript} img={itImg} />
      <MediumCard name={"Spagna"} description={espDescript} />
      <MediumCard name={"France"} description={fraDescript} />
      <MediumCard name={"England"} description={englDescript} />
    </>
  );
};
