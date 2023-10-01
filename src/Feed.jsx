import React, { useState, useEffect } from "react";

export default function Feed() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const url = "https://brightfeed-server.onrender.com";
    fetch(url)
      .then((response) => response.text())
      .then((xml) => {
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(xml, "text/xml");
        const fetchedArticles = Array.from(xmlDoc.querySelectorAll("item"));

        setArticles(fetchedArticles);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div id="news-container">
      {articles.map((article, index) => {
        const title = article.querySelector("title").textContent;
        const link = article.querySelector("link").textContent;
        const description = article.querySelector("description").textContent;
        const pubDate = article.querySelector("pubDate").textContent;

        let currentTime = new Date();
        let timestamp = new Date(pubDate);
        let timeDiff = currentTime - timestamp;
        let seconds = Math.floor(timeDiff / 1000);
        let minutes = Math.floor(seconds / 60);
        let hours = Math.floor(minutes / 60);
        let days = Math.floor(hours / 24);
        let timeAgo;
        if (days > 0) {
          timeAgo = days + " day" + (days > 1 ? "s" : "") + " ago";
        } else {
          timeAgo = hours + " hour" + (hours > 1 ? "s" : "") + " ago";
        }

        return (
          <div
            key={index}
            className="card"
            style={{ width: "70%" }}
            data-aos="fade-down"
          >
            <header>
              <h3>{title}</h3>
            </header>
            {/* <p dangerouslySetInnerHTML={{ __html: description }}></p> */}
            <a href={link} target="_blank" rel="noopener noreferrer">
              read more...
            </a>
            <hr />
            <p>{timeAgo}</p>
          </div>
        );
      })}
    </div>
  );
}
