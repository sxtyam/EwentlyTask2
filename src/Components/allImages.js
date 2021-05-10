import React from 'react'
import Image from './image';

function AllImages(props) {

  let allPhotos = props.photos.map((photo) => <Image key={photo.id} image={photo} />);

  return (
    <div>
      {allPhotos}
    </div>
  )
}

export default AllImages;
