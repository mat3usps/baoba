import { Switch, Route } from "react-router-dom";

import PaginaInicial from "../paginas/paginainicial";
import CriaFamilias from "../paginas/CriaFamilias";

const Rotas = () => {
    return (
        <Switch>
            <Route exact path="/" component={PaginaInicial} />
            <Route exact path="/cria-familias" component={CriaFamilias} />
        </Switch>
    );
};

export default Rotas;
