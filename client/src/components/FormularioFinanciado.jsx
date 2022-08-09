import axios from "axios";
import { useState, useEffect } from "react";
import Swal from "sweetalert2";
// import Cookies from "universal-cookie";
// import { url } from "../../../data/url";
import CargueImagenes from "./general/CargueImagenes";
// import elementos from "../../elementos/tytFinanciado";
import { useNavigate } from "react-router-dom";
import { FaWpforms } from "react-icons/fa";

export default function FormularioFinanciado({ id, data, setData }) {
  // const cookie = new Cookies();
  const navigate = useNavigate();
  const url = "http://localhost:9369"
  const images = [];

  // const [usuario] = useState(cookie.get("usuario"));
  const [nom_cli, setNom_cli] = useState("");
  // const [id_num_cli, setId_num_cli] = useState("");
  // const [nom_ter, setNom_ter] = useState("");
  // const [id_num_ter, setId_num_ter] = useState("");
  // const [direccion_e, setDereccion_e] = useState("");
  // const [direccion_c, setDireccion_c] = useState("");
  // const [barrio, setBarrio] = useState("");
  // const [departamento, setDepartamento] = useState("");
  // const [ciudad, setCiudad] = useState("");
  // const [cel_uno, setCel_uno] = useState("");
  // const [cel_dos, setCel_dos] = useState("");
  // const [num_grabacion, setNum_grabacion] = useState("");
  // const [num_fono, setNum_fono] = useState("");
  // const [tipo_val_identidad, setTipo_val_identidad] = useState("");
  // const [tipo_venta, setTipo_venta] = useState("");
  // const [facturacion, setFacturacion] = useState("");
  // const [num_factura, setNum_factura] = useState("");
  // const [equipo_vendido, setEquipo_vendido] = useState("");
  // const [id_material, setId_material] = useState("");
  // const [cantidad_stock, setCantidad_stock] = useState("");
  // const [total_con_iva, setTotal_con_iva] = useState("");
  // const [total_sin_iva, setTotal_sin_iva] = useState("");
  // const [cuota_mes, setCuota_mes] = useState("");
  // const [valor_cuota_ini, setValor_cuota_ini] = useState("");
  // const [num_cuotas, setNum_cuotas] = useState("");
  // const [seguro, setSeguro] = useState("");
  // const [tipo_entrega, setTipo_entrega] = useState("");
  // const [obs_age, setObs_age] = useState("");
  // const [ediciones_agente, setEdiciones_agentes] = useState("");
  const [val_identidad, setVal_identidad] = useState("");
  const [poliedro, setPoliedro] = useState("");
  // const [inventario, setInventario] = useState("");
  // const [ac, setAc] = useState("");
  // const [tickler, setTickler] = useState("");
  // const [soporte_incidencias, setSoporte_incidencias] = useState("");
  // const [soporte_incidencias2, setSoporte_incidencias2] = useState("");
  // const [soporte_incidencias3, setSoporte_incidencias3] = useState("");
  const [image1, setImage1] = useState("");
  const [image2, setImage2] = useState("");
  // const [image3, setImage3] = useState("");
  // const [image4, setImage4] = useState("");
  // const [image5, setImage5] = useState("");
  // const [image6, setImage6] = useState("");
  // const [image7, setImage7] = useState("");
  // const [image8, setImage8] = useState("");

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

  const submitFinanciado = async (e) => {
    try {
      e.preventDefault();

      await upload();

      const tabla = "tyt_finan";
      let res = await axios.post(`${url}/createGeneral/${tabla}`, {
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

  const editFinanciado = async () => {
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

  return (
    <>
      <a
        href={"http://localhost:3000/"}
        // target="_blank"
        rel="noreferrer"
        as="li"
        className={`flex rounded-md px-3 py-3 cursor-pointer hover:bg-primary-focus active:bg-primary-focus duration-200 gap-x-4 mt-2`}
      ><FaWpforms />Home</a>

      <form onSubmit={submitFinanciado} className="p-4 rounded-md shadow-xl">
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
            <CargueImagenes
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