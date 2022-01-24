import React, { useContext } from 'react';
import Button from '../components/UI/Button/Button';
import Input from '../components/UI/input/Input';
import { AuthContext } from '../context';


const Login = () => {

    const {setIsAuth} = useContext(AuthContext)
    const login = (event) => {
        event.preventDefault();
        setIsAuth(true)
        localStorage.setItem('auth', 'true')
    }


    return (
        <div>
            <h1>Страница авторизации</h1>
            <form onSubmit={login}>
                <Input type="text" placeholder="Введите логин пароль"/>
                <Input type="password" placeholder="Введите пароль"/>
                <Button> Log In </Button>
            </form>
        </div>
    )
}

export default Login;