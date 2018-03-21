import React from 'react';

const Gif = ({url, title}) => {
  return (
    <section>
      <img src={url} alt={title}/>
    </section>
  )
}

export default Gif;