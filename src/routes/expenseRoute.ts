import express from 'express'   
import { ExpenseController } from '../controllers/expenseController'

const expenseController = new ExpenseController();
const router = express.Router()

router.post('/expense', expenseController.create)
router.get('/expenses', expenseController.getAll)
router.get('/expense/:id', expenseController.getById)
router.get('/expense/user/:userId', expenseController.getByUser)
router.put('/expense/:id', expenseController.update) //não está funcionando
router.delete('/expense/:id', expenseController.delete)

export default router
