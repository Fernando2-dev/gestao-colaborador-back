import { FastifyInstance } from "fastify";
import { createColaborador } from "./createColaborador";
import { createAreaAtuacao } from "./createAreaAtuacao";
import { createColaboradorAreaAtuacao } from "./createColaboradorAreaAtuacao";
import { getColaborador } from "./getColaborador";
import { getAreaAtuacao } from "./getAreaAtuacao";
import { updateColaborador } from "./putColaborador";
import { updateAtuacao } from "./putAreaAtuacao";
import { deleteColaborador } from "./deleteColaborador";
import { deleteAreaAtuacao } from "./deleteAreaAtuacao";
import { Autenticacao } from "./autenticacao";
import { Perfil } from "./perfil";

export async function routerColaborador(app: FastifyInstance) {

    //auth
    app.post('/auth', Autenticacao)
   

    //rota colaborador 
    app.get('/colaborador/perfil/:id', Perfil)
    app.post('/colaborador', createColaborador)
    app.get('/colaborador', getColaborador)
    app.put('/colaborador', updateColaborador)
    app.delete('/colaborador/:id', deleteColaborador)

    //rota colaborador/areaAtuacao
    app.post('/colaborador/areaAtuacao', createAreaAtuacao)
    app.get('/colaborador/areaAtuacao', getAreaAtuacao)
    app.patch('/colaborador/areaAtuacao', updateAtuacao);
    app.patch('/colaborador/areaAtuacao/:id', deleteAreaAtuacao);

    app.post('/colaborador/areaAtuacaoColaborador', createColaboradorAreaAtuacao)
}