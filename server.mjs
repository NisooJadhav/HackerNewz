import express from "express";
import fetch from "node-fetch";
import cors from "cors";
const app = express();
const port = 3000;
const corsOptions = {
  origin: "*",
  credentials: true,
  optionSuccessStatus: 200,
};
app.use(cors(corsOptions));
app.get("/", (req, res) => {
  const url =
    "https://news.google.com/rss/search?q=hacker&hl=en-US&gl=US&ceid=US:en";
  fetch(url).then(res);
});