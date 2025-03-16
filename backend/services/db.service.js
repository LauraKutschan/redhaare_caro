const { mediaCollection, client} = require('../configure/db')
class DbService {
    constructor() {}

    /**
     * Retrieves all images from the database.
     * @returns {Promise<Array>} Array of images.
     */
    async getAllImages() {
        try {
            const result = await mediaCollection.find().toArray();
            return result;
        } catch (error) {
            throw new Error(`Error fetching images: ${error.message}`);
        }
    }

    /**
     * Inserts a single image into the database.
     * @param {object} media The media object to insert.
     * @returns {Promise<object>} The result of the insertion operation.
     */
    async postOneImage(media) {
        try {
            const result = await mediaCollection.insertOne(media);
            return result;
        } catch (error) {
            throw new Error(`Error inserting image: ${error.message}`);
        }
    }
}

module.exports = DbService;
