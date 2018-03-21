import React, { Component } from 'react';
import Gif from './Gif';

class GifList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gifs: []
    };
  }

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
      .then(gifs => this.setState({ gifs }));
  }

  render() {
    const components = this.state.gifs.map(gif => <Gif url={gif.url} title={gif.title} key={gif.id}/>);
    return (
      <section className='GifList'>
        <h1>Trends</h1>
        {components}
      </section>
    );
  }
}

export default GifList;