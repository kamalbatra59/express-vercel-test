import express from "express";

const app = express();
const port = 9000;


app.use("/home", (req, res) => {
  
  res.send("kaku chutiya");
});

app.use("/kamal", (req, res) => {
  res.send("kamal chutiya");
});

app.use("/", (req, res) => {
  res.json({ message: "Hello From Express App" });
});


app.listen(9000, () => {
  console.log(`Starting Server on Port ${port}`);
});
