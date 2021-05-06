//Classes
const Apod = require("./classes/Apod");
const Queries = require('./classes/Queries');
const RoverPhoto = require('./classes/RoverPhoto');

//Methods
const express = require('express');
const app = express();
const path = require('path');


//Middleware
app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'ejs');


//Routes
app.get('/', (req, res) => {
    res.render('index',)
})
app.get('/apod', async (req, res) => {
    //Received data from Apod Api
    let apodData;
    const apodApi = new Apod();
    const request = await new Queries(apodApi.path, apodApi.key);
    await request.sendApodReq();
    apodData = request.data;
    await res.render('apod', {apodData})

})

app.get('/rover', async (req, res, next) => {
    // Received a data from Rear Hazard Avoidance Camera
    let hazardData;
    const roverPhotoApi = new RoverPhoto();
    const hazardCamRequest = await new Queries(roverPhotoApi.pathOfHazardCam, roverPhotoApi.key);
    await hazardCamRequest.sendRoverReq();
    hazardData = hazardCamRequest.data
    const hazardCamera = {
        camera: hazardData.photos[0].camera.full_name,
        earthDate: hazardData.photos[0].earth_date,
        image: hazardData.photos[0].img_src,
        landingDate: hazardData.photos[0].rover.landing_date,
        launchDate: hazardData.photos[0].rover.launch_date,
        status: hazardData.photos[0].rover.status,
    }

    //Received a data from Chemistry and Camera Complex
    let chemData;
    const chemCamRequest = await new Queries(roverPhotoApi.pathOfChemCam, roverPhotoApi.key);
    await chemCamRequest.sendRoverReq();
    chemData = chemCamRequest.data;
    const chemCamera = {
        camera: chemData.photos[0].camera.full_name,
        earthDate: chemData.photos[0].earth_date,
        image: chemData.photos[0].img_src,
        landingDate: chemData.photos[0].rover.landing_date,
        launchDate: chemData.photos[0].rover.launch_date,
        status: chemData.photos[0].rover.status,
    }

   await res.render('roverPhoto', {hazardCamera, chemCamera})

})

app.use((req, res) => {
    res.send('PAGE NOT FOUND')
})

app.listen(3000, () => {
    console.log('LISTENING ON 3000')
})