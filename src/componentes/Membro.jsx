import { Box, Typography } from "@material-ui/core";

const Membro = ({}) => {
    const membro = { nome: "", pais: [], irmaos: [], filhos: [] };

    return (
        <Box>
            <img src="" alt="" />
            <Typography>Nome: </Typography>
            <Typography>Nascimento: </Typography>
            <Typography>Escolaridade: </Typography>
            <Typography>Profissão: </Typography>
        </Box>
    );
};

export default Membro;
