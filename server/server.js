const express = require("express");
const app = express();
const mongoose = require("mongoose");
require('dotenv').config();
const cors = require('cors');

app.use(express.json());
app.use(cors());
app.use('/images', express.static('./images'));

const DontMissRoutes = require('./routes/DontMissRoutes.js');
const EntertainmentRoutes = require('./routes/EntertainmentRoutes.js');
const SportRoutes = require('./routes/SportRoutes.js');
const LifeStyleRoutes = require('./routes/LifeStyleRoutes.js');
const AdRoutes = require('./routes/AdRoutes.js');
const VideoRoutes = require('./routes/VideoRoutes.js');
const RecentRoutes = require('./routes/RecentRoutes.js');


mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.use("/api", DontMissRoutes);
app.use("/api", EntertainmentRoutes);
app.use("/api", SportRoutes);
app.use("/api", LifeStyleRoutes);
app.use("/api", AdRoutes);
app.use("/api", VideoRoutes);
app.use("/api", RecentRoutes);




app.listen(process.env.PORT, () => {
    console.log("Server running on Port: 8080")
})