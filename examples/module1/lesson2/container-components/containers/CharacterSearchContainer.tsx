import CharacterList from '../components/CharacterList/CharacterList';
import { GenderSelect } from '../components/GenderSelect';
import { NameInput } from '../components/NameInput';
import { SortBySelect } from '../components/SortBySelect';
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
      <form className="space-x-4 flex items-end justify-center">
        <NameInput name={name} setName={setName} />
        <GenderSelect gender={gender} setGender={setGender} />
        <SortBySelect sortOption={sortOption} setSortOption={setSortOption} />
      </form>
      <div className="pt-12" />
      <CharacterList characters={sortedCharacters} />
      <div className="pt-16" />
    </>
  );
}

export default CharacterSearchContainer;
