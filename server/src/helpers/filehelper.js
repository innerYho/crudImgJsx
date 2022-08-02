'use strict';
const multer = require('multer');


// parametros
// camp: Campaña. Ej: tyt
// subCamp: Subcampaña. Ej: financiado
// routeSave: ruta en donde se va a guardar el archvo. Ej: ./public/imgVentas

var storage = multer.diskStorage({
    destination: (req, file, callBack) => {
        let { routeSave } = req.params
        callBack(null, './public/imgVentas')     // './public/images/' directory name where save the file
        // callBack(null, routeSave)     // './public/images/' directory name where save the file
    },
    filename: (req, file, callBack) => {
        let { camp, subCamp } = req.params;
        callBack(null, `${camp}-${subCamp}-${file.fieldname}-${new Date().toISOString().replace(/:/g, '-')}-${file.originalname}`);
    }
})

const upload = multer({ storage: storage });

module.exports = { upload }