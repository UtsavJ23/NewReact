  import React, { Component } from 'react'
  import NewsItem from './NewsItem'

  export class NewsComponent extends Component {
    article = []
    constructor(){
      super();
      this.state = { 
        article : [],
        loading: false,
        page: 1
      }
    }
    async componentDidMount(){
      let url =
        `https://newsapi.org/v2/top-headlines?country=in&apiKey=f75447654b16434e91337c2578db90d6`;
      let data = await fetch(url);
      let parsedData = await data.json();
      this.setState({
        article: parsedData.articles,
        totalResults: parsedData.totalResults
      });
    }
    handlePrevClick = async () => {
      let url =
        `https://newsapi.org/v2/top-headlines?country=in&apiKey=f75447654b16434e91337c2578db90d6&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
      let data = await fetch(url);
      let parsedData = await data.json();
      this.setState({
        page: this.state.page - 1, 
        article: parsedData.articles
      });
    }
    handleNextClick = async () => {
      if(Math.ceil(this.state.totalResults/this.props.pageSize)<=this.state.page +1){
        let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=f75447654b16434e91337c2578db90d6&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({
          page: this.state.page + 1, 
          article: parsedData.articles
        });
    }
    }
    render() {
      return (
        <div className="container my-3">
          <h2 className='text-center'>Top Headlines at your Fingertips</h2>
          <div className="row">
            {this.state.article.map((element) => {
              return (
                <div className="col md-4" key={element.url}>
                  <NewsItem
                    title={element.title}
                    description={element.description}
                    imageUrl={element.urlToImage}
                    url={element.url}
                  />
                </div>
              );
            })}
            <div className="d-flex justify-content-between">
              <button
                type="button"
                disabled={this.state.page <= 1}
                className="btn btn-dark"
                onClick={() => this.handlePrevClick()}
              >
                &larr; Previous
              </button>
              <button
                type="button"
                disabled={
                  Math.ceil(this.state.totalResults / this.props.pageSize) === this.state.page
                }
                className="btn btn-dark"
                onClick={() => this.handleNextClick()}
              >
                Next &rarr;
              </button>
            </div>
          </div>
        </div>
      );
    }
  }

  export default NewsComponent