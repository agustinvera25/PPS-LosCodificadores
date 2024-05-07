const express = require('express');
const app = express();
const port = process.env.PORT || 4000;


// ROUTES
const hosteriaRoutes = require('./routes/hosteriasRoute');
const huespedesRoutes = require('./routes/huespedesRoute');
const acompanantesRoutes = require('./routes/acompanantesRoute');
const apartRoutes = require('./routes/apartRoute');
const autoRoutes = require('./routes/autosRoute');
const cabaniasRoutes = require('./routes/cabaniasRoute');
const campingRoutes = require('./routes/campingsRoute')
const conocieronRoutes = require('./routes/comonosconocieronRoute');
const descuentosRoutes = require('./routes/descuentos_efectivoRoute');
const estadiasRouteRoutes = require('./routes/estadiasRoute');
const pagosRoutesRoutes = require('./routes/pagosRoutes');
const reservasRouteRoutes = require('./routes/reservasRoute');
const servicios_consumosRoutesRoutes = require('./routes/servicios_consumosRoutes');

// middlewares
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// routes
app.get('/api', (req, res) => {
  res.send('Hello World!')
})
app.use('/api', hosteriaRoutes, huespedesRoutes, acompanantesRoutes, apartRoutes, autoRoutes, cabaniasRoutes,campingRoutes, conocieronRoutes, descuentosRoutes, estadiasRouteRoutes, pagosRoutesRoutes, reservasRouteRoutes, servicios_consumosRoutesRoutes);


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
