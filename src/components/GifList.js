import React, { Component } from 'react';
import { connect } from 'react-redux';
import Gif from './Gif';
import { loadGifs } from '../actions';

class GifList extends Component {

  componentWillMount() {
    this.props.load();
  }

  render() {
    if (this.props.status === 'LOADING')
      return (<p>Loading</p>);
    if (this.props.status === 'ERROR')
      return (<p>ERROR</p>);
    const components = this.props.gifs.map(gif => <Gif url={gif.url} title={gif.title} key={gif.id}/>);
    return (
      <section className='GifList'>
        <h1>Trends</h1>
        {components}
      </section>
    );
  }
}

const mapStateToProps = (state) => ({ gifs: state.gifs, status: state.status });
const mapDispatchToProps = (dispatch) => ({ load: (gifs) => dispatch(loadGifs) });

export default connect(mapStateToProps, mapDispatchToProps)(GifList);