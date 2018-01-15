import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

class ArticleList extends Component {

  renderList(articles, index){
    if (!articles) {
      return <div>search articles.</div>
    }
      return  articles.articles.map(article => {
        console.log(article);

        return (
          <div key={article.index} className="flex-card">
            <div className="card">
            <img className="card-img-top img-responsive" src={article.urlToImage} alt="Card image cap" />
              <div className="card-body">
                <h5 className="card-title">{article.title}</h5>
                <p className="card-text">{article.description}</p>
                <a href={article.url} target="_blank" className="btn btn-primary">Read</a>
              </div>
            </div>
            </div>
        );
      });
    }

  render(){
    return(
      <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 flex-wrap">
          {this.props.articles.map(this.renderList)}
        </div>
      );
    }
}

function mapStateToProps(state){
  return {
    articles: state.articles
  }
}

export default connect(mapStateToProps)(ArticleList);
