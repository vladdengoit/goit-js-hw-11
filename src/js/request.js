import axios from 'axios';
let incresePage = 1;
async function getImageByClick(valueM) {
  const requestByclick = `https://pixabay.com/api/?q=${valueM}&page=${incresePage}`;
  const options = {
    params: {
      key: '32362359-4dcfb6f7268fa8150913e349d',
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: 'true',
      per_page: '40',
    },
  };
  const { data } = await axios.get(requestByclick, options);

  return data;
}
function changeNumberofpage() {
  incresePage += 1;
}
function comebackResettoOne() {
  incresePage = 1;
}
function returnPage() {
  return incresePage;
}
export { getImageByClick, changeNumberofpage, comebackResettoOne, returnPage };
