const express = require("express");
const cors = require('cors');
const { application } = require("express");
require('dotenv').config();
const app = express()
const { MongoClient, ServerApiVersion } = require('mongodb');

const port = process.env.PORT || 5000;

// middleare
app.use(cors());
app.use(express.json());



const uri = `mongodb+srv://${process.env.DB_USER }:${process.env.DB_PASSWORD  }@cluster0.whfsa.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });


async function run() {
    try{
        await client.connect();
        const serviceCollection = client.db('warehouseManagement').collection('inventoryItem')
    }
    finally{

    }
}
run().catch(console.dir);




app.get('/', (req, res)=>{
    res.send('runing server')
})


app.listen(port, () =>{
    console.log('listening', port)
})