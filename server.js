const  express=require('express');
const {urlencoded} = express;
const cors=require('cors');
const router=require("./Router/routes");
const app = express();

app.set('port',process.env.PORT || 9000);

//middleware-------------------------------------------

app.use(cors());
app.use(express.json());
app.use(urlencoded({ extended: false }));

// routes ----------------------------------------------

app.use('/v1',router)

// server running --------------------------------------------

app.listen(app.get('port'),()=>{
    console.log('listening on port',app.get('port'));
});