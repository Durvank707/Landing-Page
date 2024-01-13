import Navbar from './components/Navbar';
import Home from './components/Pages/Home';
import { Routes, Route } from 'react-router-dom';
import Services from './components/Services';
import Products from './components/Products';
import SignUp from './components/SignUp';

function App() {
    return (
        <div className="App">
            <Navbar/>

            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/services' element={<Services/>}/>
                <Route path='/products' element={<Products/>}/>
                <Route path='/signup' element={<SignUp/>}/>
            </Routes>
        </div>
    );
}

export default App;