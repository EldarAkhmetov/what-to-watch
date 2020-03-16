import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

import FilmCard from '../film-card/film-card.jsx';

class FilmList extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      activeCardId: null
    };
  }

  render() {
    const {films} = this.props;
    return (
      <div className="catalog__movies-list">
        {films.map((it, ind) => {
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
};

export default FilmList;
