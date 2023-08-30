import React from 'react'
import './styles.css'; 
import {InputText} from '../input-text'


export const Form = ({action = '#', }: {action: string}) => {


    return(
        <form action="#">
            <h1>Соаздайте пользователя</h1>
            <div className="social-container">
                <a href="#" className="social"><i className="fab fa-facebook-f"></i></a>
                <a href="#" className="social"><i className="fab fa-google-plus-g"></i></a>
                <a href="#" className="social"><i className="fab fa-linkedin-in"></i></a>
            </div>
            <span>or use your email for registration</span>
            <InputText type="text" placeholder="Name" />
            <InputText type="email" placeholder="Email" />
            <InputText type="password" placeholder="Password" />
            <button onClick={() => console.log()}>Регистрация</button>
        </form>
    )
}