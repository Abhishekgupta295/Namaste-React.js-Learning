import express from "express";
import fetch from "node-fetch";
import cors from "cors";

const app = express();
app.use(cors());

app.get("/api/swiggy", async (req, res) => {
  try {
    const response = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.6488931&lng=77.13593279999999&restaurantId=655882&catalog_qa=undefined&submitAction=ENTER"
    );
    const data = await response.json();
    res.json(data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch Swiggy data" });
  }
});

app.listen(5000, () => console.log("Server running on port 5000"));
