// #region Imports
import express from 'express';
// #endregion

// #region Variables
const APP = express();
const PORT = 2023;
let sensorData = [];
// #endregion

// #region EXPRESS CODE
// ---------------------------------------
APP.use("/embedded", express.static("../frontend/dashboard"));

/* ---ACTIVATE MIDDLEWARE--- */
APP.use(express.json());

/* ---ENDPOINTS--- */
APP.get("/getData", (req, res) => {
    res.send(JSON.stringify(sensorData));
});


//http://192.168.0.4:2022/update-sensor
APP.post("/update-sensor", (req, res) => {
    console.log("Full data: ", req.body)
    // const temp = req.body.temperature
    const { temperature, humidity } = req.body;
    console.log("temperature: ", temperature);
    console.log("humidity: ", humidity);

    sensorData.push(req.body);

    return res.status(200)  //OK
});


/* ---START SERVER--- */
APP.listen(PORT, () => {
    console.log(`App running at http://localhost:${PORT}`);
});

// ---------------------------------------
// #endregion