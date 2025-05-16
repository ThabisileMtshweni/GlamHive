// script.js

const searchBar = document.getElementById("search-bar");
const suggestionsBox = document.getElementById("suggestions-box");

// Predefined services for suggestion
const services = [
  { name: "Braids", link: "/braids-page" },
  { name: "Makeup", link: "/makeup-page" },
  { name: "Nails", link: "/nails-page" },
  { name: "Weaves", link: "/weaves-page" }
];

// Function to filter suggestions based on search input
function getSuggestions(query) {
  return services.filter(service =>
    service.name.toLowerCase().includes(query.toLowerCase())
  );
}

// Function to show the suggestion dropdown
function showSuggestions(suggestions) {
  suggestionsBox.innerHTML = ""; // Clear previous suggestions

  if (suggestions.length > 0) {
    suggestionsBox.style.display = "block"; // Show the dropdown
    suggestions.forEach(suggestion => {
      const suggestionItem = document.createElement("div");
      suggestionItem.classList.add("suggestion");
      suggestionItem.textContent = suggestion.name;

      // When a suggestion is clicked, redirect to the corresponding service page
      suggestionItem.addEventListener("click", () => {
        window.location.href = suggestion.link;
      });

      suggestionsBox.appendChild(suggestionItem);
    });
  } else {
    suggestionsBox.style.display = "none"; // Hide if no suggestions
  }
}

// Event listener for search bar input to filter suggestions
searchBar.addEventListener("input", (e) => {
  const query = e.target.value.trim();
  if (query.length > 0) {
    const filteredSuggestions = getSuggestions(query);
    showSuggestions(filteredSuggestions);
  } else {
    suggestionsBox.style.display = "none"; // Hide dropdown if input is empty
  }
});

// Close suggestions dropdown if user clicks outside the search area
document.addEventListener("click", (e) => {
  if (!searchBar.contains(e.target) && !suggestionsBox.contains(e.target)) {
    suggestionsBox.style.display = "none"; // Hide if clicking outside
  }
});
