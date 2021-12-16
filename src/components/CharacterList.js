import React from "react";

const CharacterList = ({ characters }) => {
  if (characters === null) return null;

  return characters.map((character) => (
    <div key={character.id}>
      <h2>{character.name}</h2>
      <p>
        {character.species === null ? "Human" : character.species.name} from{" "}
        {character.homeworld.name}
      </p>
    </div>
  ));
};

export default CharacterList;