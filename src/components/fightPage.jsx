import MultiSelector from "./multiSelector";
import PokeCard from "./pokeCard";
import { useState } from "react";

const FightPage = () => {
    const [pokeName1, setPokeName1]= useState();
    const [pokeName2, setPokeName2]= useState();
    const [pokePlayer1, setPokePlayer1]= useState();
    const [pokePlayer2, setPokePlayer2]= useState();
    const [scorePlayer1, setScorePlayer1]= useState(0);
    const [scorePlayer2, setScorePlayer2]= useState(0);

    const handleCompare = () => {
        let score_player1=0;
        let score_player2=0;
        
            if (pokePlayer1.base.HP > pokePlayer2.base.HP) {
                score_player1++;    
                //setScorePlayer1(score_player1++);              
           
            } else if (pokePlayer1.base.HP < pokePlayer2.base.HP) {
                score_player2++;      
               //setScorePlayer2(score_player2++);        
            } 

            if (pokePlayer1.base.Attack > pokePlayer2.base.Attack) {
                score_player1++;   
               //setScorePlayer1(score_player1++);              
           
            } else if (pokePlayer1.base.Attack < pokePlayer2.base.Attack) {
               score_player2++;   
               //setScorePlayer2(score_player2++);            
            } 
            if (pokePlayer1.base.Defense > pokePlayer2.base.Defense) {
               score_player1++;     
              //setScorePlayer1(score_player1++);            
           
            } else if (pokePlayer1.base.Defense < pokePlayer2.base.Defense) {
                score_player2++;    
                //setScorePlayer2(score_player2++);            
            } 
            if (pokePlayer1.base.SpAttack > pokePlayer2.base.SpAttack) {
                score_player1++;   
               //setScorePlayer1(score_player1++);             
           
            } else if (pokePlayer1.base.SpAttack < pokePlayer2.base.SpAttack) {
                score_player2++;     
              // setScorePlayer2(score_player2++);           
            } 
            
            if (pokePlayer1.base.SpDefense > pokePlayer2.base.SpDefense) {
                score_player1++;      
               //setScorePlayer1(score_player1++);           
           
            } else if (pokePlayer1.base.SpDefense < pokePlayer2.base.SpDefense) {
                score_player2++;   
                //setScorePlayer2(score_player2++);             
            } 
           
            if (pokePlayer1.base. Speed > pokePlayer2.base. Speed) {
                score_player1++;      
               //setScorePlayer1(score_player1++);           
           
            } else if (pokePlayer1.base. Speed < pokePlayer2.base. Speed) {
                score_player2++;  
               // setScorePlayer2(score_player2++);              
            } 
            //set the values
            setScorePlayer1(score_player1);
            setScorePlayer2(score_player2);
            //who is the winner
            if (score_player1>score_player2) {
                alert('Player 1 is the winner');
            } else if (score_player1<score_player2) {
                alert('Player 2 is the winner');
            } else {
                alert('It is a tie');
            }
    }

    return (
        <>
        <div className="font-mono text-center">
        <h1 className="font-bold text-2xl font-mono text-center p-8">PokeFight Game</h1>
           
           <div >
     <div className="grid grid-cols-2 gap-2">
       <div className="bg-white p-3 rounded">
           <h1 className='text-center font-bold text-lg'>Player 1</h1>
           <h3 className='text-center font-bold md:underline'>Scores: {scorePlayer1}</h3> <br/>
           <MultiSelector className='text-center' fnc_setpokename={setPokeName1}/>
           {pokeName1 ? <PokeCard id={pokeName1} fnc_poke={setPokePlayer1}/> : <></>}
       </div>
       <div className="bg-white p-3 rounded">
           <h1 className='text-center font-bold text-lg'>Player 2</h1>
           <h3 className='text-center font-bold md:underline'>Scores: {scorePlayer2}</h3> <br/>
           <MultiSelector fnc_setpokename={setPokeName2}/>
           {pokeName2 ? <PokeCard id={pokeName2} fnc_poke={setPokePlayer2}/> : <></>}
       </div>
       {pokeName1 && pokeName2 ?  <button className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
   onClick={handleCompare}>Compare Values</button> : <></>}
      
     </div>

   </div>

        </div>
           
        </>
      );
}
 
export default FightPage;