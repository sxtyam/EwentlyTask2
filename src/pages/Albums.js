import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

const Albums = (props) => {

  let allAlbums = props.albums.map((album) => (
    <div key={album}>
      <Link to={`/album/${album}`}>Album {album}</Link>
    </div>)
  );

  return <div>{allAlbums}</div>;
};

const mapStateToProps = (state) => ({
  albums: state.imageData.albums,
});

export default connect(mapStateToProps, {})(Albums);
