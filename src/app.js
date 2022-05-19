require('dotenv').config();
const express = require('express');
const hbs = require('hbs');

require("./db/connection");
const cookieParser = require('cookie-parser');
const path = require('path');

const viewsPath = path.join(__dirname, "../templates/views");
const partialsPath = path.join(__dirname, "../templates/partials");
const staticPath = path.join(__dirname, "../public");

const auth = require('./middleware/auth');

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({extended:false}));


app.set('view engine',"hbs");
app.set("views",viewsPath);
hbs.registerPartials(partialsPath);


const userClientRouter = require('./router/userRegistrationClient');
const userEmployeeRouter = require('./router/userRegistrationEmployee');
const router = require('./router/route');
const servicing = require('./router/servicingRoute');

app.use(express.static(staticPath));

app.use('/client',userClientRouter); 
app.use('/employee',userEmployeeRouter); 
app.use('/servicing',servicing);
app.use(router);

app.get("*", (req,res) => {
    res.status(404).send("404 error");
});



app.listen(process.env.HOST_PORT_NUMBER,() => {
    console.log(`Listing to port: http://${process.env.HOST_NAME}:${process.env.HOST_PORT_NUMBER}`);
});


// service pending
// service accepted 
// service on the way 
// service completed


// http://app.digram.net/