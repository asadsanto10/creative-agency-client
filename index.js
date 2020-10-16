const express = require('express')
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config()
const MongoClient = require('mongodb').MongoClient;
const fileUpload = require('express-fileupload');
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.ku1yj.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;
const ObjectId =  require('mongodb').ObjectID;
const port = 5000

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(express.static('client-project-file'));
app.use(fileUpload());



/******* connect database ********/
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

/**********agency service *********/
client.connect(err => {
    const serviceCollections = client.db(process.env.DB_NAME).collection("service");
    app.get('/service', (req, res) => {
        serviceCollections.find({})
        .toArray((err, documents) => {
            res.send(documents);
        })
    })

    /********** set databse login in user **********/
    const userRegCollection = client.db(process.env.DB_NAME).collection("user");
    app.post("/register-user", (req, res) => {
        const newRegUser = req.body;
        userRegCollection.insertOne(newRegUser)
        .then(result => {
            res.send(result.insertedCount > 0);
        })
    })

    /**** client order set database *****/
    const orderCollection = client.db(process.env.DB_NAME).collection("order");
    app.post('/addOrders', (req, res) => {
        const newOrder = req.body;
        orderCollection.insertOne(newOrder)
        .then(result => {
        res.send(result.insertedCount > 0);
        console.log(result);
        })
    })

    // service list show user
    app.get('/serviceList', (req, res) => {
        orderCollection.find({ email: req.query.email }) //email: req.query.email
        .toArray((err, documents) => {
            res.send(documents);
        })
    })

    const reviewCollection = client.db(process.env.DB_NAME).collection("review");
    // user review
    app.post('/review', (req, res) => {
        const newReview = req.body;
        reviewCollection.insertOne(newReview)
            .then(result => {
                res.send(result.insertedCount > 0);
                console.log(result);
            })
    })

    // show client feedback
    app.get('/reviewList', (req, res) => {
        reviewCollection.find({})
        .toArray((err, documents) => {
            res.send(documents);
        })
    })
});


app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(process.env.PORT || port)