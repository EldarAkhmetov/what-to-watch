const initialState = {
  currentGenre: `all`
};

const genres = {
  all: `All Genres`,
  comedy: `Comedies`,
  crime: `Crime`,
  documentary: `Documentary`,
  drama: `Dramas`,
  horror: `Horror`,
  kidsAndFamily: `Kids & Family`,
  romance: `Romance`,
  sciFi: `Sci-Fi`,
  thriller: `Thrillers`
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
