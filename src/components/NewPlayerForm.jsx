import { useState } from "react";
import {addNewPlayer} from "../API/index";
import { useNavigate } from "react-router-dom";

export default function NewPlayerForm(){

    const [newPuppyName, setNewPuppyName] = useState("");
    const [newPuppyBreed, setNewPuppyBreed] = useState("");
    const [newPuppyStatus, setNewPuppyStatus] = useState("");
    const [newPuppyImage, setNewPuppyImage] = useState("https://learndotresources.s3.amazonaws.com/workshop/60ad725bbe74cd0004a6cba0/puppybowl-default-dog.png");
    const navigate = useNavigate();

    async function handleSubmit(event){
        event.preventDefault();

        try {
            const player = {
                name: newPuppyName,
                breed: newPuppyBreed,
                status: newPuppyStatus,
                imageUrl: newPuppyImage,
            }
            await addNewPlayer(player);
            navigate("/");
        }    catch(error) {
            console.error(error);
        }
    }

    return (
        <form onSubmit={handleSubmit} id="newPlayerForm" action="">
            <label htmlFor="name">Puppy Name: { " " }
                <input
                type="text"
                value= {newPuppyName}
                placeholder="Your puppy's name"
                onChange={(event) =>
                setNewPuppyName(event.target.value)} />
            </label>
            <label htmlFor="breed">Puppy Breed: { " " }
                <input
                type="text"
                value= {newPuppyBreed}
                placeholder="Your puppy's breed"
                onChange={(event) =>
                setNewPuppyBreed(event.target.value)} />
            </label>
            <label htmlFor="status">Puppy Status:
                <input type="text" 
                value= {newPuppyStatus}
                placeholder="'Field' or 'bench'?"
                onChange={(event) =>
                setNewPuppyStatus(event.target.value)}
                />
            </label>
            <label htmlFor="imageUrl">Puppy Image:
                <input type="url"
                value= {newPuppyImage}
                placeholder="A URL to picture of your puppy"
                onChange={(event) =>
                    setNewPuppyImage(event.target.value)} />
            </label>
            <button type="submit">Add Puppy</button>
        </form>
    )
}