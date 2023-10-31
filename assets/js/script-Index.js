function searchLinks() {
  var input, filter, links, i, link;
  input = document.getElementById("search-text");
  filter = input.value.toUpperCase();
  links = document.getElementsByTagName("a");
  for (i = 0; i < links.length; i++) {
    link = links[i];
    if (link.innerText.toUpperCase().indexOf(filter) > -1) {
      link.style.display = "";
    } else {
      link.style.display = "none";
    }
  }

  // Tìm kiếm trên tất cả các trang con
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if (this.readyState === 4 && this.status === 200) {
      var parser = new DOMParser();
      var htmlDoc = parser.parseFromString(this.responseText, "text/html");
      var linksInPage = htmlDoc.getElementsByTagName("a");
      for (i = 0; i < linksInPage.length; i++) {
        link = linksInPage[i];
        if (link.innerText.toUpperCase().indexOf(filter) > -1) {
          link.style.display = "";
        } else {
          link.style.display = "none";
        }
      }
    }
  };
  xhr.open("GET", "/Luat/Tab-LuatBHXH.html", true);
  xhr.send();

  // Lặp lại cho các trang con khác
  // ...
}
