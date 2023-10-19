const express = require('express');
const app = express();

const adsRouter = require('./adsRouter');

app.use(express.json());
app.use('/api', adsRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
