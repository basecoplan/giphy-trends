import React, { Component } from 'react';
import Gif from './Gif';
import { connect } from 'react-redux';

class GifList extends Component {

  componentWillMount() {
    const apiKey = 'CpAF0AM2qwD9R5zJj9tsM7gBQOEpWRBO';
    const limit = 8;

    fetch(`http://api.giphy.com/v1/gifs/trending?api_key=${apiKey}&limit=${limit}`)
      .then(response => response.json())
      .then(objects =>
        objects.data.map(obj => {
          return ({
            id: obj.id,
            title: obj.title,
            url: obj.images.downsized_medium.url
          });
        })
      )
      .then(gifs => this.props.loaded(gifs));
  }

  render() {
    const components = this.props.gifs.map(gif => <Gif url={gif.url} title={gif.title} key={gif.id}/>);
    return (
      <section className='GifList'>
        <h1>Trends</h1>
        {components}
      </section>
    );
  }
}

const mapStateToProps = (state) => ({ gifs: state.gifs });
const mapDispatchToProps = (dispatch) => ({ loaded: (gifs) => dispatch({ type: 'GIFS_LOADED', gifs}) });

export default connect(mapStateToProps, mapDispatchToProps)(GifList);