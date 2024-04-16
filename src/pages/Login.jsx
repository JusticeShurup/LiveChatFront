import { useContext, useState } from "react"
import { Link} from "react-router-dom"
import { Context } from "../index";
import {observer} from "mobx-react-lite"
import { useLocation, useNavigate} from "react-router-dom";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { store } = useContext(Context);
    const location = useLocation();
    const navigate = useNavigate();


    const onSubmit = (e) => {
        e.preventDefault();
        store.login(email, password);
        navigate(location.state ? location.state.from.pathname : "/");
    }

    return (
        <div class="relative flex flex-col justify-center h-screen overflow-hidden">
            <div class="w-full p-6 m-auto bg-white rounded-md shadow-md ring-2 ring-gray-800/50 lg:max-w-xl">
                <h1 class="text-3xl font-semibold text-center text-gray-700">Вход</h1>
                <form class="space-y-4">
                    <div>
                        <label class="label">
                            <span class="text-base label-text">Email</span>
                        </label>
                        <input onChange={e => setEmail(e.target.value)} type="text" placeholder="Email Address" class="w-full input input-bordered" />
                    </div>
                    <div>
                        <label class="label">
                            <span class="text-base label-text">Пароль</span>
                        </label>
                        <input onChange={e => setPassword(e.target.value)} type="password" placeholder="Enter Password"
                            class="w-full input input-bordered" />
                    </div>
                    <div>
                        <button onClick={onSubmit} class="btn btn-neutral w-full">Войти</button>
                    </div>
                    <span>Нет аккаунта? 
                        <Link to="/Register" class="text-blue-600 hover:text-blue-800 hover:underline">Зарегистрируйтесь!</Link></span>
                </form>
            </div>
        </div>
    )
};

export default observer(Login);