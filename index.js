const express = require('express');
const axios = require('axios');
const cheerio = require('cheerio');

const app = express();
const port = 8000;

const websites = [
    'https://www.theguardian.com/international',
    'https://www.bbc.com/',
    'https://edition.cnn.com/'
];

app.get('/news', async (req, res) => {
    const news = [];

    for (let website of websites) {
        try {
            const response = await axios.get(website);
            const $ = cheerio.load(response.data);

            $('a').each((index, element) => {
                const title = $(element).text();
                const url = $(element).attr('href');

                if (title.toLowerCase().includes('climate')) {
                    news.push({
                        title,
                        url,
                        newspaperName: website
                    });
                }
            });
        } catch (error) {
            console.error(`Error fetching news from ${website}: ${error.message}`);
        }
    }

    res.json(news);
});

app.listen(port, () => console.log(`Server running on port ${port}`));