import { Routes, Route } from 'react-router-dom'
import HomePage from './HomePage/HomePage';

export default function Main() {
    return (
        <Routes>
            <Route path='/' element={<HomePage />} />
        </Routes>
    );
}