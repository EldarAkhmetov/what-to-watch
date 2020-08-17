import React, {Fragment, PureComponent} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

import VideoPlayer from '../video-player/video-player.jsx';

class FilmCard extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      isPlaying: false
    };

    this.PREVIEW_PROPERTIES = {
      width: 280,
      height: 170
    };

  }

  _cardHoverHandler(id) {
    this.timer = setTimeout(() => this.setState({
      isPlaying: true
    }), 1000);
    this.props.onCardHover(id);
  }

  _cardUnhoverHandler() {
    clearTimeout(this.timer);
    this.setState({
      isPlaying: false
    });
  }

  render() {
    const {film} = this.props;
    const {isPlaying} = this.state;
    return (
      <Fragment>
        <article
          className="small-movie-card catalog__movies-card"
          onMouseEnter={() => this._cardHoverHandler(film.id)}
          onMouseLeave={() => this._cardUnhoverHandler()}
        >
          { isPlaying ?
            <VideoPlayer
              properties={this.PREVIEW_PROPERTIES}
              src={film.preview.videoSrc}
              isPlaying={isPlaying}
              poster={film.preview.image}
            />
            :
            <Fragment>
              <div className="small-movie-card__image">
                <img src={film.preview.image} alt={film.name} width="280" height="175" />
              </div>
            </Fragment>
          }
          <h3 className="small-movie-card__title">
            <Link className="small-movie-card__link" to={{pathname: `/${film.name}`, state: film}} >{film.name}</Link>
          </h3>
        </article>
      </Fragment>
    );
  }
}

FilmCard.propTypes = {
  film: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    image: PropTypes.string,
    src: PropTypes.string,
    preview: PropTypes.object
  }),
  onCardHover: PropTypes.func
};

export default FilmCard;
