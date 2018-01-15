import React, { Component } from 'react';
import SearchBar from '../containers/search_bar.js';
import ArticleList from '../containers/article_list.js';

export default class App extends Component {

  render() {
    return (
      <div>
        <SearchBar />
        <ArticleList />
      </div>
    );
  }
}
