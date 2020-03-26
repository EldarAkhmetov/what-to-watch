import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {genres, ActionCreator} from '../../reducer/reducer.js';

const GenreList = (props) => {
  const {onGenreChange, currentGenre} = props;

  return (
    <Fragment>
      <h2 className="catalog__title visually-hidden">Catalog</h2>

      <ul className="catalog__genres-list">
        {Object.keys(genres).map((genre, index) => {
          return <li className={genre === currentGenre
            ? `catalog__genres-item catalog__genres-item--active`
            : `catalog__genres-item`}
          key={`genre-${genre}-${index}`}
          onClick={(evt) => {
            evt.preventDefault();
            onGenreChange(genre);
          }}>
            <a href="#" className="catalog__genres-link">{genres[genre]}</a>
          </li>;
        })}
      </ul>
    </Fragment>
  );
};

GenreList.propTypes = {
  onGenreChange: PropTypes.func,
  currentGenre: PropTypes.string
};

const mapStateToProps = (state) => ({
  currentGenre: state.currentGenre,
});

const mapDispatchToProps = (dispatch) => {
  return {
    onGenreChange: (genre) => {
      dispatch(ActionCreator.changeCurrentGenre(genre));
    }
  };
};

export {GenreList};

export default connect(mapStateToProps, mapDispatchToProps)(GenreList);

