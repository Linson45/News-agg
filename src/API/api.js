

export const categories = [
  {
    code: "",
    pic: "https://img.icons8.com/fluent/96/000000/news.png",
    name: "general",
  },
  {
    code: "",
    pic: "https://img.icons8.com/fluent/96/000000/hard-working.png",
    name: "business",
  },
  {
    code: "",
    pic: "https://img.icons8.com/fluent/96/000000/movie-projector.png",
    name: "entertainment",
  },
  {
    pic: "https://img.icons8.com/fluent/96/000000/stethoscope.png",
    name: "health",
  },
  {
    pic: "https://img.icons8.com/fluent/96/000000/microscope.png",
    name: "science",
  },
  {
    pic: "https://img.icons8.com/fluent/96/000000/trophy.png",
    name: "sports",
  },
  {
    pic: "https://img.icons8.com/fluent/96/000000/artificial-intelligence.png",
    name: "technology",
  },
];

export const country = [
  {
    code: "in",
    name: "India",
  },
  {
    code: "us",
    name: "USA",
  },
  {
    code: "au",
    name: "Australia",
  },
  {
    code: "ru",
    name: "Russia",
  },
  {
    code: "fr",
    name: "France",
  },
  {
    code: "gb",
    name: "United Kingdom",
  },
];

export const sources = [
  {
    id: "bbc-news",
    name: "BBC News",
    pic: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/BBC_News_2019.svg/1200px-BBC_News_2019.svg.png",
    url: "https://newsapi.org/v2/top-headlines?sources=bbc-news"
  },
  {
    id: "cnn",
    name: "CNN",
    pic: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/CNN_International_logo.svg/600px-CNN_International_logo.svg.png",
    url: "https://newsapi.org/v2/top-headlines?sources=cnn"
  },
  {
    id: "fox-news",
    name: "Fox News",
    pic: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Fox_News_Channel_logo.svg/768px-Fox_News_Channel_logo.svg.png",
    url: "https://newsapi.org/v2/top-headlines?sources=fox-news"
  },
  {
    id: "google-news",
    name: "Google News",
    pic: "https://upload.wikimedia.org/wikipedia/commons/0/0b/Google_News_icon.png",
    url: "https://newsapi.org/v2/top-headlines?sources=google-news"
  },
];

// You'll need to sign up for an API key at https://newsapi.org/
const API_KEY = 'ee99fd991812442592c1d297ce2e00c0';

export const getSourceAPI = (sourceId) => {
  const source = sources.find(s => s.id === sourceId);
  if (source) {
    return `${source.url}&apiKey=${API_KEY}`;
  }
  return null;
};

// For categories and countries, you can still use the NewsAPI
export const getNewsAPI = (category, country = "in") => {
  return `https://newsapi.org/v2/top-headlines?category=${category}&country=${country}&apiKey=${API_KEY}`;
};
