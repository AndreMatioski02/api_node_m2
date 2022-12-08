const express = require('express')
const cors = require('cors')
const config = require('./config')
const animalRoutes = require('./routes/animal-routes')
const clientRoutes = require('./routes/client-routes')
const employeeRoutes = require('./routes/employee-routes')
const serviceRoutes = require('./routes/service-routes')

const app = express()

app.use(express.json())

app.use(cors())

app.use('/api/animals', animalRoutes.routes)
app.use('/api/clients', clientRoutes.routes)
app.use('/api/employees', employeeRoutes.routes)
app.use('/api/services', serviceRoutes.routes)

app.listen(config.port, () =>
  console.log('API está rodando em http://localhost:' + config.port)
)
