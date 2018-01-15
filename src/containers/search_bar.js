import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchNews } from '../actions/index';


class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
      sources: 'buzzfeed',
      sortby: 'popularity'
    };

    this.handleSearch = this.handleSearch.bind(this);
    this.handleType = this.handleType.bind(this);
    this.handleSort = this.handleSort.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSearch(event) {
   this.setState({ search: event.target.value });
  }

  handleType(event){
    this.setState({sources: event.target.value});
  }

  handleSort(event){
    this.setState({sortby: event.target.value});
  }

  handleSubmit(event) {
   const params = {
     search: this.state.search,
     sources: this.state.sources,
     sortby: this.state.sortby
   }

    event.preventDefault();
    this.props.fetchNews(params);
    this.setState({
      search: '',
      sources: 'buzzfeed',
      sortby : 'popularity'
    });
  }

  render(){
    return (
    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
      <form onSubmit={this.handleSubmit}>
        <div className="col-lg-5 col-md-5 col-sm-12 col-xs-12">
        <label>
          <div className="dropdown-header">Search</div>
          <input className="form-control" name="search" type="text" onChange={this.handleSearch} value={this.state.search} placeholder="Search keyword"></input>
        </label>
        </div>

        <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
        <label>

        <div className="dropdown-header">Source</div>
        <select className="form-control" value={this.state.sources} onChange={this.handleType}>
            <option value={null}>All</option>
            <option value="abc-news">ABC News</option>
            <option value="axios">Axios</option>
            <option value="bleacher-report">Bleacher Report</option>
            <option value="Bloomberg">Bloomberg</option>
            <option value="breitbar-news">Breitbart News</option>
            <option value="business-insider">Business Insider</option>
            <option value="buzzfeed">Buzzfeed</option>
            <option value="cbs-news">CBS News</option>
            <option value="cnbc">CNBC</option>
            <option value="cnn">CNN</option>
            <option value="crypto-coins-news">Crypto Coins News</option>
            <option value="engadget">Engadget</option>
            <option value="entertainment-weekly">Entertainment Weekly</option>
            <option value="espn">ESPN</option>
            <option value="fortune">Fortune</option>
            <option value="fox-news">Fox News</option>
            <option value="fox-sports">Fox Sports</option>
            <option value="google-news">Google News</option>
            <option value="hacker-news">Hacker News</option>
            <option value="ign">IGN</option>
            <option value="mashable">Mashable</option>
            <option value="medical-news-today">Medical News Today</option>
            <option value="msnbc">MSNBC</option>
            <option value="mtv-news">MTV News</option>
            <option value="national-geographic">National Geographic</option>
            <option value="nbc-news">NBC News</option>
            <option value="new-scientist">New Scientist</option>
            <option value="newsweek">Newsweek</option>
            <option value="new-york-magazine">New York Magazine</option>
            <option value="next-big-future">Next Big Future</option>
            <option value="nfl-news">NFL News</option>
            <option value="nhl-news">NHL News</option>
            <option value="politico">Politico</option>
            <option value="polygon">Polygon</option>
            <option value="recode">Recode</option>
            <option value="reddit-r-all">Reddit /r/all</option>
            <option value="reuters">Reuters</option>
            <option value="techcrunch">TechCrunch</option>
            <option value="techradar">TechRadar</option>
            <option value="the-hill">The Hill</option>
            <option value="the-huffington-post">The Huffington Post</option>
            <option value="the-new-york-times">The New York Times</option>
            <option value="the-next-web">The Next Web</option>
            <option value="the-verge">The Verge</option>
            <option value="the-wall-street-journal">The Wall Street Journal</option>
            <option value="the-washington-post">The Washington Post</option>
            <option value="time">Time</option>
            <option value="usa-today">USA today</option>
            <option value="vice-news">Vice News</option>
            <option value="wired">Wired</option>
        </select>

      </label>
    </div>

    <div className="col-lg-2 col-md-2 col-sm-6 col-xs-6">
        <label>
        <div className="dropdown-header">Sort By</div>
        <select className="form-control" value={this.state.sortby} onChange={this.handleSort}>
            <option value="relevancy">Relevancy</option>
            <option value="popularity">Popularity</option>
            <option value="publishedAt">Most Recent</option>
        </select>
      </label>
    </div>
    <div className="col-lg-2 col-md-2 col-sm-6 col-xs-6">
      <div className="submit_button">
        <input className="btn btn-primary" type="submit" value="Submit" />
      </div>
      </div>
    </form>
    </div>
    );
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({fetchNews}, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);
