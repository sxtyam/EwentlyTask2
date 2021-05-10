import "./Home.css";
import { connect } from "react-redux";
import { addImages } from "../actions/addImages";
import { changeY } from "../actions/changeY";
import React, { Component } from "react";
import AllImages from "../Components/allImages";
import { Link } from 'react-router-dom';

class Home extends Component {
  componentDidMount() {
    this.props.addImages(this.props.page);

    var options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.7,
    };

    this.observer = new IntersectionObserver(
      this.handleObserver.bind(this),
      options
    );
    this.observer.observe(this.loadingRef);
  }

  handleObserver(entities, observer) {
    const y = entities[0].boundingClientRect.y;
    if (this.props.y > y) {
      this.props.addImages(this.props.page);
    }
    this.props.changeY(y);
  }

  render() {
    return (
      <div>
        <Link to={'/albums'}>All Albums</Link>
        <AllImages photos={this.props.images || []} />
        <div
          ref={(loadingRef) => (this.loadingRef = loadingRef)}
          style={{ height: "10px", width: "0", margin: "auto" }}
        >
          {this.props.loading && <div className="loader"></div>}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  images: state.imageData.images,
  page: state.pageData.page,
  y: state.pageData.y,
  loading: state.pageData.loading,
});

export default connect(mapStateToProps, { addImages, changeY })(Home);
