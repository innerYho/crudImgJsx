// https://es.stackoverflow.com/questions/200177/introducir-variable-en-expresiones-regulares

import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import moment from "moment";

// import { isProduction } from './config'

let urlServer = "http://localhost:9369"
//parametros

// value= valor a validar
// expresionesRegulares= [array de expresiones regulares]
// messages= [array de mensajes que quiere imprimir]. Para tener en cuenta que debe coincidir la posición con el array de expresiones

// parametros
// img: objeto de imagen
// camp: Campaña. Ej: tyt
// subCamp: Subcampaña. Ej: financiado
const getUrlImage = async (
  img,
  camp,
  subCamp
) => {
  try {
    if (!img) {
      return '';
    } else {
      const formData = new FormData();
      formData.append("img", img);
      let res = await axios.post(`${urlServer}/upload/uploadSingleFile/${camp}/${subCamp}`,
        formData
      );
      let { url } = res.data;
      // console.log(url)
      return url
    }
  } catch (err) {
    console.log(err)
  }

}

// parametros
// img: objeto de imagen
const removeImage = async (
  img
) => {
  try {
    if (!img) {
      return '';
    } else {
      let { data } = await axios.post(`${urlServer}/upload/deleteSingleFile/${img}`);
      let { msg } = await data
      return msg
    }
  } catch (err) {
    console.log(err)
  }

}

//img del forma que actualiza el usuario,
//img que hay en la base de datos
//campana: en caso de que haya que subir la imagen
//subcampana: en caso de que haya que subir la imagen
const updateImage = async (img, imgOriginal, campana, subcampana) => {
  let url = '';
  if (img != imgOriginal) {
    if (imgOriginal) {
      console.log('imgOriginal true, remove')
      let msg = await removeImage(imgOriginal);
    }
    if (img) {
      console.log('img true, add')
      url = await getUrlImage(img, campana, subcampana);
    }
  } else {
    console.log('imgOriginal false')
    url = imgOriginal;
  }

  return url;
}

const heightStyle = {
  height: "150px"
}

const heightTable = "150px"

const mostrarFecha = (date) => {
  return moment(date).format("YYYY-MM-DD");
};

const mostrarFechaHora = (date) => {
  return moment(date).format("YYYY-MM-DD HH:mm:ss");
};

// * table: nombre de la tabla en la base de datos
// * nameCampInDatabase: nombre del campo en la base de datos
// * valueParameter: valor a consultar
// set: variable modificadora donde guardará el resultado
// * isArray: enviar true si quiere guardar el resultado en una coleccion [] enviar  true. si quiere guardar en un objeto {} enviar false
// actionPostTrue: function a ejecutar si trae resultados
// actionPostFalse: function a ejecutar si no trae resultados
const searchBy = async (
  table,
  nameCampInDatabase,
  valueParameter,
  set,
  isArray,
  actionPostTrue,
  actionPostFalse
) => {
  try {
    var res = await axios.get(
      `${urlServer}/server/searchBy/${table}/${nameCampInDatabase}/${valueParameter}`
    );
    const { rows, msg, err } = res.data;
    if (rows.length == 0) {
      Swal.fire(msg);
      if (set) { set(isArray ? [] : {}) }
      if (actionPostFalse) { actionPostFalse() }
    } else {
      if (set) { set(isArray ? rows : rows[0]) }
      if (actionPostTrue) { actionPostTrue() };
    }
    return isArray ? rows : rows[0];
  } catch (err) {
    console.error(err);
  }
};

// const mulitpleFileOptions = {
//   onUploadProgress: (progressEvent) => {
//       const {loaded, total} = progressEvent;
//       const percentage = Math.floor(((loaded / 1000) * 100) / (total / 1000));
//       setMultipleProgress(percentage);
//   }
// }

