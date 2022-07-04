import './App.scss';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Footer from "./components/Footer/Footer";
import Dialogs from "./components/Dialogs/Dialogs";
import Main from "./components/Main/Main";
import Settings from "./components/Settings/Settings";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Friends from "./components/Friends/Friends";

const App = (props) => {
    return (
        <BrowserRouter>
            <div className="app-wrapper ">
                <Header/>
                <Navbar state={props.state.navbarPage}/>
                <Routes>
                    <Route path="/" element={<Main/>}/>
                    <Route path="/profile" element={<Profile state={props.state.profilePage}/>}/>
                    <Route path="/dialogs/*" element={<Dialogs state={props.state.dialogsPage}/>}/>
                    <Route path="/news" element={<News/>}/>
                    <Route path="/music" element={<Music/>}/>
                    <Route path="/settings" element={<Settings/>}/>
                    <Route path="/friends" element={<Friends/>}/>
                </Routes>
                <Footer/>
            </div>
        </BrowserRouter>
    );
}

export default App;
