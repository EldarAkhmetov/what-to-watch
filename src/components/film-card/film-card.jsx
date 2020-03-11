import React, {Fragment} from 'react';
import PropTypes from 'prop-types';

const FilmCard = (props) => {
  const {film, onCardHover} = props;

  return <Fragment>
    <article className="small-movie-card catalog__movies-card" onMouseEnter={() => onCardHover(film.id)}>
      <div className="small-movie-card__image">
        <img src={film.image} alt={film.title} width="280" height="175" />
      </div>
      <h3 className="small-movie-card__title">
        <a className="small-movie-card__link" href="movie-page.html">{film.title}</a>
      </h3>
    </article>
  </Fragment>;
};

FilmCard.propTypes = {
  film: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    image: PropTypes.string
  }),
  onCardHover: PropTypes.func
};

export default FilmCard;
