import React from 'react'

import PreJunior from "./pages/PreJunior";
import Error404 from "./pages/Error404";
import June from "../h5-rrd-v6/pages/June";
import JunePlus from "../h5-rrd-v6/pages/JunePlus";

export const PATH = {
    PRE_JUNIOR: '/pre-junior',
    // JUNE: '/june',
    // JUNE_PLUS: '/june-plus'
    // add paths
}

function Routes() {
    return (
        <div>
            {/*Switch выбирает первый подходящий роут*/}
            {/*<Switch>*/}
            {/*в начале мы попадаем на страницу '/' и переходим сразу на страницу PRE_JUNIOR*/}
            {/*exact нужен чтоб указать полное совподение (что после '/' ничего не будет)*/}
            {/*<Route path={'/'} exact render={() => <Redirect to={PATH.PRE_JUNIOR}/>}/>*/}
            {/*<Route path={PATH.PRE_JUNIOR} render={() => <PreJunior/>}/>*/}
            {/*<Route path={PATH.JUNE} render={() => <June/>}/>*/}
            {/*<Route path={PATH.JUNE_PLUS} render={() => <JunePlus/>}/>*/}
            {/*// add routes*/}

            {/*у этого роута нет пути, он отрисуется если пользователь захочет попасть на несуществующую страницу*/}
            {/*<Route render={() => <Error404/>}/>*/}
            {/*</Switch>*/}
        </div>
    )
}

export default Routes
