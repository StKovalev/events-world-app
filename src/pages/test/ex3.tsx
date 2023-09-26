import React, {useState} from "react";

type UserProps = {
    login: string,
    password: string,
    email: string,
}

export const User = () => {
    const [form, setForm] = useState<any>({
        login: '',
        password: '',
        email: ''
    })

    console.log('form====', form)

    const hadleChange = (event: any) => {
        setForm({
            ...form,
            [event.target.name]: event.target.value
        })
    }

    return (
        <form>
            <input 
                type="text"
                name="login"
                placeholder="Введите логин"
                onChange={hadleChange}
                value={form.login}
            />
            <input 
                type="password"
                name="password"
                placeholder="Введите пароль"
                onChange={hadleChange}
                value={form.password}
            />
            <input 
                type="text"
                name="email"
                placeholder="Введите email"
                onChange={hadleChange}
                value={form.email}
            />
        </form>
    )
}