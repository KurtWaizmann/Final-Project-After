"use strict";

const { MongoClient } = require("mongodb");

require("dotenv").config();
const { MONGO_URI } = process.env;

const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
};


const postProfile = async (req, res) => {
    // creates a new client
    const client = new MongoClient(MONGO_URI, options);

    try {
        // connect to the client
        await client.connect();

        // connect to the database 
        const db = client.db("After");

        
        // posting to the collection
        const result = (await db.collection("Profile").insertOne(req.body));

        // send result
        result
            ? res.status(200).json({ status: 200, message: "Success!", data: result })
            : res.status(404).json({ status: 404, message: "Not found", data: result });

        // catch any errors and return info/message
    } catch (err) {

        res.status(500).json({ status: 500, data: req.body, message: err.message });

        // close the connection to the database server
    } finally {
        client.close();

    }
};

module.exports = { postProfile };