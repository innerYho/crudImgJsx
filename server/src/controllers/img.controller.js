const path = require('path')
var fs = require('fs');


const singleFileUpload = (req, res) => {
  if (!req.file) {
    console.log("Debe Seleccionar una imagen");
    res.json({ err: 'Debe Seleccionar una imagen' })
  } else {
    console.log(req.file.filename)
    // var imgsrc = 'http://localhost:9000/tyt/finan/img/' + req.file.filename
    let url = req.file.filename
    res.json({ msg: 'Image Upload', url: url })
  }
}

const deleteSingleFile = (req, res) => {
  let { nameFile } = req.params
  var filePath = path.join('../public/imgVentas/') + nameFile;
  console.log(filePath)
  console.log('img delete')
  fs.unlinkSync(filePath);
  res.json({ msg: 'Image delete' })
}

const multipleFileUpload = (req, res) => {
  console.log('se cargaron las imágenes:')
  req.files.forEach(element => {
    console.log(element.originalname)
    console.log(element.path)
    console.log(element.mimetype)
  });
  console.log('--------------------')
}

module.exports = {
  singleFileUpload,
  deleteSingleFile,
  multipleFileUpload
}