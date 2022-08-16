"use strict";

const { MongoClient } = require("mongodb");

require("dotenv").config();
const { MONGO_URI } = process.env;

const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
};


const getProfile = async (req, res) => {
    // creates a new client
    const client = new MongoClient(MONGO_URI, options);
    // grab id from params
    const _id = req.params.userId;

    try {
        // connect to the client
        await client.connect();

        // connect to the database 
        const db = client.db("After");

        // grabbing from the collection
        const result = await db.collection("Profile").findOne({_id:_id});

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

module.exports = { getProfile };