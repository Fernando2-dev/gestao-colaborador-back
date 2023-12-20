import { FastifyInstance } from "fastify";
import { createProjeto } from "./createProjeto";
import { createTecnologia } from "./createTecnologia";
import { getProjeto } from "./getProjeto";
import { getTecnologia } from "./getTecnologia";
import { updateProjeto } from "./putProjeto";
import { putTecnologia } from "./putAreaAtuacao";

export async function routerProjeto(app: FastifyInstance) {
    app.post('/projeto', createProjeto)
    app.get('/projeto', getProjeto)
    app.put('/projeto', updateProjeto)

    app.post('/projeto/tecnologia', createTecnologia)
    app.get('/projeto/tecnologia', getTecnologia)
    app.patch('/projeto/tecnologia', putTecnologia)
}