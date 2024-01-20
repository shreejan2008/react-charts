import express from 'express';
import puppeteer from 'puppeteer';
import cors from "cors"

const app = express();
const port = 3000;

app.use(cors());

app.get('/pdf_generate', (req, res) => {
    (async () => {
        const browser = await puppeteer.launch({headless:"new"});
        const page = await browser.newPage();
        await page.goto('http://localhost:5173/charts');
        const pdf = await page.pdf({format: 'A4'});
        res.type('application/pdf');
        res.send(pdf);
        browser.close();
    })()
});

app.listen(port, ()=>console.log(`Server listening to port: ${port}`));