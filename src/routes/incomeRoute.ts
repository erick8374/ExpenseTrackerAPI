import express from 'express'   
import { IncomeController } from '../controllers/incomeController'

const incomeController = new IncomeController();
const router = express.Router()

router.post('/income', incomeController.create)
router.get('/incomes', incomeController.getAll)
router.get('/income/:id', incomeController.getById)
router.get('/income/user/:userId', incomeController.getByUser)
router.put('/income/:id', incomeController.update) //não está funcionando
router.delete('/income/:id', incomeController.delete)

export default router
