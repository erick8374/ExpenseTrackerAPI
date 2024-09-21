
import errorHandler from "./middleware/errorHandler"
import express, {Application} from "express"
import cors from "cors"
import { AppDataSource } from "./data-source"
import { User } from "./entities/Users"
import routerUser from './routes/userRoute'
import routerCategory from './routes/categoryRoute'
import routerExpense from './routes/expenseRoute'
import routerHealth from "./routes/healthRoute"

const app: Application = express()
app.use(express.json())
app.use(cors())

app.use("/webmob/api", routerCategory)
app.use("/webmob/api", routerExpense)
app.use("/webmob/api", routerUser)
app.use("/webmob/api", routerHealth)

/**
 * Error handling middleware.
 *
 * This middleware will catch any errors that occur during the processing
 * of requests and send a standardized error response.
 */
app.use(errorHandler);

export default app
