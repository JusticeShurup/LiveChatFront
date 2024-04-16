import React from 'react'
import { Link } from 'react-router-dom'
import { useEffect, useState } from "react"
import axios from 'axios'

const Register = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    function handleEmail(e) {
        e.preventDefault();
        setEmail(e.target.value);
    }

    function handlePassword(e) {
        e.preventDefault();
        setPassword(e.target.value);
    }

    const BASEURL = 'https://localhost:7264/api/Authentication';
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(BASEURL + '/Register',
                {
                    email: email,
                    password: password
                }
            );
            console.log(JSON.stringify(response?.data));
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <div class="relative flex flex-col justify-center h-screen overflow-hidden">
            <div class="w-full p-6 m-auto bg-white rounded-md shadow-md ring-2 ring-gray-800/50 lg:max-w-xl">
                <h1 class="text-3xl font-semibold text-center text-gray-700">Регистрация</h1>
                <form class="space-y-4">
                    <div>
                        <label class="label">
                            <span class="text-base label-text">Имя</span>
                        </label>
                        <input type="text" placeholder="Имя" class="w-full input input-bordered" />
                    </div>
                    <div>
                        <label class="label">
                            <span class="text-base label-text">Email</span>
                        </label>
                        <input onChange={(e) => handleEmail(e)} type="text" placeholder="Email Address" class="w-full input input-bordered" />
                    </div>
                    <div>
                        <label class="label">
                            <span class="text-base label-text">Пароль</span>
                        </label>
                        <input onChange={(e) => handlePassword(e)} type="password" placeholder="Enter Password"
                            class="w-full input input-bordered" />
                    </div>
                    <div>
                        <label class="label">
                            <span class="text-base label-text">Подтвердите пароль</span>
                        </label>
                        <input type="password" placeholder="Confirm Password"
                            class="w-full input input-bordered" />
                    </div>
                    <div>
                        <button onClick={(e) => handleSubmit(e)} class="btn btn-neutral w-full">Зарегистрироваться</button>
                    </div>
                    <span>Уже зарегистрированы?
                        <Link to="/Login" class="text-blue-600 hover:text-blue-800 hover:underline">Войти</Link></span>
                </form>
            </div>
        </div>
    )
}

export default Register