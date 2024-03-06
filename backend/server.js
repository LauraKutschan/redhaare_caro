const express = require('express');
const imagesRoutes = require('./routes/images.routes');

const app = express();
const PORT = 3000;

app.use(express.json());
app.use('/images', imagesRoutes);

app.listen(PORT, (error) => {
    if (error) {
        console.log(error);
    } else {
        console.log(`server running on http://localhost:${PORT}`);
    }
});
