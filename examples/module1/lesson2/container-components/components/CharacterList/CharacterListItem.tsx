import { Character } from '../../types/Character';

type Props = {
  character: Character;
};

export default function CharacterListItem({
  character: { id, name, image },
}: Props) {
  return (
    <li key={id} className="flex flex-col items-center">
      <h3>{name}</h3>
      <img src={image} alt={name} />
    </li>
  );
}
