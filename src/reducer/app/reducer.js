const initialState = {
  currentGenre: `all`
};

const genres = {
  all: `All Genres`,
  Comedy: `Comedies`,
  Crime: `Crime`,
  Documentary: `Documentary`,
  Drama: `Dramas`,
  Horror: `Horror`,
  KidsAndFamily: `Kids & Family`,
  Romance: `Romance`,
  SciFi: `Sci-Fi`,
  Thriller: `Thrillers`
};

const ActionCreator = {
  changeCurrentGenre: (genre) => {
    return {
      type: `CHANGE_CURRENT_GENRE`,
      payload: genre
    };
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case `CHANGE_CURRENT_GENRE`: return Object.assign({}, state, {currentGenre: action.payload});
  }

  return state;
};

export {
  genres,
  ActionCreator,
  reducer
};
