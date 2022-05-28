import React from 'react'
import style from './Message.module.css'


type MessagePropsType = {
    avatar: string
    name: string
    message: string
    time: string
}

function Message(props: MessagePropsType) {
    return (
        <div>

            <div className={style.container}>

                <div className={style.boxItem}>
                    <img className={style.avatar} src={props.avatar}/>

                    <div className={style.boxMessage}>
                        <div className={style.triangl}>
                        </div>
                        <div className={style.nameMessage}>
                            <h3 className={style.name}>{props.name}</h3>
                            <div className={style.message}>
                                {props.message}
                            </div>
                        </div>
                        <div className={style.time}>
                            <span>{props.time}</span>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Message
