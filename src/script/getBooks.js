const fs = require('fs');

const files = fs.readdirSync('../../public/assets/EPUBS');
const path = '../../public/assets/EPUBS';
const image = '../public/assets/EPUBS/images.jpg'

const filesDetails = files
.filter(file => file.includes('.epub'))
.reduce((accumulator, file) => [
    ...accumulator,
    {
        title: file,
        path: `${path}${file}`,
        imageUrl: image
    }
], []);

const addPath = `${__dirname}/listOfBooks.json`;
fs.writeFile(addPath, JSON.stringify(filesDetails), (err) => {
    if (err) {
        console.log('err',err);
    } else {
       console.log(filesDetails,'Success');
    }
});