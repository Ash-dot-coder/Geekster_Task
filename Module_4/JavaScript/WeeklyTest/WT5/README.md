# Book-App

[![Live Demo](https://img.shields.io/badge/Live%20Demo-Click%20Here-purple?style=for-the-badge)]()

## Overview
Book-App is a web application that displays a list of book categories and their top books. Users can toggle between light and dark modes and sign up for an account. The application fetches data from an external API to display book categories and details.

## Features
- **Dark Mode Toggle:** Users can switch between light and dark modes.
- **Sign Up Form:** Users can sign up for an account.
- **Book Categories:** Displays a list of book categories fetched from an external API.
- **Top Books:** Displays top books for each category.

## Technologies Used
- HTML
- CSS
- JavaScript

## HTML Structure
The HTML file (`index.html`) sets up the basic structure of the application, including:
- Linking external CSS files (`styles.css` and `list.css`).
- Linking Font Awesome for icons.
- A navigation bar with a dark mode toggle and a signup button.
- A container with sections for book categories and book details.

## JavaScript Functionality
### `script.js`
This script handles the dark mode toggle and the signup form functionality.
- **Dark Mode Toggle:** 
  - Toggles the `dark-mode` class on the body element.
  - Saves the mode preference in `localStorage`.
- **Sign Up Form:**
  - Creates and displays a signup form when the signup button is clicked.
  - Handles form submission and validation.

### `list.js`
This script handles fetching and displaying book categories and top books.
- **Fetching Data:**
  - Fetches book categories from `https://books-backend.p.goit.global/books/category-list`.
  - Fetches top books from `https://books-backend.p.goit.global/books/top-books`.
- **Displaying Data:**
  - Displays all book categories and top books.
  - Displays books for a selected category.
  - Adds click listeners to book cards to show book details.

## Functions
### `get_books(url)`
Fetches data from the given URL and returns the JSON response.

### `display(elementJSON)`
Displays books for the selected category.

### `displayCat(elementBook)`
Displays more books for the selected category.

### `display_all()`
Displays all top books across categories.

### `cardCreate(img, author, title)`
Creates and appends a book card to the DOM.

### `addCardClickListeners()`
Adds click listeners to book cards to show book details.

### `showCardDetails(img, author, title)`
Displays detailed information about a selected book.

## How to Run
1. Clone the repository.
2. Open `index.html` in a web browser.
3. Interact with the application by toggling dark mode, signing up, and browsing book categories.

## Future Improvements
- Add form validation and submission handling for the signup form.
- Improve error handling and user feedback.
- Enhance the UI/UX with more styling and animations.

