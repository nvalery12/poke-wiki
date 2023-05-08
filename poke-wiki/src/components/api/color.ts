export default function setColor(type: string) {
  let color = '';
  switch (type) {
    case 'normal':
      color = 'bg-[#A8A878]';
      break;
    case 'fighting':
      color = 'bg-[#C03028]';
      break;
    case 'flying':
      color = 'bg-[#A890F0]';
      break;
    case 'poison':
      color = 'bg-[#A040A0]';
      break;
    case 'ground':
      color = 'bg-[#E0C068]';
      break;
    case 'rock':
      color = 'bg-[#B8A038]';
      break;
    case 'bug':
      color = 'bg-[#A8B820]';
      break;
    case 'ghost':
      color = 'bg-[#705898]';
      break;
    case 'steel':
      color = 'bg-[#B8B8D0]';
      break;
    case 'fire':
      color = 'bg-[#F08030]';
      break;
    case 'water':
      color = 'bg-[#6890F0]';
      break;
    case 'grass':
      color = 'bg-[#78C850]';
      break;
    case 'electric':
      color = 'bg-[#F8D030]';
      break;
    case 'psychic':
      color = 'bg-[#F85888]';
      break;
    case 'ice':
      color = 'bg-[#98D8D8]';
      break;
    case 'dragon':
      color = 'bg-[#7038F8]';
      break;
    case 'dark':
      color = 'bg-[#705848]';
      break;
    case 'fairy':
      color = 'bg-[#EE99AC]';
      break;
    case 'unknown':
      color = 'bg-[#68A090]';
      break;
    case 'shadow':
      color = 'bg-[#493963]';
      break;
    default:
      color = 'bg-transparent';
      break;
  }
  return color;
}
