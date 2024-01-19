// const express = require('express')
import express from 'express';
// const puppeteer = require('puppeteer')
import puppeteer from 'puppeteer';
const app = express();
app.get('/', (req, res) => {
    (async () => {
        console.log("test")
        const browser = await puppeteer.launch({headless:"new"})
        const page = await browser.newPage()
        await page.goto('http://localhost:5173/')
        const buffer = await page.pdf({ format: 'A4' })
        res.type('application/pdf')
        res.send(buffer)
        browser.close()
    })()
})
app.listen(3001)