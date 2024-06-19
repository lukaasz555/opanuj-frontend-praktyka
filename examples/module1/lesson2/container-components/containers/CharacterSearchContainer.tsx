import CharacterList from '../components/CharacterList/CharacterList';
import SearchForm from '../components/SearchForm/SearchForm';
import SearchTitle from '../components/SearchTitle';
import { useCharacterSearchContainer } from './useCharacterSearchContainer';

function CharacterSearchContainer() {
  const {
    name,
    setName,
    gender,
    setGender,
    sortOption,
    setSortOption,
    sortedCharacters,
  } = useCharacterSearchContainer();

  return (
    <>
      <div className="pt-20" />
      <SearchTitle title="Test searchbar name" />
      <div className="pt-8" />
      <SearchForm
        name={name}
        setName={setName}
        gender={gender}
        setGender={setGender}
        sortOption={sortOption}
        setSortOption={setSortOption}
      />
      <div className="pt-12" />
      <CharacterList characters={sortedCharacters} />
      <div className="pt-16" />
    </>
  );
}

export default CharacterSearchContainer;
