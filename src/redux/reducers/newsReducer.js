import FILTER_NEWS from '../constants/constants';

const initialState = [];

const newsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case FILTER_NEWS:
      return payload;

    default:
      return state;
  }
};
export default newsReducer;
