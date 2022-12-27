import { Notify } from 'notiflix';
const myGaleery = document.querySelector('.gallery');

function renderOneImage(arrayImages) {
  const resultRender = arrayImages
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) => {
        return `<div class="photo-card">
  <img src="${largeImageURL}" width="360" high = "200" alt="${tags}" loading="lazy" />
  <div class="info" >
    <p class="info-item">
      <b>Likes</b>
      <span>${likes}</span>
         </p>
    
    <p class="info-item">
      <b>Views</b>
      <span>${views}</span>
    </p>
    <p class="info-item">
      <b>Comments</b>
      <span>${comments}</span>
    </p>
    <p class="info-item">
      <b>Downloads</b>
      <span>${downloads}</span>
    </p>
  </div>
</div>`;
      }
    )
    .join('');
  myGaleery.insertAdjacentHTML('beforeend', resultRender);
}

export { renderOneImage };
