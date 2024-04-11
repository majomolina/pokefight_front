import { useEffect, useState } from 'react';
import {get_pokeListbyid,get_pokeimage} from '../services/service';
import {Card,CardBody,Typography,} from "@material-tailwind/react";

const PokeCard = ({id, fnc_poke}) => {
        const [pokeInfo, setPokeInfo] = useState();
        const [pokeImage, setPokeImage] = useState();
        
    
        const pokemonInfo = (id) => {
            get_pokeListbyid(id).then((data) => {
                //console.log(data);
                   setPokeInfo(data);
                   fnc_poke(data);  

                   get_pokeimage(data.name.english).then((url) => {
                    setPokeImage(url);
                   });
            });
          };

          useEffect(() => {
          pokemonInfo(id);
          // console.log('entro')
        }, [id])
   

    return ( 
        <>
         {pokeInfo ? 
        <Card className="border-b border-gray-200 bg-white px-4 py-5 sm:px-6">
  
    <Typography className="text-base font-semibold leading-6 text-gray-900">Poke Info </Typography>
 
  <CardBody>
    <Typography>
       {pokeInfo?.name?.english}
        <br/> 
    </Typography>
    <img className="h-auto max-w-full"  src={pokeImage} alt="" />
    <Typography>
       Type: {pokeInfo?.type}
        <br/> 
    </Typography>
    <Typography>
    strengths: <br/> HP: {pokeInfo?.base?.HP} <br/>
    Attack: {pokeInfo?.base?.Attack} <br/>
    Defense: {pokeInfo?.base?.Defense} <br/>
    Sp. Attack: {pokeInfo?.base?.SpAttack} <br/>
    Sp. Defense: {pokeInfo?.base?.SpDefense} <br/>
    Speed: {pokeInfo?.base?.Speed} <br/> 
    </Typography>
  </CardBody>
</Card>
 : <></> }
        </>
        );

    }
export default PokeCard;