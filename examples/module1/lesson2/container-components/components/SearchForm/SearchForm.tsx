import { GenderSelect } from './GenderSelect';
import { NameInput } from './NameInput';
import { SortBySelect } from './SortBySelect';

type SearchFormProps = {
  name: string;
  setName: (name: string) => void;
  gender: string;
  setGender: (gender: string) => void;
  sortOption: string;
  setSortOption: (sortOption: string) => void;
};

function SearchForm({
  name,
  setName,
  gender,
  setGender,
  sortOption,
  setSortOption,
}: SearchFormProps) {
  return (
    <form className="space-x-4 flex items-end justify-center">
      <NameInput name={name} setName={setName} />
      <GenderSelect gender={gender} setGender={setGender} />
      <SortBySelect sortOption={sortOption} setSortOption={setSortOption} />
    </form>
  );
}

export default SearchForm;
