import React from 'react';
import './App.css';
import {Home} from "./pages/Home";
import {Routes, Route} from 'react-router-dom'
import {SignIn} from "./pages/SignIn";
import {CreateAccount} from "./pages/CreateAccount";
import {SearchResults} from "./pages/SearchResults";
import {Account} from "./pages/Account";
import {TruckDetail} from "./pages/TruckDetail";
import {AddTruck} from "./pages/AddTruck";
import {NavMenu} from "./components/NavMenu";

function App() {
    return (
        <div className="App">
            <NavMenu />
            <Routes>
                <Route path='/' element={<Home/>}>
                    <Route path='login' element={<SignIn/>}>
                        <Route path='create' element={<CreateAccount/>}/>
                    </Route>
                    <Route path='results' element={<SearchResults/>}>
                        <Route path='detail' element={<TruckDetail />} />
                    </Route>
                    <Route path='account' element={<Account />} />
                    <Route path='add' element={<AddTruck />} />
                </Route>
            </Routes>
        </div>
    );
}

export default App;
