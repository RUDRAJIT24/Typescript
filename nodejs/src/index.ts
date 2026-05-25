import express from 'express'
import { todoRouter } from './routes/todoRoute.js'

const app = express()
const port = 8080

app.use(express.json())
app.use('/todos', todoRouter)


//middleware to handle error any other request
app.use((err: Error, req: express.Request, res: express.Response, next: express.NextFunction) => {
    res.status(500).json({message:err.message})
})


app.listen(port, () => {
    console.log(`Server listen at port ${port}`);
})

