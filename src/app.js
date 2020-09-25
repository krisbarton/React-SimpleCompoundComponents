import React from 'react';
import Articles from './components/Articles';
import Header from './components/Header';
import ArticleData from './constants/data.json';
import './main.scss';

const App = () => {

    return (
        <>
            <Header />
            {
                ArticleData.map(function (article) {
                    return <Articles
                        key={article.id}
                        className={article.alignment === "left" ? "articles articles--left" : "articles articles--right"}>

                        <Articles.Img
                            src={article.img}
                            alt={article.alt} />

                        <Articles.Text className="articles__text">
                            <Articles.Title>{article.title}</Articles.Title>
                            {article.text}
                        </Articles.Text>

                    </Articles>
                })
            }
        </>
    )
}

export default App;
