import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"
import { get_pokeList } from "../services/service";
import '../App.css'
import { Typography } from "@material-tailwind/react";

const PokeList = () => {
const [pokemon, setPokemon] = useState();
const navigate = useNavigate();

    const pokemonList = () => {
        get_pokeList().then((data) => {
            setPokemon(data)
        })
    }

    useEffect(() => pokemonList(), []);
    
    const handleClick = (id, name, type) => {
        navigate('/pokeinfo',{state:{id:id, name:name, type:type}})
      }

    return (
        <div className="text-center">
        <h1 className="font-bold text-2xl font-mono text-center p-8">Pokemon List</h1>
        
            {pokemon && pokemon.map((poke) => (
                <Typography className=" grid grid-cols-2 gap-4 place-content-stretch h-18 ..." key={poke.id}>{poke.name.english}
                <button  className="text-center text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                onClick={() => handleClick(poke._id, poke.name, poke.type)} >View Details</button>
                </Typography>
            ))}
       
    </div>
    ) 
}
 
export default PokeList;