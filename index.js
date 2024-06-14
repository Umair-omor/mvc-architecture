// npm init -y
// npm i nodemon express
// http://localhost:3000/users
// http://localhost:3000/products

const express = require("express");
// const { nextTick } = require("process");

const userRouter = require("./routes/users.route");
const productRouter = require("./routes/product.route");

const app = express();
const PORT = 3000;

app.use(express.urlencoded({extended: true}));
app.use(userRouter);
app.use(productRouter);


app.use((req, res, next) => {
    res.status(404).json({
        message: "resourcd not found",
    });
});


app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}/users`)
});






