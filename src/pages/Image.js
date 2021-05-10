import React from 'react';
import { useParams } from 'react-router-dom';
import { connect } from "react-redux";

const Image = (props) => {
  
  const { id } = useParams();
  const image = props.images[id - 1];
  
  return (
    <div>
      <img src={image.url} alt={image.title}/>
      <h5>{image.title}</h5>
      <p>ID: {image.id}</p>
      <p>AlbumID: {image.albumId}</p>
    </div>
  );
}

const mapStateToProps = (state) => ({
  images: state.imageData.images,
});

export default connect(mapStateToProps, {})(Image);