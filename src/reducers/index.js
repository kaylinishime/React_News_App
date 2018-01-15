import { combineReducers } from 'redux';
import ArticleReducer from './reducer_article';

const rootReducer = combineReducers({
  articles: ArticleReducer
});

export default rootReducer;
