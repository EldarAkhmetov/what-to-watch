import React, {Fragment, PureComponent, createRef} from 'react';
import PropTypes from 'prop-types';

class VideoPlayer extends PureComponent {
  constructor(props) {
    super(props);

    this._videoRef = createRef();

    this.state = {
      isPlaying: false,
      isLoading: true
    };
  }

  componentDidMount() {
    const {src} = this.props;
    const video = this._videoRef.current;

    video.src = src;

    video.muted = true;

    video.oncanplaythrough = () => {
      this.setState({
        isLoading: false
      });
    };

    video.onplay = () => {
      this.setState({
        isPlaying: true
      });
    };

    video.onpause = () => {
      this.setState({
        isPlaying: false
      });
    };
  }

  componentDidUpdate() {
    const {isPlaying} = this.props;
    const {isLoading} = this.state;
    const video = this._videoRef.current;

    if (isPlaying && !isLoading) {
      video.play();
    } else {
      video.pause();
    }
  }

  componentWillUnmount() {
    const video = this._videoRef.current;

    video.oncanplaythrough = null;
    video.onplay = null;
    video.onpause = null;
    video.src = ``;
  }

  render() {
    const {properties, poster} = this.props;

    return (
      <Fragment>
        <video
          width={properties.width}
          height={properties.height}
          poster={poster}
          ref={this._videoRef}
        />
      </Fragment>
    );
  }
}

VideoPlayer.propTypes = {
  properties: PropTypes.object.isRequired,
  src: PropTypes.string.isRequired,
  isPlaying: PropTypes.bool.isRequired,
  poster: PropTypes.string
};

export default VideoPlayer;
