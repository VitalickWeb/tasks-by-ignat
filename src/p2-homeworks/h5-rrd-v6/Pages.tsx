import React from 'react'
import {Navigate, Route, Routes} from "react-router-dom";
import PreJunior from "./pages/PreJunior";
import June from "./pages/June";
import JunePlus from "./pages/JunePlus";
import Error404 from "./pages/Error404";

export const PATH = {
    PRE_JUNIOR: '/pre-junior',
    JUNE: '/june',
    JUNE_PLUS: '/june-plus',
    ERROR: '/404',
    // add paths
}

function Pages() {
    return (
        <div>
            {/*Switch выбирает первый подходящий роут*/}
            <Routes>
                {/*в начале мы попадаем на страницу '/' и переходим сразу на страницу PRE_JUNIOR*/}
                {/*exact нужен чтоб указать полное совподение (что после '/' ничего не будет)*/}
                <Route path={'/'} element={<Navigate to={PATH.PRE_JUNIOR}/>}/>
                <Route path={PATH.PRE_JUNIOR} element={<PreJunior/>}/>
                <Route path={PATH.JUNE} element={<June/>}/>
                <Route path={PATH.JUNE_PLUS} element={<JunePlus/>}/>
                {/*// add routes*/}

                {/*у этого роута нет пути, он отрисуется если пользователь захочет попасть на несуществующую страницу*/}
                <Route path={PATH.ERROR} element={<Error404/>}/>
                <Route path={'/*'} element={<Navigate to={PATH.ERROR}/>}/>
            </Routes>
        </div>
    )
}

export default Pages
