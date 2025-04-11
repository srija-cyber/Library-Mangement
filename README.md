# 📚 Library-Mangement

A simple yet functional library book search interface built with **HTML**, **Tailwind CSS**, and **Vanilla JavaScript**. It allows users to search for books by title using a public API and displays search results in a clean and responsive UI.

---

## 🚀 Features

- 🔍 Real-time search input (press Enter to search)
- 📡 API integration to fetch books from [CCBP Book Store API](https://apis.ccbp.in/book-store)
- 🖼️ Book display with image and author name
- 💬 Error message if no input or no matching results
- ⏳ Loader while fetching results
- 🎨 Fully responsive and styled using Tailwind CSS

---


## 🔧 How It Works

1. User enters a book title in the search box and presses `Enter`.
2. Input is validated (empty input shows error).
3. A GET request is sent to:  
   `https://apis.ccbp.in/book-store?title=<input>`
4. Loader is shown while fetching data.
5. Results (book images and authors) are displayed as cards.
6. If no books found, a friendly message appears.


---

## 🛠️ Technologies Used

- HTML5
- Tailwind CSS CDN
- JavaScript (ES6+)
- Public REST API for books

---

## ✨ Future Enhancements

- 📖 Add book titles and descriptions
- 📚 Implement pagination
- 🕵️‍♂️ Add filters (e.g., genre, author)
- 🔒 Enable user authentication for saving favorites

---

## Connect With Me

For any queries or collaboration opportunities, feel free to reach out:

Email: dhanwadasrijagmail.com

LinkedIn: www.linkedin.com/in/dhanwada-srija

GitHub: https://github.com/srija-cyber

## Fork It:

Love this project? Feel free to fork it and add your own enhancements!

Click the Fork button on GitHub.

Clone your forked repository.

Make your modifications and improvements.

Submit a pull request if you'd like to contribute back.

## 📜 License

This project is licensed under the MIT License. You are free to use, modify, and distribute it with proper attribution.

