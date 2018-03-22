export default (state, action) => {
  if (action.type === 'GIFS_LOADED') {
    return { ...state, gifs: action.gifs };
  }
  return state;
}