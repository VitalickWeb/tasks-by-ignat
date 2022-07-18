import React from 'react'
import Message from "./Message";

const messageData = {
    avatar: 'http://sun9-8.userapi.com/s/v1/if1/WaepbKN4IgFKIzC1A5Pu6mHBY5kFiNISZRQ1InIX6mg5fD3FyUsqeVZTAaYsbkcoQch_JQA8.jpg?size=200x300&quality=96&crop=0,0,200,300&ava=1',
    name: 'Vitalick',
    message: 'дз-1 готово',
    time: '22:00',
}

function HW1() {
    return (
        <div>
            <hr/>
            {/*   homeworks 1

            should work (должно работать)*/}

            <Message
                avatar={messageData.avatar}
                name={messageData.name}
                message={messageData.message}
                time={messageData.time}
            />

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeMessage/>*/}
            <hr/>
        </div>
    )
}

export default HW1
