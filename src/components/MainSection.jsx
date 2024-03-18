import { Routes, Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom'
import AllPlayers from './AllPlayers';
import SinglePlayer from './SinglePlayer';

export default function MainSection() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<AllPlayers />} />
                <Route path = '/players/:id' element={<SinglePlayer />} />
            </Routes>
        </BrowserRouter>
    )
}