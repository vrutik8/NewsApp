import React, { Component } from 'react'

export class NewsItem extends Component {
  
  render() {
let {title, description,imageUrl,newsUrl,author,date,source} = this.props;
    return (
      <div className='my-3'>
        <div className="card" >
        <span className='position-absolute top-0 translate-middle badge round-pill bg-danger' style={{left: "90%", zIndex:"1"}}>{source}</span>
  <img src={!imageUrl?"https://gumlet.assettype.com/bloombergquint%2F2022-09%2Fce538b61-1b85-4b48-a80d-0a991555abf3%2Fmyriam_jessier_eveI7MOcSmw_unsplash.jpg?rect=0%2C205%2C4078%2C2141&w=1200&auto=format%2Ccompress&ogImage=true":imageUrl} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{description}...</p>
    <p className="card-text"><small className= " text-muted">By {!author?"Unknown":author} on {new Date(date).toGMTString()}</small></p>
    <a rel="noreferrer" href={newsUrl} target="_blank"className="btn  btn-sm btn-dark">Read More</a>
  </div>
</div>
      </div>
    )
  }
}

export default NewsItem;
