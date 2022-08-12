import axios from "axios";
import { useState, useEffect } from "react";
import Swal from "sweetalert2";
// import Cookies from "universal-cookie";
// import { url } from "../../../data/url";
// import CargueImagenes from "./general/CargueImagenes";
// import elementos from "../../elementos/tytFinanciado";
import { ImagePaste } from "./general/ImagePaste";
import { useNavigate } from "react-router-dom";
import { FaWpforms } from "react-icons/fa";

export default function FormularioNewnet({ id, data, setData }) {
  // const cookie = new Cookies();
  const navigate = useNavigate();
  const url = "http://localhost:9369"
  const images = [];

  // const [usuario] = useState(cookie.get("usuario"));
  const [nom_cli, setNom_cli] = useState("");

  const [val_identidad, setVal_identidad] = useState("");
  const [poliedro, setPoliedro] = useState("");

  // almacena el valor de getUrlImage()
  const [val_identidad_ruta, setVal_identidad_ruta] = useState("");
  const [poliedro_ruta, setPoliedro_ruta] = useState("");


  const [image1, setImage1] = useState("");
  const [image2, setImage2] = useState("");
  const [form, setForm] = useState({
    tc_val_identidad: '',
    tc_poliedro: ''
  });


  // const dato = new Date();
  // const date = dato.toISOString().split("T")[0];
  // const hour = dato.toLocaleTimeString();

  const current = new Date();
  const date = `${current.getFullYear() < 10
    ? "0" + current.getFullYear()
    : current.getFullYear()
    }-${current.getMonth() + 1 < 10
      ? "0" + (current.getMonth() + 1)
      : current.getMonth() + 1
    }-${current.getDate() < 10 ? "0" + current.getDate() : current.getDate()}`;
  const hour = `${current.getHours() < 10 ? "0" + current.getHours() : current.getHours()
    }:${current.getMinutes() < 10
      ? "0" + current.getMinutes()
      : current.getMinutes()
    }:${current.getSeconds() < 10
      ? "0" + current.getSeconds()
      : current.getSeconds()
    }`;

  const upload = async () => {
    const formdata = new FormData();
    formdata.append("image1", image1);
    formdata.append("image2", image2);
    // formdata.append("image3", image3);
    // formdata.append("image4", image4);
    // formdata.append("image5", image5);
    // formdata.append("image6", image6);
    // formdata.append("image7", image7);
    // formdata.append("image8", image8);

    try {
      let campana = "tyt";
      let metodo = "financiado";
      let res = await axios.post(
        `${url}/images/${campana}/${metodo}`,
        formdata
      );
      let { rows } = res.data;
      images.push(rows[0]);
      images.push(rows[1]);
      // images.push(rows[2]);
      // images.push(rows[3]);
      // images.push(rows[4]);
      // images.push(rows[5]);
      // images.push(rows[6]);
      // images.push(rows[7]);
    } catch (error) {
      console.log(error);
    }
  };

  const submit = async (e) => {
    if (id) {
      actionPrevUpdate(e)
      submitEditar(e)
    } else {
      actionPrevCreate(e)
      submitGuardar(e)

    }
  }

  const actionPrevCreate = async (e) => {
    // console.log(e.target.value)
    console.log('actionPrevCreate')

    console.log(val_identidad_ruta)

    setVal_identidad_ruta(await getUrlImage(val_identidad, 'tyt', 'contado')),
      setPoliedro_ruta(await getUrlImage(poliedro, 'tyt', 'contado'))
  };
  const actionPrevUpdate = async () => {
    setVal_identidad(await getUrlImage(val_identidad, 'tyt', 'contado')),
      setPoliedro(await getUrlImage(poliedro, 'tyt', 'contado'))
  };


  const submitGuardar = async (e) => {
    try {
      e.preventDefault();
      // console.log('submitGuardar')

      // await upload();
      // await ();

      const tabla = "tyt_finan";
      let res = await axios.post(`${url}/createGeneral/${tabla}`, {
        color: "Gris",
        fecha_r: date,
        nom_cli: nom_cli,
        val_identidad: val_identidad_ruta,
        poliedro: poliedro_ruta,

      });
      Swal.fire(res.data.err ? res.data.err : res.data.msg);
      // navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const validate = (parameter) => {
    if (parameter) {
      search();
    }
  };

  useEffect(() => {
    validate(id);
  }, []);

  const search = async () => {
    const tablaSearch = "tyt_finan";
    let campo = "id";
    try {
      let res = await axios.get(`${url}/search/${tablaSearch}/${campo}/${id}`);
      if (res.data.rows.length === 0) {
        setData([]);
      } else {
        setData(res.data.rows);
        console.log(res.data.rows);
      }
    } catch (error) {
      console.log(error);
    }
  };

  // Renderiza los datos en el formulario
  useEffect(() => {
    data.length > 0 ? datosFinanciado(data[0]) : clear();
  }, [data]);

  const datosFinanciado = (f) => {
    setNom_cli(f.nom_cli);
    setVal_identidad(f.val_identidad);
    setPoliedro(f.poliedro);
  };

  const clear = () => {
    setNom_cli("");
    setVal_identidad("");
    setPoliedro("");

  };

  const submitEditar = async () => {
    try {
      await upload();

      const tabla = "tyt_finan";
      const campo = "id";
      let res = await axios.put(`${url}/update/${tabla}/${campo}/${id}`, {
        color: "Gris",
        fecha_r: date,
        nom_cli: nom_cli,
        val_identidad: images[0],
        poliedro: images[1],
      });
      Swal.fire(res.data.err ? res.data.err : res.data.msg);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

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
      console.log('getUrlImage')
      console.log(img)
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
  return (
    <>
      <a
        href={"http://localhost:3000/"}
        // target="_blank"
        rel="noreferrer"
        as="li"
        className={`flex rounded-md px-3 py-3 cursor-pointer hover:bg-primary-focus active:bg-primary-focus duration-200 gap-x-4 mt-2`}
      ><FaWpforms />Home</a>

      <form onSubmit={submit} className="p-4 rounded-md shadow-xl">
        <h2 className="text-2xl">{id ? "" : "No id"}</h2>
        <div className="divider" />
        <div className="grid grid-cols-8 gap-6">
          {id && (
            <div className="col-span-1 flex justify-evenly">
              <label className="label w-10">ID {id}</label>
            </div>
          )}
          <div className="col-span-2 col-start-1">
            <label className="label text-sm">
              Nombre y apellido del cliente
            </label>
            <input
              type="text"
              className="input input-bordered w-full"
              value={nom_cli}
              onChange={(e) => setNom_cli(e.target.value)}
              required
            />
          </div>

          <div className="divider col-span-8" />
          <h2 className="text-center text-2xl font-semibold col-span-8">
            Insertar imagenes
          </h2>
          <div className="col-span-2">
            {/* <CargueImagenes
              ide={id}
              id="fileInput"
              body="val_identidad"
              value={val_identidad}
              label="Validación identidad"
              image={image1}
              setImage={setImage1}
              // required={"true"}
              route={`${url}`}
            />
          </div>
          <div className="col-span-2">
            <CargueImagenes
              ide={id}
              id="fileInput"
              body="poliedro"
              value={poliedro}
              label="Poliedro"
              image={image2}
              setImage={setImage2}
              // required={"true"}
              route={`${url}`}
            /> */}
            <ImagePaste
              label="Validación de Identidad"
              id="tc_val_identidad"
              name="tc_val_identidad"
              value={val_identidad}
              form={form}
              setForm={setForm}
              classNameInput="form-control col-8"
              classNameDiv="form-group col-md-4"
              route={`${urlServer}/imgVentas`}
            />
          </div>

        </div>
        <div className="grid grid-cols-1 mt-4">
          {id ? null : (
            <button type="submit" className="btn btn-outline btn-accent">
              Registrar Datos
            </button>
          )}
        </div>
      </form>
      {id && (
        <div className="grid grid-cols-1 mt-4">
          <button
            type="submit"
            className="btn btn-outline btn-secondary"
            onClick={editFinanciado}
          >
            Actualizar Datos
          </button>
        </div>
      )}
    </>
  );
}


// CREATE TABLE `tyt_finan` (
//   `id` int(11) NOT NULL PRIMARY KEY auto_increment,
//   `color` varchar(10) NOT NULL,
//   `fecha_r` date NOT NULL,
//   `nom_cli` varchar(50) NOT NULL,
//   `val_identidad` varchar(200) NULL,
//   `poliedro` varchar(200) NULL)
// ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;