
class RoverPhoto {
    constructor() {
        this.pathOfHazardCam = 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&camera=RHAZ&';
        this.pathOfChemCam = 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=3000&camera=NAVCAM&';
        this.key = 'api_key=ZBW7U1682bK809HX7tTjLc01z1UjeOtsDZUvhC8B';

    }
}

module.exports = RoverPhoto;

