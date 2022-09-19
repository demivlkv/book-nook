const apiKey = process.env.apiKey;

// retrieve book data
function getBook(book) {
    const bookApi = "https://www.googleapis.com/books/v1/volumes?q=" + book + "&api-key=" + apiKey;
  
    fetch(bookApi)
    .then(function(response) {
        if (response.ok) {
            response.json().then(function(data) {
                displayBookResults(data);
            });
        } else {
            alert('Not a valid book title');
            return;
        }
    })
    .catch(function(error) {
        if (response.status != 200) {
            alert('Unable to connect to server.');
        }
    });
};

const displayBookResults = function(data) {
    const bookTitle = data.items[0].volumeInfo.title;
    const bookCategory = data.items[0].volumeInfo.categories;
    const bookThumbnail = data.items[0].volumeInfo.imageLinks.thumbnail;

    // set title
    const bookTitleEl = document.createElement('p');
    $(bookTitleEl).attr('class', 'book-results');
    $(bookTitleEl).html('<strong>Title:</strong> ' + bookTitle);
    $('#media-data').append(bookTitleEl);

    // set book catergory
    const bookCategoriesEl = document.createElement('p');
    $(bookCategoriesEl).attr('class', 'book-results');
    $(bookCategoriesEl).html('<strong>Catergory:</strong> ' + bookCategory);
    $('#media-data').append(bookCategoriesEl);

    // set poster
    $('#thumbnail').append('<img src="' + bookThumbnail + '" alt="' + bookTitle + '" />');
};