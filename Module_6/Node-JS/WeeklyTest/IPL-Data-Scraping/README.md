# 🏏 IPL Stats Scraper & Visualizer

A project that scrapes IPL player stats from the official [IPL website](https://www.iplt20.com/stats) using **Puppeteer**, processes the data, and visualizes it using **Chart.js** in a beautiful dashboard.

---

## 📌 Features

- 🧠 Scrapes real-time IPL stats using Puppeteer
- 📊 Visualizes:
  - Top 10 Orange Cap (most runs)
  - Top 10 players with most 4s, 6s
  - Top 10 players with most 50s and 100s
- 📁 Data stored as JSON: `seasonData.json`, `last5SeasonsData1.json`, etc.
- 🧮 Pre-processed data stored in `processedData1.json`
- 🎨 Dashboard built with HTML + Chart.js
- 📦 Simple and lightweight Node.js app

---

## 🏗️ Project Structure

```
IPLDATA-PROJECT/
├── node_modules/                # Node dependencies
├── .gitignore                   # Git ignore rules
├── index.html                   # Visualization page (Chart.js)
├── index.js                     # Scraper and data processor
├── last5SeasonsData1.json       # Raw data from last 5 IPL seasons
├── processedData1.json          # Processed and cleaned data
├── seasonData.json              # Individual season data
├── package.json
├── package-lock.json
```

---

## 🧪 Setup Instructions

### 1. Clone the Repository

```bash
git clone [https://github.com/PriyaMaity/IplData-Scrapping.git]
cd IPLDATA-PROJECT
```

### 2. Install Dependencies

```bash
npm install
```

> Puppeteer will automatically install Chromium. Ensure you have a stable connection.

### 3. Run the Scraper

```bash
node index.js
```

✅ This will scrape the data and output `.json` files like `processedData1.json` in your project root.

---

## 📈 View the Dashboard

Open `index.html` in your browser to see the player stats visualized using Chart.js.

You can enhance it with dynamic features like dropdown filters, animations, or season-wise toggles.

---

## ⚙️ .gitignore

Your `.gitignore` already excludes:

```
node_modules/
```

You may also want to add `.json` files if you don’t want to push scraped data to your repo:

```
*.json
!package.json
!package-lock.json
```

---

## 📦 Dependencies

- [Puppeteer](https://pptr.dev/) — for scraping stats from the IPL website
- [Chart.js](https://www.chartjs.org/) — for rendering charts in the browser
- [Node.js](https://nodejs.org/) — for backend scripting

---

## 🚀 Deployment

To deploy the dashboard online:

### 📌 Vercel (Optional)

1. Push to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import the repo, set the root folder if needed
4. Click **Deploy**

---

## 🙋‍♂️ Author

Made with 👨🏻‍💻 by [Ayush Kohre]()

---

## 📜 License

ISC License
```
