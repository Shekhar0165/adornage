const express = require("express");
const router = express.Router();
const addOphanageSchema = require("../module/orphanage");

router.post("/setorphanage", async (req, res) => {
    try {
      if (!req.body) {
        return res.status(400).json({ error: "Request body is null." });
      }
      const response = new addOphanageSchema(req.body);
  
      // const validationError = response.validateSync();
      // if (validationError) {
      //   return res.status(400).json({ error: validationError.message });
      // }
      const data = await response.save();
      res.status(201).json(data);
      console.log(data);
    } catch (error) {
      console.error("Error:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  });


  router.get("/getorphanage", async (req, res) => {
    // Find all products in the database
    const response = await addOphanageSchema.find();
  
    // Get the data from the response
    const data = await response;
  
    // Send the data as the response
    res.send({data});
  });

module.exports = router;
