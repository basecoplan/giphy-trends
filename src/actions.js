const fetchGifs = (limit) => {
  const apiKey = 'CpAF0AM2qwD9R5zJj9tsM7gBQOEpWRBO';
  limit = limit || 8;
  
  return fetch(`http://api.giphy.com/v1/gifs/trending?api_key=${apiKey}&limit=${limit}`)
    .then(response => response.json())
    .then(objects =>
      objects.data.map(obj => {
        return ({
          id: obj.id,
          title: obj.title,
          url: obj.images.downsized_medium.url
        });
      })
    );
}

const error = () => ({ type: 'FETCH_GIFS_ERROR' });
const loading = () => ({ type: 'FETCH_GIFS_LOADING' });
const loaded = (gifs) => ({ type: 'FETCH_GIFS_SUCCESS', gifs });

export const loadGifs = (limit) => (dispatch) => {
  dispatch(loading());
  fetchGifs(limit)
    .then(gifs => dispatch(loaded(gifs)))
    .catch(() => dispatch(error()));
}