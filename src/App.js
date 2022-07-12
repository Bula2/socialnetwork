import './App.scss';
import {Route, Routes} from "react-router-dom";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Footer from "./components/Footer/Footer";
import Main from "./components/Main/Main";
import Settings from "./components/Settings/Settings";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Friends from "./components/Friends/Friends";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";

const App = () => {
    return (
        <div className="app-wrapper ">
            <Header/>
            <Navbar/>
            <Routes>
                <Route path="/" element={<Main/>}/>
                <Route path="/profile/*" element={<ProfileContainer/>}/>
                <Route path="/dialogs/*" element={<DialogsContainer/>}/>
                <Route path="/news" element={<News/>}/>
                <Route path="/music" element={<Music/>}/>
                <Route path="/settings" element={<Settings/>}/>
                <Route path="/friends" element={<Friends/>}/>
                <Route path="/users" element={<UsersContainer/>}/>
            </Routes>
            <Footer/>
        </div>
    );
}

export default App;
