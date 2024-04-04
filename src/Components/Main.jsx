import { Routes, Route } from 'react-router-dom'
import HomePage from './HomePage/HomePage';
import Stories from './Stories/Stories';

export default function Main() {
    return (
        <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/stories' element={<Stories />} />
        </Routes>
    );
}