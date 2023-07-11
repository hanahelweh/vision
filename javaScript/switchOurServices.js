document.addEventListener("DOMContentLoaded", () => {
  const boxes = document.querySelector(".boxes");
  const buttonsLeftRight = document.querySelectorAll("#ourServices i");
  const firstBOxWidth = boxes.querySelector(".box").offsetWidth;
  let isScrolledX = false, startX,startScrollLeft;
  buttonsLeftRight.forEach(btn => {
    btn.addEventListener("click", () =>{
      boxes.scrollLeft += btn.id === "left" ? -firstBOxWidth : firstBOxWidth;
    })
  });
  const scrollStart = (e) => {
    isScrolledX = true;
    boxes.classList.add("dragging");
    startX=e.pageX;
    startScrollLeft=boxes.scrollLeft;
  };

  const dragging = (e) => {
    if (!isScrolledX) return;
    boxes.scrollLeft = startScrollLeft - (e.pageX - startX);
  };
const dragStop = () =>{
  isScrolledX=false;
  boxes.classList.remove("dragging");
}
  if (boxes) {
    boxes.addEventListener("mousedown", scrollStart);
    boxes.addEventListener("mousemove", dragging);
    document.addEventListener("mouseup", dragStop);
  }
});
