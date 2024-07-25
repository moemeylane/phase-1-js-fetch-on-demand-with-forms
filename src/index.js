const init = () => {
    const inputForm = document.querySelector("form");

    inputForm.addEventListener("submit", (event) => {
      event.preventDefault(); // Prevent the default form submission behavior
      
      const input = document.querySelector("input#searchByID").value; // Get the user input
  
      // Fetch data from the JSON server based on the user input
      fetch(`http://localhost:3000/movies/${input}`)
        .then(response => {
          if (!response.ok) { // Check if response is not OK
            throw new Error('Movie not found');
          }
          return response.json(); // Parse the response as JSON
        })
        .then(data => {
          // Update the page with the fetched movie data
          const titleElement = document.querySelector("section#movieDetails h4");
          const summaryElement = document.querySelector("section#movieDetails p");
  
          titleElement.innerText = data.title;
          summaryElement.innerText = data.summary;
        })
        .catch(error => {
          // Handle errors (e.g., invalid ID or network issues)
          console.error('Error:', error);
          const titleElement = document.querySelector("section#movieDetails h4");
          const summaryElement = document.querySelector("section#movieDetails p");
  
          titleElement.innerText = 'Movie not found';
          summaryElement.innerText = '';
        });
    });
  };
document.addEventListener('DOMContentLoaded', init);