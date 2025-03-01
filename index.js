import { extract } from '@extractus/article-extractor'
import express from 'express'

var port = 8354

var app = express()

app.get("/api/article/", async (req, res) => {
    article = await extract(req.query.a)
    res.json(article)
})

app.listen(port, () => {
    console.log("running on " + port)
})