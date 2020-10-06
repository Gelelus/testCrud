const express = require('express');
const router = require('./routers/export-router');


const app = express()
const port = 4000

app.use(express.json())
app.use('/users', router.userRouter)

app.listen(port, () => {
    console.log('server on port ' + port)
})