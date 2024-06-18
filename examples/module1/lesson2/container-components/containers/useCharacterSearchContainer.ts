import { useEffect, useState } from 'react';
import { Character } from '../types/Character';

export const useCharacterSearchContainer = () => {
  const [name, setName] = useState('');
  const [gender, setGender] = useState('');
  const [characters, setCharacters] = useState<Character[]>([]);
  const [sortOption, setSortOption] = useState('');

  useEffect(() => {
    if (name || gender) {
      fetch(
        `https://rickandmortyapi.com/api/character/?name=${name}&gender=${gender}`
      )
        .then((response) => response.json())
        .then((data) => setCharacters(data.results || []))
        .catch((error) => console.error('Error fetching data:', error));
    }
  }, [name, gender]);

  const sortedCharacters = [...characters].sort((a, b) => {
    if (sortOption === 'name') {
      return a.name.localeCompare(b.name);
    } else if (sortOption === 'created') {
      return new Date(a.created).getTime() - new Date(b.created).getTime();
    }
    return 0;
  });

  return {
    name,
    setName,
    gender,
    setGender,
    sortOption,
    setSortOption,
    sortedCharacters,
  };
};
