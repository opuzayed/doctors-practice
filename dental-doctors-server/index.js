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
        const date = req.query.date;
        const query = {};
        const options = await appointmentOptionCollection.find(query).toArray();
        const bookingQuery = {appointmentDate:date};
        const alreadyBooked = await bookingsCollection.find(bookingQuery).toArray();
        options.forEach(option => {
          const optionBooked = alreadyBooked.filter(book => book.treatment === option.name);
          const bookedSlot = optionBooked.map(book => book.slot);
          const remainingSlots = option.slots.filter(slot => !bookedSlot.includes(slot));
          option.slots = remainingSlots;
          // console.log(date, option.name, remainingSlots.length);
        })

        res.send(options);
      });

      app.post('/bookings', async (req, res) => {
        const booking = req.body;
        const query = {
          appointmentDate : booking.appointmentDate
        }
        const alreadyBooked = await bookingsCollection.find(query).toArray();
        if(alreadyBooked.length){
          const message = `You have already booked on ${booking.appointmentDate}`;
          return res.send({acknowledged : false, message});
        }
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
  