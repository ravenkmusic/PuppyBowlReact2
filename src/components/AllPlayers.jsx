import { useState, useEffect } from 'react';
import { fetchAllPlayers } from '../API/index';
import { useNavigate } from 'react-router-dom';

export default function AllPlayers(){
   
    const [players, setPlayers] = useState([]);
    const navigate = useNavigate();

    useEffect(() =>{
        async function getAllPlayers(){
                const players = await fetchAllPlayers();
                setPlayers(players);
        }
        getAllPlayers();
    }, []);
    
     return <div>
                {
                players.map((player)=>{
                    return <div key={player}>
                        <img src= {player.imageUrl} />
                        <h4 id="puppy-name">
                            {player.name}
                        </h4>
                        <button onClick={()=> navigate(`/players/${player.id}`)}>
                                    See More Details
                        </button>
                        </div>
                        })
                    }
                    </div>

}