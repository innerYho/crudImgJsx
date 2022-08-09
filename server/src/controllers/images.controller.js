//version Sebas
const uploadFile = async (req, res) => {
  if (!req.files) {
    console.log("Debe Seleccionar una imagen");
    res.json({ err: "Debe Seleccionar una imagen" });
  } else {
    let nameImages = [];
    nameImages.push(req.files["image1"][0].filename);
    nameImages.push(req.files["image2"][0].filename);

    console.log(nameImages);

    res.json({ msg: "Image Upload", rows: nameImages });
  }
};

module.exports = { uploadFile };
