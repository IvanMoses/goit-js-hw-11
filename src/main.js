// main.js
import { fetchImages } from './js/pixabay-api.js';
import { renderImages, clearGallery } from './js/tender-functions.js';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const searchForm = document.querySelector('#search-form');
const loader = document.querySelector('.loader');

searchForm.addEventListener('submit', onSearch);

async function onSearch(event) {
  event.preventDefault();
  const query = event.currentTarget.elements.searchQuery.value.trim();

  if (query === '') {
    iziToast.error({
      title: 'Error',
      message: 'Search query cannot be empty',
    });
    return;
  }

  clearGallery();
  loader.style.display = 'block';

  try {
    const data = await fetchImages(query);
    loader.style.display = 'none';

    if (data.hits.length === 0) {
      iziToast.error({
        title: 'Error',
        message: 'Sorry, there are no images matching your search query. Please try again!',
      });
      return;
    }

    renderImages(data.hits);
  } catch (error) {
    loader.style.display = 'none';
    iziToast.error({
      title: 'Error',
      message: error.message,
    });
  }
}
