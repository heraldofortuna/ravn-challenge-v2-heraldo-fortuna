import React from "react";
import CharacterList from "../components/CharacterList";
import AllPeopleQuery from "../services/AllPeopleQuery";
import Header from "../components/Header";

const Home = () => {
  const { loading, error, data } = AllPeopleQuery();
  const people = data.allPeople.people;

  if (error) return <p>Whoops ... something is wrong!</p>;

  return (
    <>
      <Header title={"People of Star Wars"} />
      <main>
        <div className="container">
          {loading ? <p>Loading ...</p> : <CharacterList characters={people} />}
        </div>
      </main>
    </>
  );
};

export default Home;
