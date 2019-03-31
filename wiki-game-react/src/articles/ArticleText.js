import React, { Component } from 'react';

class ArticleText extends Component {
  render() {
      const {articleText} = this.props
    return (
      <div>
        <p id='texto'>{articleText}</p>
      </div>
    );
  }
}

export default ArticleText;
