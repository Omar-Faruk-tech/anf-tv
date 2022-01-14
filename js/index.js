
let newsButtonContainer = 
document.getElementById('news-list-container');

let modal = document.getElementsByClassName('modal-backgroung');
let modalId = document.getElementById('modal-backgroung');

function toggleNav() {
  if (modal[0] == null) {
    // console.log('hello')
    newsButtonContainer.classList.add('open-news-categories');
    modalId.classList.add('modal-backgroung');
  } else {
    newsButtonContainer.classList.remove('open-news-categories');
    // newsButtonContainer.classList.toggle('close-news-categories');
    modalId.classList.remove('modal-backgroung');
  }
};
