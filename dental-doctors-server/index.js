const express = require('express');
const cors = require('cors');
const app = express();
const { MongoClient, ServerApiVersion } = require('mongodb');
require('dotenv').config();
const port = process.env.PORT || 5000;

//middleware
app.use(cors());
app.use(express.json());



const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.rsulfhn.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

async function run(){
    try{
      const appointmentOptionCollection = client.db("dentalDoctors").collection("appointmentOptions");
      const bookingsCollection = client.db("dentalDoctors").collection("bookings");

      app.get('/appointmentOptions', async(req,res)=> {
        const query = {};
        const options = await appointmentOptionCollection.find(query).toArray();
        res.send(options);
      });

      app.post('/bookings', async (req, res) => {
        const booking = req.body;
        console.log(booking);
        const result = await bookingsCollection.insertOne(booking);
        res.send(result);
      })

    }
    finally{

    }
}

run().catch(console.log)

app.get('/', (req, res) => {
    res.send('Dental doctor server is running');
  });

  app.listen(port, () => {
    console.log(`Dental doctor server is running on  ${port}`);
  });
  