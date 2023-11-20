import './App.css';
import Header from "./Components/Header/Header";
import {Route, Routes} from "react-router-dom";
import Main from "./Components/Main/Main";
import BestSellers from "./Components/BestSellers/BestSellers";
import Contacts from "./Components/Contacts/Contacts";
import Product from "./Components/Product/Product";
import Footer from "./Components/Footer/Footer";


function App(props) {
    return (
        <div className="App">
            <Header/>
            <Routes>
                <Route path='/' element={<Main/>}/>
                <Route path='/best-sellers' element={<BestSellers/>}/>
                <Route path='/contacts' element={<Contacts/>}/>
                <Route path='/product/:productId' element={<Product reviews={props.data.reviews}/>}/>
            </Routes>
            <Footer/>
        </div>
    );
}

export default App;
