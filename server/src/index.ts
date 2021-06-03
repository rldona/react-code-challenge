import express from 'express'
import api from './routes'

const app = express()
const routes = api();

app.set('API_HOST', process.env.API_HOST || 'localhost')
app.set('API_PORT', process.env.API_PORT || 4000)

app.use('/', routes);
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.listen(app.get('API_PORT'), () => {
	console.log(`Server on ${process.env.API_HOST}:${app.get('API_PORT')}`)
});
