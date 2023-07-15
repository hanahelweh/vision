fetch('../html/ourTeam.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('team').innerHTML = data;
  });

  fetch('../html/footer.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('footer1').innerHTML = data;
  });

  fetch('../html/homeAbout.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('homeAbout1').innerHTML = data;
  });

  fetch('../html/reviews.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('reviews1').innerHTML = data;
  });

  fetch('../html/navbar.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('navbar').innerHTML = data;
    // After loading the navbar contents, include navbar2.js to activate the sidebar functionality
    const script = document.createElement('script');
    script.src = '../javaScript/navbar2.js';
    document.body.appendChild(script);
  });

  