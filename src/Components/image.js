import React from 'react';
import { Link } from 'react-router-dom';

function Image(props) {
  return (
    <div>
      <Link to={`/image/${props.image.id}`}>
        <img src={props.image.url} alt={props.image.title}/>
      </Link>
      <h5>{props.image.title}</h5>
      <p>ID: {props.image.id}</p>
      <p>AlbumID: {props.image.albumId}</p>
    </div>
  );
}

export default Image;