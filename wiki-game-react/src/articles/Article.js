import React, { Component } from 'react';
import ArticleTitle from './ArticleTitle'
import ArticleText from './ArticleText'
import ArticleImage from './ArticleImage'

import ArticleData from '../data/articles.json'

class Article extends Component {
  render() {
    return (
      <div>
        <ArticleTitle articleTitle={ArticleData[0].name}/>
        <ArticleText articleText={ArticleData[0].texto}/>
        <ArticleImage articleImage={ArticleData[0].imagem}/>
      </div>
    );
  }
}

export default Article;
