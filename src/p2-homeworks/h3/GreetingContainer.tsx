import React, {ChangeEvent, useEffect, useState} from 'react'
import Greeting from './Greeting'
import {UserType} from "./HW3";

type GreetingContainerPropsType = {
    users: Array<UserType> // need to fix any
    addUserCallback: (name: string) => void // need to fix any
}

// более современный и удобный для про :)
// уровень локальной логики
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({users, addUserCallback}) => { // деструктуризация пропсов
    const [name, setName] = useState<string>('') // need to fix any
    const [error, setError] = useState<string | null>(null) // need to fix any

    const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => { // need to fix any
        setError(null)
        setName(e.currentTarget.value)// need to fix
    }

    useEffect(() => {
    }, [users])

    const addUser = () => {
        if (name.trim() !== '') {
            addUserCallback(name)
            alert(`hello ${name}!`)
            setName('')
        } else {
            setError('You need enter name')
        }
    }

    let totalUsers = users.length  // need to fix

    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            error={error}
            totalUsers={totalUsers}
        />
    )
}

export default GreetingContainer
