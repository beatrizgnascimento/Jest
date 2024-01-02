import { Router } from 'express'
import { usersController } from './controllers/usersController.js'

const routes = Router()


routes.get('/users', usersController.listarUsuario)

routes.post('/users', usersController.criarUsuario)

//STATUS CODE - verficia se tudo da aplicação funcionou
//200 e 201
//403 página não encontrada

//GET - ler os dados
//POST - criar os dados
//PUT / PATCH edita os dados
//DELETE

export { routes }
