fetch('../html/QuestionAnswer.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('QA').innerHTML = data;
  });
