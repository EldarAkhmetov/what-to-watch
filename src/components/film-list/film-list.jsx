import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import FilmCard from '../film-card/film-card.jsx';

class FilmList extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      activeCardId: null
    };
  }

  render() {
    const {films, currentGenre} = this.props;
    return (
      <div className="catalog__movies-list">
        {films
          .filter(({genre}) => {
            if (currentGenre === `all`) {
              return true;
            }
            return genre === currentGenre;
          })
          .map((it, ind) => {
            return <FilmCard
              key={`card-${ind}-${it.id}`}
              film={it}
              onCardHover={this._cardHoverHandler.bind(this)}
            />;
          })}
      </div>
    );
  }

  _cardHoverHandler(cardId) {
    this.setState({
      activeCardId: cardId
    });
  }
}

FilmList.propTypes = {
  films: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    image: PropTypes.string
  })),
  currentGenre: PropTypes.string
};

const mapStateToProps = (state, ownProps) => Object.assign(
    {},
    ownProps,
    {currentGenre: state.currentGenre}
);

export {FilmList};

export default connect(mapStateToProps)(FilmList);
