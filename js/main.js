const texts = ["Keychains", "Gift Boxes", "Name Plates","Coasters", "Bookmarks"];
let counter = 0;
const changableText = document.getElementById("changable-text");

function changeText() {
  incrementIndex();

  changableText.innerHTML = texts[counter];
  changableText.classList.add("text-animation-show");

  setTimeout(() => {
    Hide();
  }, 2400);

  setTimeout(changeText, 3000);
}

changeText();

function Hide() {
  changableText.classList.remove("text-animation-show");
  changableText.classList.add("text-animation-hide");
  setTimeout(() => {
    changableText
      .classList.remove("text-animation-hide");
  }, 300);
}

function incrementIndex() {
  if (counter < texts.length - 1) {
    counter++;
  } else {
    counter = 0;
  }
}

const btn = document.querySelector('.menu-btn');
btn.onclick = () => {
  document.querySelector('.navbar').classList.toggle('show-menu')
}