//parametros
//tabla: para saber cual tabla afectará
//nameFecha: nombre del campo fecha en la base de datos
//fechaIni: Fecha Inicial a consultar
//fechaFin: Fecha Final a consultar
//isAdicional1: Enviar 1 si va a tener en cuenta, de lo contrario 0.
//nameAdicional1: nombre del campo a consultar en la base de datos. Si no enviar 0. /${0}
//type1: corresponde al operador que quiere  comparar ej (>, <, =, LIKE, etc)
//valueAdicional1: valor del campo a consultar ej(123). Si no enviar 0
//isAdicional2: Enviar 1 si va a tener en cuenta, de lo contrario 0.
//nameAdicional2: nombre del campo a consultar en la base de datos. Si no enviar 0. /${0}
//type2: corresponde al operador que quiere  comparar ej (>, <, =, LIKE, etc)
//valueAdicional2: valor del campo a consultar ej(123). Si no enviar 0
//isAdicional3: Enviar 1 si va a tener en cuenta, de lo contrario 0.
//nameAdicional3: nombre del campo a consultar en la base de datos. Si no enviar 0. /${0}
//type3: corresponde al operador que quiere  comparar ej (>, <, =, LIKE, etc)
//valueAdicional3: valor del campo a consultar ej(123). Si no enviar 0
//isAdicional4: Enviar 1 si va a tener en cuenta, de lo contrario 0.
//nameAdicional4: nombre del campo a consultar en la base de datos. Si no enviar 0. /${0}
//type4: corresponde al operador que quiere  comparar ej (>, <, =, LIKE, etc)
//valueAdicional4: valor del campo a consultar ej(123). Si no enviar 0
const searchByDate = async (
  tabla,
  nameFecha,
  fechaIni,
  fechaFin,
  adicional1,
  nameAdicional1,
  type1,
  valueAdicional1,
  adicional2,
  nameAdicional2,
  type2,
  valueAdicional2,
  adicional3,
  nameAdicional3,
  type3,
  valueAdicional3,
  adicional4,
  nameAdicional4,
  type4,
  valueAdicional4,
  headers,
) => {
  try {

    // Swal.fire({
    //   title: '...',
    //   html: 'Espere mientras se cargan los datos...',
    //   timerProgressBar: false,
    //   didOpen: () => {
    //     Swal.showLoading()
    //   },
    // })
    let res = await axios.get(
      `${urlServer}/server/searchByDate/${tabla}/${nameFecha}/${fechaIni}/${fechaFin}/${adicional1}/${nameAdicional1}/${type1}/${valueAdicional1}/${adicional2}/${nameAdicional2}/${type2}/${valueAdicional2}/${adicional3}/${nameAdicional3}/${type3}/${valueAdicional3}/${adicional4}/${nameAdicional4}/${type4}/${valueAdicional4}`,
      {},
      headers ? headers : {}
    )
    return res
  } catch (err) {
    console.log(`Ocurrio un error al realizar searchByDate en la api: ${err}`)
  }
}

//sql: sql a consultar datos.
const getData = async (
  sql
) => {
  try {
    let { data } = await axios.get(`${urlServer}/server/getData/${sql}`)
    return data
  } catch (err) {
    console.log(`Ocurrió un error al consultar getData ${err}`)
  }
}

// actionServer: create - update
// table: nombre de la tabla en la base de datos
// form: objeto de datos a almacenar o actualizar
// name: Al editar el nombre del campo en la base de datos
// value: Al editar el vale en la base de datos
const sendPost = async (
  actionServer,
  table,
  form,
  name,
  value,
  headers
) => {
  try {
    return actionServer === 'create'
      ? await axios.post(`${urlServer}/server/${actionServer}/${table}`, form, headers)
      : await axios.put(`${urlServer}/server/${actionServer}/${table}/${name}/${value}`, form, headers)
  } catch (err) {
    console.log(`Ocurrio un error al realizar el post en la api: ${err}`)
  }
}

let styleError = {
  fontWeight: "bold",
  color: "#dc3545",
};

let styleImage = {
  height: '10em',
  width: 'auto '
}




export default {
  urlServer,
  heightTable,
  heightStyle,
  searchBy,
  mostrarFecha,
  mostrarFechaHora,
  expresiones,
  getUrlImage,
  removeImage,
  updateImage,
  styleError,
  styleImage,
  sendPost,
  searchByDate,
  validateErr,
  validateNumTelCel,
  getData
};
