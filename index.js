require("dotenv").config();
const express = require("express");
const app = express();

async function fetchData() {
  try {
    const response = await fetch(
      "https://official-joke-api.appspot.com/random_joke",
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Fetch error:", error.message);
  }
}
app.get("/data", async (req, res) => {
  try {
    const data = await fetchData();
    res.json(data);
  } catch (error) {
    req.status(500).json({
      error: "failed to fetch data",
    });
  }
});
app.listen(process.env.PORT, () => {
  console.log(`App is listening on port ${process.env.PORT}`);
});
