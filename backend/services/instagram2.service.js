const axios = require('axios');
const {ACCESS_TOKEN} = require('../configure/instagram');
const {PROFILE_ID} = require('../configure/instagram');
const {mediaCollection} = require("../configure/db");
const DbService = require('../services/db.service');
const dbService = new DbService();

class Instagram2Service {
    constructor() {
        this.fields = 'id,caption,media_type,media_url,timestamp,permalink'
        this.filter = '';
    }

    async getProfileMedia() {
        console.log('IM SERVICE ');
        const url = `https://graph.facebook.com/${PROFILE_ID}/media?access_token=${ACCESS_TOKEN}`;
        const response = await axios.get(url);
        return response;
    }

    async getMediaData(mediaId) {
        const url = `https://graph.facebook.com/${mediaId}?fields=${this.fields}&access_token=${ACCESS_TOKEN}`;
        const response = await axios.get(url);
        return response.data;
    }

    async extractMediaUrls(response) {
        const mediaObjects = [];
        if (response && response.data && response.data.length > 0) {
            for (const media of response.data) {
                try {
                    const res = await this.getMediaData(media.id);
                    if (res.media_type === 'IMAGE' || res.media_type === 'CAROUSEL_ALBUM') {
                        if (res.caption.includes(this.filter)) {
                            const mediaObject = {
                                media_id: media.id,
                                media_url: res.media_url,
                                caption: res.caption,
                                media_type: res.media_type,
                                timestamp: res.timestamp,
                                permalink: res.permalink
                            };
                            mediaObjects.push(mediaObject);
                        }
                    }
                } catch (error) {
                    console.log(error);
                }
            }
        }
        return mediaObjects;
    }

    getLatestPosts() {
        this.getProfileMedia()
            .then(async (response) => {
                // Handle the response here
                const mediaObjects = await this.extractMediaUrls(response);
                this.getAllImagesFromDb(mediaObjects)
                    .then(async r => {
                        await this.pushNewMediaToDb(r);
                    })
                    .catch((error) => {
                        console.error(error);
                    });
            })
            .catch((error) => {
                // Handle errors here
                console.error(error);
            });
    }

    async getAllImagesFromDb(media) {
        try {
            const allImages = await mediaCollection.find().toArray();
            // Specific field to compare
            const fieldToCompare = 'media_id';

            // Create a Set of values from array1 based on the specific field
            const set1 = new Set(allImages.map(item => item[fieldToCompare]));

            // Filter array2 to get non-duplicates based on the specific field
            const nonDuplicates = media.filter(item => !set1.has(item[fieldToCompare]));

            return nonDuplicates;
        } catch (error) {
            console.error("Error fetching images:", error);
        }
    }

    async pushNewMediaToDb(media) {
        for (const i of media) {
            //const result = await dbService.postOneImage(media);
        }
    }

}

module.exports = Instagram2Service;
