
document.getElementById("search-form

document.getElementById("search-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
    var searchText = document.getElementById("search-text").value.toLowerCase();
    var links = document.getElementsByTagName("a");

    for (var i = 0; i < links.length; i++) {
        var link = links[i];
        var linkText = link.textContent.toLowerCase();

        if (linkText.includes(searchText)) {
            link.style.display = "

document.getElementById("search-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
    var searchText = document.getElementById("search-text").value.toLowerCase();
    var links = document.getElementsByTagName("a");

    for (var i = 0; i < links.length; i++) {
        var link = links[i];
        var linkText = link.textContent.toLowerCase();

        if (linkText.includes(searchText)) {
            link.style.display = "block"; // Show the matching link
        } else {
            link.style.display = "none"; // Hide non-matching links
        }
    }
});