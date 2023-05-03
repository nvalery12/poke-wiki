import { useSearchParams } from "react-router-dom";

export default function Character(){
    const [id] = useSearchParams();
    return (
        <h1>Character {id}</h1>
    );
}