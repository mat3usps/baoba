import { Typography } from "@material-ui/core";
import { useState } from "react";

import Membro from "../componentes/Membro";

const CriaFamilias = () => {
    const [membros, configurarMembros] = useState([]);

    return;
    <>
        <Typography variant="h3">Cria Famílias</Typography>;
        <Box>
            {membros.map((membro) => (
                <Membro />
            ))}
        </Box>
    </>;
};

export default CriaFamilias;
