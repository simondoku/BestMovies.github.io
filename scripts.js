/**
 * Data Catalog Project Starter Code - SEA Stage 2
 *
 * This file is where you should be doing most of your work. You should
 * also make changes to the HTML and CSS files, but we want you to prioritize
 * demonstrating your understanding of data structures, and you'll do that
 * with the JavaScript code you write in this file.
 *
 * The comments in this file are only to help you learn how the starter code
 * works. The instructions for the project are in the README. That said, here
 * are the three things you should do first to learn about the starter code:
 * - 1 - Change something small in index.html or style.css, then reload your
 *    browser and make sure you can see that change.
 * - 2 - On your browser, right click anywhere on the page and select
 *    "Inspect" to open the browser developer tools. Then, go to the "console"
 *    tab in the new window that opened up. This console is where you will see
 *    JavaScript errors and logs, which is extremely helpful for debugging.
 *    (These instructions assume you're using Chrome, opening developer tools
 *    may be different on other browsers. We suggest using Chrome.)
 * - 3 - Add another string to the titles array a few lines down. Reload your
 *    browser and observe what happens. You should see a fourth "card" appear
 *    with the string you added to the array, but a broken image.
 *
 */

let movieData = [
  {
    id: 1,
    title: "The Godfather",
    genre: "Crime",
    rating: 9.2,
    year: 1972,
    image:
      "https://www.indiewire.com/wp-content/uploads/2019/12/once-upon-a-time-in-hollywood.jpg?w=1000",
    favorited: false,
  },
  {
    id: 2,
    title: "The Shawshank Redemption",
    genre: "Drama",
    rating: 9.3,
    year: 2008,
    image:
      "https://static.wikia.nocookie.net/hulu/images/6/64/East_Los_High.jpg",
    favorited: false,
  },
  {
    id: 3,
    title: "The Dark Knight",
    genre: "Action",
    rating: 9.0,
    year: 2008,
    image:
      "https://www.indiewire.com/wp-content/uploads/2019/12/one-child-nation.jpeg?w=697",
    favorited: false,
  },
  {
    id: 4,
    title: "The Godfather: Part II",
    genre: "Crime",
    rating: 9.0,
    year: 1974,
    image:
      "https://m.media-amazon.com/images/M/MV5BZDY1ZGM4OGItMWMyNS00MDAyLWE2Y2MtZTFhMTU0MGI5ZDFlXkEyXkFqcGdeQXVyMDc5ODIzMw@@._V1_FMjpg_UX1000_.jpg",
    favorited: false,
  },
    {

    id: 5,
    title: "The Godfather: Part III",
    genre: "Crime",
    rating: 7.6,
    year: 1990,
    image:
      "https://upload.wikimedia.org/wikipedia/en/3/33/Fresh_Prince_S1_DVD.jpg",
    favorited: false,
    },

    {
        id: 6,
        title: "Game of Thrones",
        genre: "Dragons",
        rating: 10.0,
        year: 2022,
        image: "https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781608872190/game-of-thrones-9781608872190_hr.jpg",
        favorited: false,
    },
    {
        id: 7,
        title: "Sword of Destiny",
        genre: "Action",
        rating: 6.5,
        year: 2016,
        image: "https://www.indiewire.com/wp-content/uploads/2017/09/crouching-tiger-hidden-dragon-sword-of-destiny-2016.jpg?w=675",
        favorited: false,
    },
    {
        id: 8,
        title: "Wednesday",
        genre: "Comedy",
        rating: 8.0,
        year: 2022,
        image: "https://dnm.nflximg.net/api/v6/2DuQlx0fM4wd1nzqm5BFBi6ILa8/AAAAQdttJvszpXZZDRBx6bLQprJt918HrS1MGOej3W88GrkfOeL-kUJn66TfXKYxd1B7r3ZDxo2Wlo-FjgzFUvSNrR9FRSrUq-aW0Jzip6mBrJvjEm7pVt72u_XErbyxZZ5RJNJpnOdy_3z2VabskP99G_ie.jpg?r=93e",
        favorited: false,
    },
    {
        id: 9,
        title: "Gray Man",
        genre: "Action",
        rating: 8.5,
        year: 2025,
        image: "https://dnm.nflximg.net/api/v6/BvVbc2Wxr2w6QuoANoSpJKEIWjQ/AAAAQTXblKelZhCaFMQ5gF4MdJ1mhztWnSPFGGszmUkdrOp9Cd8PH-EnOiAoGKErTW4bBmKjGG-PxyIyHJCWAn2v_qJj6vsoq_852YaDA3TQ9a66MZPtJLfTKKLecFdldv7pYVBlnV0JVOeuJTDsd_99CS1K-zY.jpg?r=973",
        favorited: false,
    },
    {
        id: 10,
        title: "Imperial Dreams",
        genre: "Drama",
        rating: 7.0,
        year: 2022,
        image: "https://www.indiewire.com/wp-content/uploads/2017/09/imperial-dreams-2014.jpg?w=426",
        favorited: false,
    },
    {
        id: 11,
        title: "Shadow and Bone",
        genre: "Fantasy",
        rating: 8.5,
        year: 2021,
        image: "https://static1.tribute.ca/poster/660x980/shadow-and-bone-netflix-152483.jpg",
        favorited: false,
    },
    {
        id: 12,
        title: "Hello, Goodbye, and Everything in Between",
        genre: "Romance",
        rating: 6.5,
        year: 2022,
        image: "https://dnm.nflximg.net/api/v6/2DuQlx0fM4wd1nzqm5BFBi6ILa8/AAAAQfgI87Gg0yJG7fA9kPzlaMVQ-NhHgknQdocF6IWkrZJuoSdBb6q1YbyVUmjva0gn9keUJ_U9vCaVCBqRFyc2piUm5wH8OehQ4sMLYRCc5S9Xm3MPmVhp0FTSdyD8_k6eo2CT2qUem791q-hvkAYe1v4m.jpg?r=33c",
        favorited: false,
    },
    {
        id: 13,
        title: "Ginny & Georgia",
        genre: "Comedy",
        rating: 8.5,
        year: 2022,
        image: "https://cdn.cinematerial.com/p/297x/vnbrstx0/ginny-georgia-movie-poster-md.jpg?v=1612432627",
        favorited: false,
    },
    
];

