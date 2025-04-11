let searchInputEl = document.getElementById('searchInput');
let LoaderEl = document.getElementById('Loader');
let searchResultsEl = document.getElementById('searchResults');
let ErrorMsgEl = document.getElementById('ErrorMsg');

function Library(event) {
    if (event.key === "Enter") {
        let InputVal = searchInputEl.value.trim();

        if (InputVal === "") {
            ErrorMsgEl.textContent = "No results Found";
            searchResultsEl.innerHTML = "";
            return;
        }

        let url = "https://apis.ccbp.in/book-store?title=" + InputVal;
        let options = {
            method: "GET"
        };

        LoaderEl.classList.remove("hidden");
        ErrorMsgEl.textContent = "";
        searchResultsEl.innerHTML = "";

        fetch(url, options)
            .then(function(response) {
                return response.json();
            })
            .then(function(jsonData) {
                LoaderEl.classList.add("hidden");
                let results = jsonData.search_results;

                if (results.length === 0) {
                    ErrorMsgEl.textContent = "No results Found";
                    return;
                }

                let resultsTitle = document.createElement("h1");
                resultsTitle.textContent = "Popular Books";
                resultsTitle.className = "text-2xl font-bold text-gray-800 my-4 w-full text-center";
                searchResultsEl.appendChild(resultsTitle);

                results.forEach(function(book) {
                    let bookCard = document.createElement("div");
                    bookCard.className = "bg-white shadow-md rounded-lg p-4 m-4 w-[250px]";

                    let bookImage = document.createElement("img");
                    bookImage.src = book.imageLink;
                    bookImage.alt = book.title;
                    bookImage.className = "w-full h-[300px] object-cover rounded mb-4";

                    let bookAuthor = document.createElement("p");
                    bookAuthor.textContent = book.author;
                    bookAuthor.className = "text-sm text-gray-600 mt-1";

                    bookCard.appendChild(bookImage);
                    bookCard.appendChild(bookAuthor);

                    searchResultsEl.appendChild(bookCard);
                });

                searchResultsEl.className = "flex flex-wrap justify-center";
            });
    }
}

searchInputEl.addEventListener("keydown", Library);