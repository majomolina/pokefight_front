import {useLocation} from 'react-router-dom';
import { useEffect, useState } from 'react';
import {get_pokeListbyinfo} from '../services/service';

const MoreDetails = () => {
 const [pokeInfo, setPokeInfo] = useState();
 const location = useLocation();

    const pokemonInfo = (id, base) => {
        get_pokeListbyinfo(id, base).then((data) => {
            setPokeInfo(data)
        })
    }
    useEffect(() => {
        pokemonInfo(location.state.id,'base')
        //console.log('entro a pagina')
}, []);

    
  

    return ( 
        <>
        <div className='text-center'>
        <h1 className="font-bold text-2xl font-mono text-center p-8">More Details</h1>
        <ul>
           
                <li >
                    <h3 className="font-bold">Hp:</h3>
                    <p>{pokeInfo?.base?.HP}</p>
                    <h3 className="font-bold">Attack:</h3>
                    <p>{pokeInfo?.base?.Attack}</p>
                    <h3 className="font-bold">Defense:</h3>
                    <p>{pokeInfo?.base?.Defense}</p>
                    <h3 className="font-bold">Sp. Attack:</h3>
                    <p>{pokeInfo?.base?.SpAttack}</p>
                    <h3 className="font-bold">Sp. Defense:</h3>
                    <p className="font-bold">{pokeInfo?.base?.SpDefense}</p>
                    <h3 className="font-bold">Speed:</h3>
                    <p>{pokeInfo?.base?.Speed}</p>
                </li>
    
        </ul>
        </div>
       
        </>
     );
}
 
export default MoreDetails;