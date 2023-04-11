const circles = document.querySelectorAll(".circle");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const progress = document.getElementById("progress");

let activeCount = 1;

prev.addEventListener("click", () => {
  activeCount--;
  if (activeCount < 1) {
    activeCount = 1;
  }
  update();
});

next.addEventListener("click", () => {
  activeCount++;
  if (activeCount > circles.length) {
    activeCount = circles.length;
  }
  update();
});

function update() {
  circles.forEach((circle, idx) => {
    if (idx < activeCount) {
      circle.classList.add("active");
    } else {
      circle.classList.remove("active");
    }
  });

  const actives = document.querySelectorAll(".active");
  console.log(actives.length, circles.length);

  progress.style.width =
    actives.length === circles.length
      ? ((actives.length - 1) / (circles.length - 1)) * 95 + "%"
      : ((actives.length - 1) / (circles.length - 1)) * 100 + "%";

  if (activeCount === 1) {
    prev.disabled = true;
  } else if (activeCount === circles.length) {
    next.disabled = true;
  } else {
    prev.disabled = false;
    next.disabled = false;
  }
}
