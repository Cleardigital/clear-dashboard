export const ADD_PLAYER = 'player/ADD_PLAYER';
export const REMOVE_PLAYER = 'player/REMOVE_PLAYER';
export const ADD_SCORE = 'player/ADD_SCORE';
export const REMOVE_SCORE = 'player/REMOVE_SCORE';
export const CURRENT_LEVEL = 'player/CURRENT_LEVEL';
export const SELECT_CATEGORY = 'player/SELECT_CATEGORY';

const initialState = {
  player_name: 'Richard Rosales',
  score: 0,
  level: 0,
  category_selected: 12
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_PLAYER:
      return {
        ...state,
        player_name: action.name
      };

    case REMOVE_PLAYER:
      return {
        ...state,
        player_name: ''
      };

    case ADD_SCORE:
      return {
        ...state,
        score: state.score + action.points
      };

    case REMOVE_SCORE:
      return {
        ...state,
        score: state.score - action.points
      };

    case CURRENT_LEVEL:
      return {
        ...state,
        level: action.level
      };

    case SELECT_CATEGORY:
      return {
        ...state,
        category_selected: action.id
      };

    default:
      return state;
  }
};

export const addPlayer = name => {
  return dispatch => {
    dispatch({ type: ADD_PLAYER, name });
  };
};

export const removePlayer = () => {
  return dispatch => {
    dispatch({ type: REMOVE_PLAYER });
  };
};

export const addScore = points => {
  return dispatch => {
    dispatch({ type: ADD_SCORE, points });
  };
};

export const removeScore = points => {
  return dispatch => {
    dispatch({ type: REMOVE_SCORE, points });
  };
};

export const currentLevel = level => {
  return dispatch => {
    dispatch({ type: CURRENT_LEVEL, level });
  };
};

export const selectedCategory = id => {
  return dispatch => {
    dispatch({ type: SELECT_CATEGORY, id });
  };
};
