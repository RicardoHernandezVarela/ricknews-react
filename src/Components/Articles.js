import React from 'react';

/* Fallback image */

import logo from '../img/icon-96x96.png'
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
                        <h6>Written by: {article.author}</h6>
                        <img src={article.urlToImage || logo} alt="article"/>
                        <hr></hr>
                        <p>{article.description}</p>
                    </a>
                </div>
            );
        })
    } 

    return (
        <div className="articles">
            {articlesList}
        </div>
    );
}

export default Articles;