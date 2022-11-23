import React, {useState} from 'react'
import {NavLink} from "react-router-dom";
import st from './Header.module.css'


function Header() {

    const [hide, setHide] = useState<boolean>(false)

    const clickImg = () => {
        setHide(!hide)
        // setHide(prevState => !prevState) - альтернативная запись
    }

    return (
        <div className={st.NavImgBox}>
            {hide &&
                <div className={st.NavLinkBox}>
                    <div className={st.item}>
                        <NavLink to="/pre-junior"
                                 className={navData => navData.isActive ? st.active : st.item}>Pre-junior</NavLink>
                    </div>
                    <div className={st.item}>
                        <NavLink to="/june" className={navData => navData.isActive ? st.active : st.item}>June</NavLink>
                    </div>
                    <div className={st.item}>
                        <NavLink to="/june-plus"
                                 className={navData => navData.isActive ? st.active : st.item}>June-plus</NavLink>
                    </div>
                </div>}
            <div className={st.itemImg}>
                <img className={st.imgRotate}
                     onClick={clickImg}
                     src="https://media-exp1.licdn.com/dms/image/C4D0BAQGqcuVe6n8FXw/company-logo_100_100/0/1655710554698?e=2147483647&v=beta&t=HrutFC8kYr_MJayfs8r52nMz0zBLLn_XTRdtwQxbhN0"
                     alt="arrow"
                />
            </div>
        </div>
    )
}

export default Header
