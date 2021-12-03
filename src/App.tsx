import React, {useState} from 'react';
import './scss/App.scss';
import {Home} from "./pages/Home";
import {Routes, Route} from 'react-router-dom'
import {SignIn} from "./pages/SignIn";
import {CreateAccount} from "./pages/CreateAccount";
import {SearchResults} from "./pages/SearchResults";
import {Account} from "./pages/Account";
import {TruckDetail} from "./pages/TruckDetail";
import {AddTruck} from "./pages/AddTruck";
import {NavMenu} from "./components/NavMenu";
import {auth} from "./config/firebaseConfig";
import User from "./models/User";

require('dotenv').config();

function App() {
    const [authUser, setAuthUser] = useState<User | null>(null);

    auth.onAuthStateChanged((user?) => {
        if (user) {
            console.log('Signed in as: ', user);

            setAuthUser(new User(user));
        } else {
            console.log('Not signed in');

            setAuthUser(null);
        }
    })

    return (
        <div className="App">
            <NavMenu />
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='login' element={<SignIn/>} />
                <Route path='create' element={<CreateAccount/>}/>
                <Route path='results' element={<SearchResults/>} />
                <Route path='detail' element={<TruckDetail />} />
                <Route path='account' element={<Account />} />
                <Route path='add' element={<AddTruck />} />
            </Routes>
        </div>
    );
}

export default App;