let originalMovieData = [...movieData];

const FRESH_PRINCE_URL =
  "https://upload.wikimedia.org/wikipedia/en/3/33/Fresh_Prince_S1_DVD.jpg";
const CURB_POSTER_URL =
  "https://m.media-amazon.com/images/M/MV5BZDY1ZGM4OGItMWMyNS00MDAyLWE2Y2MtZTFhMTU0MGI5ZDFlXkEyXkFqcGdeQXVyMDc5ODIzMw@@._V1_FMjpg_UX1000_.jpg";
const EAST_LOS_HIGH_POSTER_URL =
  "https://static.wikia.nocookie.net/hulu/images/6/64/East_Los_High.jpg";

  let currentPage = 1;
  const cardsPerPage = 4; 
  
  function showCards() {
      const cardContainer = document.getElementById("card-container");
      cardContainer.innerHTML = "";
      const templateCard = document.querySelector(".card");
    
      
      movieData.sort((a, b) => {
          if (a.year !== b.year) {
              return a.year - b.year; 
          } else {
              return b.rating - a.rating; 
          }
      });
    
      // Pagination logic
      const startIndex = (currentPage - 1) * cardsPerPage;
      const endIndex = startIndex + cardsPerPage;
      const paginatedMovies = movieData.slice(startIndex, endIndex);
    
      // Loop through paginated movieData and create cards
      paginatedMovies.forEach((movie) => {
          const title = movie.title;
          const imageURL = movie.image;
          const rating = movie.rating;
          const year = movie.year;
          const favorited = movie.favorited;
      
          const nextCard = templateCard.cloneNode(true);
          editCardContent(nextCard, title, imageURL, rating, year, favorited, movie); 
          cardContainer.appendChild(nextCard); 
      });
  
      
      updatePagination();
  }
  
  function updatePagination() {
      const totalPages = Math.ceil(movieData.length / cardsPerPage);
      const pageNumbersContainer = document.querySelector(".page-numbers");
      pageNumbersContainer.innerHTML = "";
  
      // Generate page number buttons
      for (let i = 1; i <= totalPages; i++) {
          const pageNumberButton = document.createElement("button");
          pageNumberButton.textContent = i;
          pageNumberButton.classList.add("page-number");
          pageNumberButton.onclick = function() {
              currentPage = i;
              showCards();
          };
          pageNumbersContainer.appendChild(pageNumberButton);
      }
  }
  
  function prevPage() {
      if (currentPage > 1) {
          currentPage--;
          showCards();
      }
  }
  
  function nextPage() {
      const totalPages = Math.ceil(movieData.length / cardsPerPage);
      if (currentPage < totalPages) {
          currentPage++;
          showCards();
      }
  }

