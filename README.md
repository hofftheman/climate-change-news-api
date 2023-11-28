# Climate News Scraper API

This API scrapes news articles related to 'climate' from a list of websites and returns them as a JSON response.

## Modules Used

- **Express**: This is a web application framework for Node.js, designed for building web applications and APIs. In this project, it's used to create the web server and define the route for getting news.

- **Axios**: This is a promise-based HTTP client for the browser and Node.js. It's used in this project to fetch the web pages from the list of websites.

- **Cheerio**: This is a fast, flexible, and lean implementation of core jQuery designed specifically for the server. It's used in this project to parse the HTML of the web pages and find the 'a' tags.

- **url**: This is a built-in Node.js module for URL resolution and parsing. It's used in this project to resolve the href attribute of the 'a' tags into a complete URL.

## API Endpoint

- **GET /news**: This endpoint returns a JSON response containing an array of news articles. Each article includes a title and a URL.

## How to Run

1. Install Node.js and npm.
2. Clone this repository.
3. Run `npm install` to install the required modules.
4. Run `node app.js` to start the server.
5. Visit `http://localhost:8000/news` in your browser to get the news articles.

## Error Handling

If there's an error while fetching a web page or parsing its HTML, the error will be logged to the console, but it won't stop the server or affect the other websites.
