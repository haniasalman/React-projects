import React from 'react';

class ImageCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = { spans: 0 };

    this.imageRef = React.createRef(); //ref created for accessing dom elements
  }

  componentDidMount() {
    this.imageRef.current.addEventListener('load', this.setSpans); //event listener is added for first load the image and then callback fn is called

  }

  setSpans = () => {
    const height = this.imageRef.current.clientHeight;

    const spans = Math.ceil(height / 10); //for getting the height of span to set grid-row-end styling for each img | 10 is divide i.e grid-auto-rows styling

    this.setState({ spans }); // equals to {spans : spans}
  };

  render() {
    const { description, urls } = this.props.image;

    return (
      <div style={{ gridRowEnd: `span ${this.state.spans}` , paddingTop:'20px' }}>
        <img ref={this.imageRef} alt={description} src={urls.regular} />
      </div>
    );
  }
}

export default ImageCard;
