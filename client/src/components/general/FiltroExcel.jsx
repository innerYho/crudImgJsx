import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
// import DescargaExcelHTML from "./DescargaExcelHTML";
import ReactHtmlTableToExcel from 'react-html-table-to-excel';
import Swal from "sweetalert2";
import axios from "axios";
// import { url } from "../../data/url";
// import Cookies from "universal-cookie";
import { FaFileExcel, FaEdit } from "react-icons/fa";

export default function FiltroExcel({
  date,
  setDate,
  setTable,
  tabla,
  nameUno, //filtroFch
  nameDos = 0, // filtroCiudad
  nameTres = 0, //estado
  estados = 0,
  nameCuatro = 0, // filtro campana
  campana = 0,
  nameCinco = 0,
  nomExcel,
  tablaID,
  tablaSearch,
  documento,
}) {
  // const cookie = new Cookies();

  const url = "http://localhost:9369"

  const current = new Date();
  const dateNow = `${current.getFullYear() < 10
    ? "0" + current.getFullYear()
    : current.getFullYear()
    }-${current.getMonth() + 1 < 10
      ? "0" + (current.getMonth() + 1)
      : current.getMonth() + 1
    }-${current.getDate() < 10 ? "0" + current.getDate() : current.getDate()}`;

  // const [usuario] = useState(cookie.get("usuario"));
  const [fechaIni, setFechaIni] = useState(dateNow);
  const [fechaFin, setFechaFin] = useState(dateNow);
  // const [fechaFin, setFechaFin] = useState("");
  const [seleccion, setSeleccion] = useState(nameDos === '0' ? 0 : 0);
  const [estado, setEstado] = useState("");
  const [camp, setCamp] = useState("");
  const [numDoc, setNumDoc] = useState("");

  // if (nameDos === 0) {
  //   setSeleccion(0)
  // }
  let nameTresV = 0
  let nameCuatroV = 0
  let nameCincoV = 0
  let estadoV = 0
  let campanaV = 0
  let idUser = 0
  // let nameTresV =
  //   usuario.gen_rol_fk === 2006 ||
  //     usuario.gen_rol_fk === 2007 ||
  //     usuario.gen_rol_fk === 2008 ||
  //     usuario.gen_rol_fk === 2009
  //     ? nameTres
  //     : 0;

  // let nameCuatroV =
  //   usuario.gen_rol_fk === 2006 ||
  //     usuario.gen_rol_fk === 2007 ||
  //     usuario.gen_rol_fk === 2008 ||
  //     usuario.gen_rol_fk === 2009
  //     ? nameCuatro
  //     : 0;

  // let nameCincoV =
  //   usuario.gen_rol_fk === 2003 ||
  //     usuario.gen_rol_fk === 2004 ||
  //     usuario.gen_rol_fk === 2005 ||
  //     usuario.gen_rol_fk === 2006 ||
  //     usuario.gen_rol_fk === 2007 ||
  //     usuario.gen_rol_fk === 2008 ||
  //     usuario.gen_rol_fk === 2009 ||
  //     usuario.gen_rol_fk === 2100 ||
  //     usuario.gen_rol_fk === 3000 ||
  //     usuario.gen_rol_fk === 3001 ||
  //     usuario.gen_rol_fk === 3002 ||
  //     usuario.gen_rol_fk === 3003 ||
  //     usuario.gen_rol_fk === 3004 ||
  //     usuario.gen_rol_fk === 3005 ||
  //     usuario.gen_rol_fk === 3006 ||
  //     usuario.gen_rol_fk === 3010
  //     ? 0
  //     : nameCinco;

  // let estadoV =
  //   usuario.gen_rol_fk === 2006 ||
  //     usuario.gen_rol_fk === 2007 ||
  //     usuario.gen_rol_fk === 2008 ||
  //     usuario.gen_rol_fk === 2009
  //     ? estado
  //     : estados;

  // let campanaV =
  //   usuario.gen_rol_fk === 2006 ||
  //     usuario.gen_rol_fk === 2007 ||
  //     usuario.gen_rol_fk === 2008 ||
  //     usuario.gen_rol_fk === 2009
  //     ? camp
  //     : campana;

  // let idUser =
  //   usuario.gen_rol_fk === 2003 ||
  //     usuario.gen_rol_fk === 2004 ||
  //     usuario.gen_rol_fk === 2005 ||
  //     usuario.gen_rol_fk === 2006 ||
  //     usuario.gen_rol_fk === 2007 ||
  //     usuario.gen_rol_fk === 2008 ||
  //     usuario.gen_rol_fk === 2009 ||
  //     usuario.gen_rol_fk === 2100 ||
  //     usuario.gen_rol_fk === 2106 ||
  //     usuario.gen_rol_fk === 2107 ||
  //     usuario.gen_rol_fk === 3000 ||
  //     usuario.gen_rol_fk === 3001 ||
  //     usuario.gen_rol_fk === 3002 ||
  //     usuario.gen_rol_fk === 3003 ||
  //     usuario.gen_rol_fk === 3004 ||
  //     usuario.gen_rol_fk === 3005 ||
  //     usuario.gen_rol_fk === 3006 ||
  //     usuario.gen_rol_fk === 3010
  //     ? 0
  //     : usuario.gen_nac === "Colombia"
  //       ? usuario.gen_user
  //       : usuario.gen_pas;

  const searchAll = async () => {
    try {
      let res = await axios.get(
        // `${url}/searchAll/${tabla}/${nameUno}/'${fechaIni}'/'${fechaFin}'/${nameDos}/'${seleccion}'/${nameTresV}/${estadoV}/${nameCuatroV}/${campanaV}/${nameCincoV}/${idUser}`
        `${url}/searchAll/${tabla}/${nameUno}/'${fechaIni}'/'${fechaFin}'/0/0/${nameTresV}/${estadoV}/${nameCuatroV}/${campanaV}/${nameCincoV}/${idUser}`
      );
      Swal.fire(res.data.err ? res.data.err : res.data.msg);
      if (res.data.rows.length === 0) {
        setDate([]);
        setTable(false);
      } else {
        setDate(res.data.rows);
        setTable(true);
        // clear();
      }
    } catch (error) {
      console.log(error);
    }
  };

  const search = async () => {
    try {
      let res = await axios.get(
        `${url}/search/${tablaSearch}/${documento}/${numDoc}`
      );
      Swal.fire(res.data.err ? res.data.err : res.data.msg);
      if (res.data.rows.length === 0) {
        setDate([]);
        setTable(false);
      } else {
        setDate(res.data.rows);
        setTable(true);
        // clear();
      }
    } catch (error) {
      console.log(error);
    }
  };

  const clear = () => {
    setFechaIni("");
    setFechaFin("");
    setSeleccion("");
    setNumDoc("");
    setEstado("");
    setCamp("");
  };

  return (
    <>
      <div className="grid grid-cols-8 gap-x-6 gap-y-4 rounded-md shadow-xl p-4">
        <div className="col-span-8">
          <div className="divider mb-0" />
        </div>
        {/* {usuario.gen_rol_fk === 2002 ||
          usuario.gen_rol_fk === 2005 ||
          usuario.gen_rol_fk === 2008 ||
          usuario.gen_rol_fk === 3000 ||
          usuario.gen_rol_fk === 3003 ||
          usuario.gen_rol_fk === 3006 ? (
          <>
            <div className="col-span-1">
              <label className="label text-sm">Ciudad</label>
              <select
                className="select select-bordered w-full"
                value={seleccion}
                onChange={(e) => {
                  setSeleccion(e.target.value);
                  setTable(false);
                }}
              >
                <option disabled value="">
                  Seleccione
                </option>
                <option value="'Bogota'">Bogotá</option>
                <option value="'Barranquilla'">Barranquilla</option>
                <option value="'Bogota','Barranquilla'">Todas</option>
              </select>
            </div>
          </>
        ) : usuario.gen_rol_fk === 2000 ||
          usuario.gen_rol_fk === 2003 ||
          usuario.gen_rol_fk === 2006 ||
          usuario.gen_rol_fk === 3001 ||
          usuario.gen_rol_fk === 3004 ? (
          <>
            <div className="col-span-1">
              <label className="label text-sm">Ciudad</label>
              <select
                className="select select-bordered w-full"
                value={seleccion}
                onChange={(e) => setSeleccion(e.target.value)}
              >
                <option disabled value="">
                  Seleccione
                </option>
                <option value="'Bogota'">Bogota</option>
              </select>
            </div>
          </>
        ) : usuario.gen_rol_fk === 2001 ||
          usuario.gen_rol_fk === 2004 ||
          usuario.gen_rol_fk === 2007 ||
          usuario.gen_rol_fk === 3002 ||
          usuario.gen_rol_fk === 3005 ? (
          <>
            <div className="col-span-1">
              <label className="label text-sm">Ciudad</label>
              <select
                className="select select-bordered w-full"
                value={seleccion}
                onChange={(e) => setSeleccion(e.target.value)}
              >
                <option disabled value="">
                  Seleccione
                </option>
                <option value="'Barranquilla'">Barranquilla</option>
              </select>
            </div>
          </>
        ) : (
          <></>
        )} */}


        <div className="col-span-1">
          <label className="label text-sm">Fecha Inicial</label>
          <input
            type="date"
            className="input input-bordered w-full"
            value={fechaIni}
            onChange={(e) => setFechaIni(e.target.value)}
          />
        </div>
        <div className="col-span-1">
          <label className="label text-sm">Fecha Final</label>
          <input
            type="date"
            className="input input-bordered w-full"
            value={fechaFin}
            onChange={(e) => setFechaFin(e.target.value)}
          />
        </div>
        <div className="col-span-1 flex items-end">
          <button
            type="button"
            className="btn btn-outline btn-info text-2xl mr-2"
            onClick={searchAll}
          >
            <FaSearch />
          </button>
          {/* {usuario.gen_car_apli !== "Agente call center" && date.length > 0 && (
            <DescargaExcelHTML tableID={tablaID} filename={nomExcel} />
          )} */}
          {/* {(usuario.gen_rol_fk === 3010 || usuario.gen_rol_fk === 3000 || usuario.gen_rol_fk === 2008 || usuario.gen_rol_fk === 2009 || usuario.gen_rol_fk === 2106 || usuario.gen_rol_fk === 2107) && date.length > 0 && ( */}
          {/* // <DescargaExcelHTML tableID={tablaID} filename={nomExcel} /> */}
          <div>
            <ReactHtmlTableToExcel
              id="botonExportarExcel"
              className="form-control btn btn-success"
              table={tablaID}
              filename={nomExcel + fechaIni + ' - ' + fechaFin}
              sheet="pagina 1"
              buttonText="Exportar excel"
            >
            </ReactHtmlTableToExcel>
            {/* <FaFileExcel className="text-accent text-2x1" />*/}
          </div>
          {/* // )} */}



        </div>
        <div className="col-span-1 col-start-7">
          <label className="label text-sm">Filtrar por ID</label>
          <input
            type="number"
            className="input input-bordered w-full"
            value={numDoc}
            onChange={(e) => {
              setNumDoc(e.target.value);
              setTable(false);
            }}
          />
        </div>
        <div className="col-span-1 flex items-end">
          <button
            type="submit"
            className="btn btn-outline btn-info btn-block text-2xl col-start-2"
            onClick={search}
          >
            <FaSearch />
          </button>
        </div>
      </div>
    </>
  );
}
