import express from 'express'   
import { AccountController } from '../controllers/accountController'

const accountController = new AccountController();
const router = express.Router()

router.post('/account', accountController.create)
router.get('/accounts', accountController.getAll)
router.get('/account/:id', accountController.getById)
router.put('/account/:id', accountController.update) //não está funcionando
router.delete('/account/:id', accountController.delete)

export default router
