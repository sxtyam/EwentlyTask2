import React from "react";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import AllImages from "../Components/allImages";

const Album = (props) => {
  const { id } = useParams();
  console.log(props.images);
  let images = props.images.filter((image) => image.albumId == id);
  console.log(images);
  return (
    <div>
      <AllImages photos={images} />
    </div>
  );
};

const mapStateToProps = (state) => ({
  images: state.imageData.images,
});

export default connect(mapStateToProps, {})(Album);
