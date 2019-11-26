import FILTER_NEWS from '../constants/constants';

const filterNews = value => ({
  type: FILTER_NEWS,
  payload: value,
});

export default filterNews;
