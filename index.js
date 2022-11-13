const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51M2TqlSJVShvBXNnh4MEjimWf65wdb895KAgogHzX3YGulh3fUjTK1UAUZdSX5CcVK6JZTs4ASSiiJ95wMvKtKXG005LhR6F2R"
);

const app = express();
app.use(cors({ origin: true }));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello world");
});


//Handle Post request to create payment
app.post("/payments/create", async (req, res) => {
  const total = req.query.total;

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "INR",
    description: "payment of product",
    shipping: {
      name:"pranita",
      address: {
        country: "india",
        state: "Maharashtra"
      }
    }
  });

  res.send({
    clientSecret: paymentIntent.client_secret
  })
});

exports.api = functions.https.onRequest(app);