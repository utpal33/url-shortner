// const shortid = require('shortid')

// const URL = require('../models/url')

// async function handleGenerateNewShortURL(req, res) {
//     const shortID = shortid()
//     const body = req.body
//     if (!body.url) return res.status(400).json({error: 'url is required'})
//     await URL.create({
//         shortId : shortID,
//         redirectURL :body.url,
//         visitHistory : [] 
//     })
//     return  res.json({id:shortID})
// }

// module.exports={
//     handleGenerateNewShortURL
// }


const shortid = require('shortid');
const URL = require('../models/url');

async function handleGenerateNewShortURL(req, res) {
    const body = req.body;

    // Validate if the URL is provided in the request body
    if (!body.url) {
        return res.status(400).json({ error: 'url is required' });
    }

    // Generate a new shortID
    const shortID = shortid();

    // Use findOneAndUpdate to ensure atomic operation
    const result = await URL.findOneAndUpdate(
        { shortID }, // Search for an existing entry with the same shortID
        { 
            shortId:shortID, 
            redirectURL: body.url, 
            visitHistory: [] 
        }, // Update or set values
        { 
            upsert: true, // Insert a new document if none exists
            new: true,    // Return the newly created or updated document
            setDefaultsOnInsert: true, // Apply schema defaults for new documents
        }
    );

    return res.json({ id: result.shortId });
}

module.exports = {
    handleGenerateNewShortURL,
};
