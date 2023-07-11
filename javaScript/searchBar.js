fetch('../html/searchBar.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('searchBar').innerHTML = data;
  });
