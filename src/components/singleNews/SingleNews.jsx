import './singleNews.css' 
function SingleNews(news) {
  return (
    <div className="single-news">
        <div >
            <img className="image" src={news.news.urlToImage}/>
        </div>

        <h2>{news?.news?.title}</h2>
        <p>{news?.news?.description}</p>
        <button onClick={() => window.open(news.news.url)} className="read-more-btn">read more  </button>

    </div>
  )
}

export default SingleNews