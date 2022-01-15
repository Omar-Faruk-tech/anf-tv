
let newsButtonContainer = 
document.getElementById('news-list-container');

let modal = document.getElementsByClassName('modal-background');
let modalId = document.getElementById('modal-background');

function toggleNav() {
  if (modal[0] == null) {
    newsButtonContainer.classList.add('open-news-categories');
    modalId.classList.add('modal-background');
  } else {
    newsButtonContainer.classList.remove('open-news-categories');
    modalId.classList.remove('modal-background');
  }
};
