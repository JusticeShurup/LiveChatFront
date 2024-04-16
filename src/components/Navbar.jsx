import { useContext} from "react"
import { Context } from "../index";
import $api from "../http/api_index";
import { useAuth } from "../hooks/useAuth";
import {observer} from 'mobx-react-lite'
import { useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
    const { store } = useContext(Context);
    const location = useLocation();
    const navigate = useNavigate();

    const onProfile = (e) => {
        e.preventDefault();
        navigate("/profile")
        
        
    }

    const onSubmitLogout = (e) => {
        e.preventDefault();
        store.logout();
    }

    return (
        <div className="navbar bg-neutral text-neutral-content">
            <div className="containerWrap flex justify-between">
                <button className="btn btn-ghost text-xl">LiveChat</button>
                <button onClick={onProfile} className="btn btn-ghost normal-case text-xl">Профиль</button>
                <button onClick={onSubmitLogout} className="btn btn-ghost normal-case text-xl">Logout</button>
            </div>
        </div>
    )
}

export default observer(Navbar)