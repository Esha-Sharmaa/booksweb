const express = require("express");
const path = require("path");
const bookRouter = require("./routers/book");
const connectDB = require("./connection");
const logReqRes  = require("./middleware/index");
const userRouter = require("./routers/user");
const app = express();

app.use(express.json({ extended: true }));
app.use(express.urlencoded({ extended: true }));
app.use(logReqRes("./log.txt"));
app.set("view engine", "ejs");


app.set("views", path.resolve("./views"));
connectDB()
  .then(() => console.log("connnected to database"))
  .catch((err) => console.log("Error ", err));



app.use("/api/books", bookRouter);
app.use("/user", userRouter);
app.get("/signup", (req, res) => {
    res.render("signup");
})
app.get("/login", (req, res) => {
    res.render("login");
})
app.listen(8000, () => {
  console.log("Server Running on port 8000......");
});
