"use client";
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const NewsFeed = () => {
  const [sources, setSources] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get(
          `https://newsdata.io/api/1/sources?apikey=${process.env.NEXT_PUBLIC_NEWS_API_KEY}&category=${process.env.NEXT_PUBLIC_NEWS_CATEGORY}&language=${process.env.NEXT_PUBLIC_NEWS_LANGUAGE}`
        );
        // Limit the number of results to 10
        const limitedSources = response.data.results.slice(0, 10);
        setSources(limitedSources); 
      } catch (error) {
        console.error('Error fetching news data:', error);
      }
    };

    fetchNews();
  }, []);

  return (
    <div className="px-4 py-8 bg-gray-100 m-40">
      <h1 className="text-4xl font-bold text-center mb-8">Explore Latest Tech News</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {sources.map((source, index) => (
          <div key={index} className="bg-white shadow-md rounded-lg overflow-hidden p-4">
            <h2 className="text-xl font-semibold mb-2">{source.name}</h2>
            <p className="text-gray-600 mb-4">{source.description}</p>
            <a
              href={source.url}
              className="text-blue-500 underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit Website
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsFeed;
