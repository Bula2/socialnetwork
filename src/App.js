import './App.scss';
import React from "react";
import {Route, Routes} from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Main from "./components/Main/Main";
import Settings from "./components/Settings/Settings";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Friends from "./components/Friends/Friends";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {connect} from "react-redux";
import {initializeApp} from "./redux/app_reducer";
import Preloader from "./components/Common/Preloader/Preloader";


class App extends React.Component {

    componentDidMount() {
        this.props.initializeApp();
    }




    render() {
        if (!this.props.initialized)
            return <center><Preloader/></center>

        return (
            <div className="app-wrapper ">
                <HeaderContainer/>
                <Navbar/>
                <div className="app-center">
                    <Routes>
                        <Route path="/" element={<Main/>}/>
                        <Route path="/profile/:userId" element={<ProfileContainer/>}/>
                        <Route path="/profile/*" element={<ProfileContainer/>}/>
                        <Route path="/dialogs/*" element={<DialogsContainer/>}/>
                        <Route path="/news" element={<News/>}/>
                        <Route path="/music" element={<Music/>}/>
                        <Route path="/settings" element={<Settings/>}/>
                        <Route path="/friends" element={<Friends/>}/>
                        <Route path="/users" element={<UsersContainer/>}/>
                        <Route path="/login" element={<Login/>}/>
                    </Routes>
                </div>
                <Footer/>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    initialized : state.app.initialized
})

export default connect(mapStateToProps, {initializeApp})(App);
