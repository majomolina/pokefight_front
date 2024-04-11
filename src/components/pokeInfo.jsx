import {useLocation, useNavigate} from 'react-router-dom';

const PokeInfo = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const handleClick = (id) => {
        navigate('/moreDetails',{state:{id:id}})
    }

    return ( 
        
        <div className='text-center'>
            <h1 className="font-bold text-2xl font-mono text-center p-8">Pokemon Info</h1>
            <h3 className="font-bold">Id of the Pokemon:</h3>
            <p>{location?.state?.id} </p>
            <h3 className="font-bold">Pokemon Name:</h3>
            <p>{location?.state?.name?.english} <br/>
            {location?.state?.name?.japanese} <br/>
            {location?.state?.name?.chinese} <br/>
            {location?.state?.name?.french} <br/></p>
            <h3 className="font-bold">Type of the Pokemon:</h3>
            <p>{location?.state?.type}</p>
            <button className="place-items-center text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            onClick={() => handleClick(location?.state?.id)}>See More Detail</button>
        </div>
     );
}
 
export default PokeInfo ;