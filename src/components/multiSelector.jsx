import {get_pokeList} from '../services/service';
import { useEffect, useState } from 'react';



const MultiSelector = ({fnc_setpokename}) => {

const [pokemon,setPokemon] = useState([]); 

const get_pokenames = () => {
    get_pokeList().then((data)=>{
            //console.log(data);
            setPokemon(data);
        })
    }

    useEffect(() => {
        get_pokenames();
    }, []);
  
  return (
  <> 
<select  onChange={(e)=>fnc_setpokename(e.target.value)}>
  <option key={'aux_01'} value=''>Select the pokemon</option>
  {pokemon.map((item) => {
   return <option key={item.id} value={item._id} >{item.name.english}</option>
  })}
</select>
  </>
    );
}
   
 
export default MultiSelector;