function filterByGenre() {
    const selectedGenre = document.getElementById("genre-filter").value;
    if (selectedGenre === "all") {
        showAllMovies();
    } else {
        const filteredMovies = originalMovieData.filter(movie => movie.genre.toLowerCase() === selectedGenre);
        movieData = filteredMovies;
        showCards();
    }
}


  

// This function updates the content of a card with a new title, image URL, rating, and year
function editCardContent(
    card,
    newTitle,
    newImageURL,
    rating,
    year,
    favorited,
    movie
  ) {
    card.style.display = "block";
  
    const cardHeader = card.querySelector("h2");
    cardHeader.textContent = newTitle;
  
    const cardImage = card.querySelector("img");
    cardImage.src = newImageURL;
    cardImage.alt = newTitle + " Poster";
  
    const cardList = card.querySelector("ul");
    cardList.innerHTML = ""; 
  
    const ratingListItem = document.createElement("li");
    ratingListItem.textContent = "Rating: " + rating;
    cardList.appendChild(ratingListItem);
  
    const yearListItem = document.createElement("li");
    yearListItem.textContent = "Year: " + year;
    cardList.appendChild(yearListItem);
  
    const favoriteIcon = card.querySelector(".favorite-icon");
    favoriteIcon.classList.toggle("fas", favorited); 
    favoriteIcon.classList.toggle("far", !favorited); 
  
    favoriteIcon.addEventListener("click", function() {
      toggleFavorite(this, movie); 
    });
  
    console.log("new card:", newTitle, "- html: ", card);
  }

  
// Function to delete a card
function deleteCard(deleteIcon) {
    const card = deleteIcon.closest('.card'); 
    console.log("card:", card);
    const cardId = parseInt(card.dataset.id); 
    console.log("cardId:", cardId);
    const index = movieData.findIndex(movie => movie.id === cardId); 
    console.log("index:", index);

    if (index !== -1) {
      movieData.splice(index, 1); 
      showCards(); 
    }
}


  function toggleFavorite(icon, movie) {
    const index = movieData.findIndex(m => m.id === movie.id); 
    if (index !== -1) {
        movieData[index].favorited = !movieData[index].favorited;
        showCards(); 
    }
}


document.addEventListener("DOMContentLoaded", showCards);

function quoteAlert() {
  console.log("Button Clicked!");
  alert(
    "I guess I can kiss heaven goodbye, because it got to be a sin to look this good!"
  );
}

function removeLastCard() {
  movieData.pop(); 
  showCards(); 
}
function search() {
  const searchInput = document
    .getElementById("search-input")
    .value.toLowerCase();
  movieData = originalMovieData.filter((movie) =>
    movie.title.toLowerCase().includes(searchInput)
  );
  showCards();
}
function displayFavorites() {
    const favoritedMovies = movieData.filter(movie => movie.favorited);
    if (favoritedMovies.length === 0) {
      alert("You haven't favorited any movies yet!");
    } else {
      movieData = favoritedMovies;
      showCards();
    }
  }
  function showAllMovies() {
    movieData = [...originalMovieData]; 
    showCards(); 
  }
  
  