fetch('../html/navbar.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('navbar').innerHTML = data;
    // After loading the navbar contents, include navbar2.js to activate the sidebar functionality
    const script = document.createElement('script');
    script.src = '../javaScript/navbar2.js';
    document.body.appendChild(script);
  });
