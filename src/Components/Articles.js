import React from 'react';

const Articles = (props) => {

    const allArticles = props.articles;
    let articlesList = [];

    if(allArticles.length > 0) {
        articlesList = allArticles.map( (article, index) => {
            return (
                <div className="article" key={index}>
                    <a href={article.url}>
                        <h2>{article.title}</h2>
                        <h6>{article.publishedAt}</h6>
                        <img src={article.urlToImage} alt="article"/>
                        <hr></hr>
                        <p>{article.description}</p>
                    </a>
                </div>
            );
        })
    } else {
        articlesList = <h1>Sin resultados</h1>;
    }

    return (
        <div className="articles">
            {articlesList}
        </div>
    );
}

export default Articles;