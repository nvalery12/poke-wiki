import { useEffect, useState } from 'react';
import { apiService } from '../components/api/apiService';

interface Sprites {
  front_default: string;
  back_default: string;
}

interface Species {
  name: string;
  url: string;
}

export interface Ability {
  ability: {
    name: string;
  }
}

export interface Type {
  type: {
    name: string;
  }
}

export interface Character {
  abilities: Ability[];
  name: string;
  sprites: Sprites;
  species: Species;
  id: number;
  height: number;
  weight: number;
  types: Type[];
  stats: string[];
  moves: string[];
  forms: string[];
  base_experience: number;
}

export function useCharacterCard(url?: string) {
  const [ character, setCharacter ] = useState<Character>();
  const [ isLoading, setIsLoading ] = useState(false);

  useEffect(() => {
    const sideEffect = async () => {
      setIsLoading(true);
      const data = await apiService(0, url);
      setCharacter(data);
      setIsLoading(false);
    }
    sideEffect();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { character, isLoading };
}
