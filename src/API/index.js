const cohort = `2308-acc-et-web-pt-b`;
const API_URL = `https://fsa-puppy-bowl.herokuapp.com/api/${cohort}/players`;

export async function fetchAllPlayers(){
        const response = await fetch(`${API_URL}`);
        const result = await response.json();
        return result.data.players;   
}

export async function getCurrentPlayerById(playerId) {
    const response = await fetch(`${API_URL}/${playerId}`);
    const result = await response.json();
    return result.data.player;
}

export async function addNewPlayer(puppyStats){
   
    try {const response = await fetch(`${API_URL}`,
    {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(puppyStats),
        });
        const result = await response.json();
        console.log(result.data.player);
        return result.data.player;
    } catch(error) {
        console.error(error);
    }
} 