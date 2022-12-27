import {
  getImageByClick,
  changeNumberofpage,
  comebackResettoOne,
  returnPage,
} from './js/request';
import { Notify } from 'notiflix';
import { renderOneImage } from './js/render';

const valueForm = document.querySelector('.search-form');
const myGaleery = document.querySelector('.gallery');
const myButtonForload = document.querySelector('.load-more');
let valueInput = '';

valueForm.addEventListener('submit', onFormSubmit);
async function onFormSubmit(event) {
  funkCler();
  event.preventDefault();
  comebackResettoOne();
  hideButton();
  valueInput = event.currentTarget.elements.searchQuery.value;

  if (!valueInput) {
    Notify.info('Give me a text,please!!!');
    return;
  }

  const dataForImge = await getImageByClick(valueInput);
  if (dataForImge.hits.length === 0) {
    hideButton();
    Notify.info(
      'Sorry, there are no images matching your search query. Please try again.'
    );
    return;
  }

  renderOneImage(dataForImge.hits);
  event.target.reset();
  myButtonForload.classList.remove('is-hidden');
}
myButtonForload.addEventListener('click', funcForClick);
async function funcForClick() {
  changeNumberofpage();
  const loadmore = await getImageByClick(valueInput);
  renderOneImage(loadmore.hits);
  if (finishLoad(loadmore.totalHits) < returnPage()) {
    Notify.info("We're sorry, but you've reached the end of search results.");
    hideButton();
  }
}
function funkCler() {
  myGaleery.innerHTML = '';
}
function hideButton() {
  myButtonForload.classList.add('is-hidden');
}
function finishLoad(totalImges) {
  return Math.ceil(totalImges / 40);
}
