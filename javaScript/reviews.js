fetch('../html/reviews.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('reviews1').innerHTML = data;
  });
