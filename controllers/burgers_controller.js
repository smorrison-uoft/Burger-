const express = require("express");

const router = express.Router();


const burger = require("../models/burger.js");


router.get("/", (req, res) => {
  burger.selectAll(data => {
    const hbsObject = {
      burgers: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/api/burgers", (req, res) => {
    burger.insertOne(["burger_name", "devoured"], [req.body.burger_name, req.body.devoured], result => {
      // Send back the ID of the new quote
      res.json({ id: result.insertId });
    });
});

router.put("/api/burgers/:id", (req, res) => {

  var condition = `id = ${req.params.id}`;
  
    burger.updateOne(
      {
        devoured: 1
      },
      condition,
      result => {
        if (result.changedRows === 0) {
         
          return res.status(404).end();
        }
        res.status(200).end();
  
      }
    );
  });

router.delete("/api/burgers/:id", (req, res) => {

    var condition = `id = ${req.params.id}`;

    burger.deleteOne(condition, result => {
      if (result.affectedRows == 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    });
});

// Export routes for server.js to use.
module.exports = router;