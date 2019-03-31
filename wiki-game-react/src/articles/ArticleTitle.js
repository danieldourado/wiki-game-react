import React, { Component } from 'react';

class ArticleTitle extends Component {
  render() {
      const {articleTitle} = this.props
    return (
      <div>
        <h1>
            <span id='titulo'>{articleTitle}</span>
            <span id="point-right">👉</span>
            <span id="targetArticle">Artigo de destino: </span>
        </h1>
      </div>
    );
  }
}

export default ArticleTitle;
