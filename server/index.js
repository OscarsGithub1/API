//mongodb+srv://oscar:<password>@cluster0.8azzn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0

const express = require('express');
const connectedDB = require('./db.js');
const itemModel = require('./models/items.js');
const cors = require('cors');
const userRoutes = require('./routes/userRoutes.js');

const app = express();
app.use(express.json());
app.use(cors());
connectedDB();

app.get('/', async (req, res) => {
const items = await itemModel.find();
res.json(items);
})

app.use('/api/users', userRoutes);

app.listen(3000, () => {
    console.log("app is running");
});
