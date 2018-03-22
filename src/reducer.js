export default (state, action) => {
  switch(action.type) {
    case 'FETCH_GIFS_LOADING':
      return { ...state, status: 'LOADING' };
    case 'FETCH_GIFS_ERROR':
      return { ...state, status: 'ERROR' };
    case 'FETCH_GIFS_SUCCESS':
      return { ...state, gifs: action.gifs, status: 'SUCCESS' };
    default:
      return state;
  }
}