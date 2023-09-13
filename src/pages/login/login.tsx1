import React, { useCallback, useEffect, useMemo, useState, useContext } from 'react'
import { InputText } from '../../components'
import withLogger from '../../hocs/withLogger'
import './styles.css';
import {UserContext} from '../../contexts/User'

const Login = () => {
    const value = useContext(UserContext)

    console.log('UserContext', value)

    const [isSign, setSign] = useState<boolean>(false)
    const [userName, setUserName] = useState<string>('')
    
    const [userPass1, setUserPass1] = useState<string>('')
    const [userPass2, setUserPass2] = useState<string>('')
    const [isPassError, setPassError] = useState<boolean>(false)

    
    

    const handleChangePass1 = (event: any ) => {
        setUserPass1(event.target.value)
    }

    const handleChangePass2 = (event: any ) => {
        if (userPass1 !== event.target.value) {
            setPassError(true)
        } else {
            setPassError(false)
        }
        
        console.log('userPass2 ---- before', userPass2)

        setUserPass2(event.target.value)
        console.log('userPass1', userPass1)
        console.log('userPass2', userPass2)

        setTimeout(() => {
            if (userPass1 !== userPass2) {
                setPassError(true)
            } else {
                setPassError(false)
            }
            console.log('userPass1 ---- after', userPass1)
            console.log('userPass2 ---- after', userPass2)

        }, 3000)

        
    } 


    const handleClickSign = () => {
        setSign(!isSign)
    }

    // const handleChangeLogin = (e: any) => {
    //     const user = e.target.value
    //     setUserName(user)
    //     localStorage.setItem("UserName", user);
    // }

    useEffect(() => {
        const user = localStorage.getItem("UserName") || ''
        setUserName(user)
    }, [])

    // const storeData = {
    //     url: 'asdasdasdasd dadsfs',
    //     desc: true,
    //     data: {
    //         dddd: 'level2',
    //     }
    // }

    // useEffect(() => {
        
    // }, )

    const handleClickSend = () => {
        // fetch(`//localhost:4040/login?name=${userName}`)
        
        fetch("//localhost:4040/api/login", {
        method: "post",
        headers: {
            // 'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        //make sure to serialize your JSON body
        body: JSON.stringify({
            name: userName,
            password: userName
        })
        })
        // .then( (response) => {

        //     //do something awesome that makes the world a better place
        // });
    }

    const rightPanelActive = isSign ? 'container right-panel-active' : 'container' 

    return(
        <>     
            <div className={rightPanelActive} id="container">
                <div className="form-container sign-up-container">
                    <form action="#">
                        <h1>Соаздайте пользователя</h1>
                        {/* <div className="social-container">
                            <a href="#" className="social"><i className="fab fa-facebook-f"></i></a>
                            <a href="#" className="social"><i className="fab fa-google-plus-g"></i></a>
                            <a href="#" className="social"><i className="fab fa-linkedin-in"></i></a>
                        </div>
                        <span>or use your email for registration</span> */}
                        <InputText type="text" placeholder="Введите логин" />
                        <InputText type="email" placeholder="Введите Email" />
                        <InputText 
                            type="text" 
                            placeholder="Введите пароль"
                            onChange={(event: any) => handleChangePass1(event)}
                        />
                        <InputText 
                            type="text" 
                            placeholder="Введите пароль повторно" 
                            onChange={(event: any) => handleChangePass2(event)}
                        />
                        {isPassError && <div style={{color: 'red'}}>Пароли не совпадают</div>}
                        <button>Регистрация</button>
                    </form>
                </div>
                <div className="form-container sign-in-container">
                    <form action="#">
                        <h1>Sign in</h1>
                        {/* <div className="social-container">
                            <a href="#" className="social"><i className="fab fa-facebook-f"></i></a>
                            <a href="#" className="social"><i className="fab fa-google-plus-g"></i></a>
                            <a href="#" className="social"><i className="fab fa-linkedin-in"></i></a>
                        </div> */}
                        {/* <span>or use your account</span> */}
                        <InputText 
                            type="email" 
                            placeholder="Email"
                            // onChange={(e: any) => handleChangeLogin(e)}
                            value={userName}
                        />
                        <InputText type="password" placeholder="Password" />
                        <a href="#">Забыли пароль</a>
                        <button
                            onClick={handleClickSend}
                        >Sign In</button>
                    </form>
                </div>
                <div className="overlay-container right-panel-active">
                    <div className="overlay">
                        <div className="overlay-panel overlay-left">
                            <h1>Welcome Back!</h1>
                            <p>To keep connected with us please login with your personal info</p>
                            <button 
                                onClick={handleClickSign}
                                className="ghost" id="signIn">
                                Sign In
                            </button>
                        </div>
                        <div className="overlay-panel overlay-right">
                            <h1>Hello, Friend!</h1>
                            <p>Enter your personal details and start journey with us</p>
                            <button 
                                className="ghost" 
                                id="signUp"
                                onClick={handleClickSign}
                            >Sign Up</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default withLogger(Login)