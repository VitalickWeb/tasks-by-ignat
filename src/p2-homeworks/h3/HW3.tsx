import React, {useState} from 'react'
import GreetingContainer from './GreetingContainer'
import {v1} from "uuid";

// types
export type UserType = {
    _id: string // need to fix any
    name: string // need to fix any
}

// уровень работы с глобальными данными
function HW3() {
    const [users, setUsers] = useState<Array<UserType>>([
        {_id: v1(), name: "Dime"},
        {_id: v1(), name: "Aleks"},
        {_id: v1(), name: "Tom"},
        {_id: v1(), name: "Redux"}
    ])

    // need to fix any

    const addUserCallback = (name: string) => { // need to fix any
        setUsers((users) => [{_id: v1(), name: name}, ...users]) // need to fix
    }

    return (
        <div>
            <hr/>
            {/*should work (должно работать)*/}
            <GreetingContainer
                users={users}
                addUserCallback={addUserCallback}
            />

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeGreeting/>*/}
            <hr/>
        </div>
    )
}

export default HW3
