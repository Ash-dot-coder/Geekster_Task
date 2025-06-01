# 🧲 Web Scraping 

This Node.js project scrapes Products listings from [Amazon](https://www.amazon.in/) based on a specific Products category (e.g., Brand, titles) and stores the results in an Excel file.

---

## 📦 Features

- Scrapes multiple pages of Products listings
- Extracts:
  - Product Brand
  - Product Title
  - Product Price
  - Product Rating
- Converts the results into a structured Excel file

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/Ash-dot-coder/Geekster_Task.git
cd Geekster_Task\\Module_6\\Node-JS\\ClassWork\\CW4
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Run the Scraper

```bash
npm start
```

This will:
- Fetch Products listings 
- Extract relevant Product details
- Export to `Products-amazon.xlsx`

---

## 🛠 Project Structure

```plaintext
├── index.js              # Main scraping logic
├── Products-amazon.xlsx   # Final exported Excel file
├── package.json          # Project metadata and dependencies
└── README.md             # Project documentation
```

---
### 📊 Excel Sheet Output  
[👉 Click here to download Excel sheet](https://github.com/Ash-dot-coder/Geekster_Task/blob/main/Module_6/Node-JS/ClassWork/CW4/Products-amazon.xlsx)

------
## 🧩 Dependencies

- [axios](https://www.npmjs.com/package/axios) - For HTTP requests
- [cheerio](https://www.npmjs.com/package/cheerio) - For HTML parsing
- [xlsx](https://www.npmjs.com/package/xlsx) - For Excel export
- [nodemon](https://www.npmjs.com/package/nodemon) (dev) - For auto-restarting during development

---

## ⚠️ Disclaimer

This project is for educational purposes only. Please review [Amazon](https://www.amazon.in/) terms of service before using this scraper at scale.

---

## 👩‍💻 Author

**Ayush**

---

## 📃 License

This project is licensed under the ISC License.
```
