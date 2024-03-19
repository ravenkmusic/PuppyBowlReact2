import { useState, useEffect } from "react";
import {getCurrentPlayerById, deletePlayer } from '../API/index';
import { useNavigate, useParams } from "react-router-dom";

export default function SinglePlayer(){
    const navigate = useNavigate();
    const { id } = useParams();

    
    const [player, setPlayer] = useState({});

    useEffect(()=>{
        async function getCurrentPlayer(){
            try {
                const player = await getCurrentPlayerById(id);
                setPlayer(player);
            } catch (error) {
                console.error("Can't retrieve data", error);
            }
        }
        getCurrentPlayer();
    }, [id]);

    async function deleter(currentPuppy){
        await deletePlayer(currentPuppy);
        navigate("/");
    }

    return <>
                <img src= {player.imageUrl} />
                <h4 id="puppy-name">
                    {player.name}
                </h4>
                    <p>
                        <span className="attribute">Breed:</span>
                        <span id="attribute-text"> {player.breed}</span>
                    </p>
                    <p>
                        <span className="attribute">Current status:</span>
                        <span id="attribute-text"> {player.status}</span>
                    </p>
                    <p>
                        <span className="attribute">ID:</span>
                        <span id="attribute-text"> {player.id}</span>
                    </p>
                    <p>
                        <span className="attribute">Team:</span>
                        <span id="attribute-text"> {player.teamId}</span>
                    </p>
                        <button onClick={
                            ()=> deleter(player.id)}>
                                Delete Puppy
                        </button>
        </>
}