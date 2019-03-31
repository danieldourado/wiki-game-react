import React, { Component } from 'react';

class ArticleImage extends Component {
  render() {
      const {articleImage} = this.props
    return (
      <div>
        <img id="articleImage" className='img-fluid' alt='' src={window.location.origin +'/media/'+articleImage+'.jpg'}/>
      </div>
    );
  }
}

export default ArticleImage;