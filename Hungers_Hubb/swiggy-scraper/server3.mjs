import express from "express";
import puppeteer from "puppeteer";

const app = express();
const PORT = 5000;

async function fetchSwiggyMenu(restaurantId) {
  const browser = await puppeteer.launch({
    headless: true,
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });
  const page = await browser.newPage();

  let jsonData = null;

  try {
    // Pretend to be a real browser
    await page.setUserAgent(
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120 Safari/537.36"
    );
    await page.setExtraHTTPHeaders({
      "Accept-Language": "en-US,en;q=0.9",
      "Referer": "https://www.swiggy.com/",
    });

    // Optional: Fake location cookie
    await page.setCookie({
      name: "swiggy-city",
      value: "pune",
      domain: ".swiggy.com",
    });

    const url = `https://www.swiggy.com/restaurants/${restaurantId}`;
    console.log("🔍 Visiting:", url);

    // Intercept /dapi/menu requests
    page.on("response", async (res) => {
      const targetUrl = res.url();
      if (targetUrl.includes("/dapi/menu/pl?page-type=REGULAR_MENU")) {
        try {
          const data = await res.json();
          jsonData = data;
          console.log("✅ Captured menu data from Swiggy");
        } catch (err) {
          console.log("⚠️ Failed to parse intercepted response");
        }
      }
    });

    // Go to Swiggy page
    await page.goto(url, { waitUntil: "networkidle2", timeout: 60000 });

    // Replace waitForTimeout() with a standard JS delay
    await new Promise((resolve) => setTimeout(resolve, 12000));

    await browser.close();

    if (!jsonData) throw new Error("No menu data captured from Swiggy");
    return jsonData;
  } catch (err) {
    console.error("❌ Error in Puppeteer:", err.message);
    await browser.close();
    throw err;
  }
}

app.get("/api/menu/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const data = await fetchSwiggyMenu(id);
    res.json(data);
  } catch (error) {
    console.error("❌ Failed to fetch Swiggy data:", error.message);
    res.status(500).json({ error: "Failed to fetch Swiggy data" });
  }
});

app.listen(PORT, () =>
  console.log(`🚀 Server running at http://localhost:${PORT}`)
);
