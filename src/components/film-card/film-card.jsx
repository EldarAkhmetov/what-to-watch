import React, {Fragment, PureComponent} from 'react';
import PropTypes from 'prop-types';

import VideoPlayer from '../video-player/video-player.jsx';

class FilmCard extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      isPlaying: false
    };

    this.PREVIEW_PROPERTIES = {
      width: 280,
      height: 175
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
              src={film.src}
              isPlaying={isPlaying}
              poster={film.image}
            /> :
            <Fragment>
              <div className="small-movie-card__image">
                <img src={film.image} alt={film.title} width="280" height="175" />
              </div>
              <h3 className="small-movie-card__title">
                <a className="small-movie-card__link" href="movie-page.html">{film.title}</a>
              </h3>
            </Fragment>
          }
        </article>
      </Fragment>
    );
  }
}

FilmCard.propTypes = {
  film: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    image: PropTypes.string,
    src: PropTypes.string
  }),
  onCardHover: PropTypes.func
};

export default FilmCard;
