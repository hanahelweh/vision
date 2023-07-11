fetch('../html/homeAbout.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('homeAbout1').innerHTML = data;
  });
