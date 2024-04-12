import axios from "axios"

export  const  get_pokeList =async ()=>{
    return axios.get(`https://pokefight-fi1z.vercel.app/api/pokemon`)
    .then((response) =>{
        if(response.data){
            return (response.data)
        }
    })
} 


export  const  get_pokeListbyid =async (id)=>{
    return axios.get(`https://pokefight-fi1z.vercel.app/api/pokemon/${id}`)
    .then((response) =>{
        if(response.data){
            return (response.data)
        }
    })
} 


export  const  get_pokeListbyinfo =async (id, info)=>{
    return axios.get(`https://pokefight-fi1z.vercel.app/api/pokemon/${id}/${info}`)
    .then((response) =>{
        if(response.data){
            return (response.data)
        }
    })
} 

export  const  get_pokeimage =async (name)=>{
    return axios.get(`https://pokeapi.co/api/v2/pokemon/${name.toLowerCase()}`)
    .then((response) =>{
        if(response.data.sprites.front_default){
            return (response.data.sprites.front_default)
        }
    })
} 
