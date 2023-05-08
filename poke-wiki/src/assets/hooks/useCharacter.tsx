import { useEffect, useState } from 'react';
import { apiService } from '../../components/api/apiService';


export interface Character {
  name: string;
  url: string;
}

export function useCharacter() {
  const [characters, updateCharacters] = useState<Character[]>([]);
  const [offset, setOffset] = useState(0);
  const [ isLoading, setIsLoading ] = useState(false);

  function addCharacter (newCharacters: Character[] )  {
    updateCharacters([...characters, ...newCharacters]);
  }

  useEffect(() => {
      const sideEffect = async () => {
      setIsLoading(true);
      const data = await apiService(offset);
      addCharacter(data.results);
      setIsLoading(false);
    }
    sideEffect();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [offset]);

  const nextPage= () => {
    setOffset(offset+20);
  }

  return {characters, nextPage, isLoading}
}
