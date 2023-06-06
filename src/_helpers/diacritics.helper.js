import removeAccents from 'remove-accents';

function formatSearch(value = '') {
  return removeAccents.remove(value).toLowerCase().trim();
}

export { formatSearch };
