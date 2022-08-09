import React from "react";
// import Slider from "react-slick";
// import ReactECharts from "echarts-for-react";
// import Layout from "../components/ui/Layout";
// import { url } from "../data/url";
import { useState, useEffect } from "react";
// import CargueImagenes from "../components/general/CargueImagenes";
import { FaSpellCheck, FaSearchPlus } from "react-icons/fa";
export default function Home() {

  const [soporte_incidencias, setSoporte_incidencias] = useState('');
  const [image8, setImage8] = useState("");

  return (
    <>
      {/* <Layout titulo="Inicio"> */}

      <div className="grid grid-cols-3 gap-4">

        <p>Hola</p>
        <div className="col-span-2">
          <a
            href={"http://localhost:3000/registro"}
            // target="_blank"
            rel="noreferrer"
            as="li"
            className={`flex rounded-md px-3 py-3 cursor-pointer hover:bg-primary-focus active:bg-primary-focus duration-200 gap-x-4 mt-2`}
          ><FaSpellCheck />crear</a>
          <a
            href={"http://localhost:3000/tabla"}
            // target="_blank"
            rel="noreferrer"
            as="li"
            className={`flex rounded-md px-3 py-3 cursor-pointer hover:bg-primary-focus active:bg-primary-focus duration-200 gap-x-4 mt-2`}
          ><FaSearchPlus />Tabla</a>
          {/* <CargueImagenes
            ide={id}
            id="fileInput"
            body="soporte_incidencias"
            value={soporte_incidencias}
            label="Soporte soporte_incidencias"
            image={image8}
            setImage={setImage8}
            route={`${url}`}
          /> */}

          {/* <ImagePaste
            label="Soporte Incidencias"
            id="tc_soporte_incidencias"
            name="tc_soporte_incidencias"
            value={tc_soporte_incidencias}
            form={form}
            setForm={setForm}
            classNameInput="form-control col-8"
            classNameDiv="form-group col-md-4"
            route={`${urlServer}/imgVentas`}
          /> */}
        </div>
      </div>
      {/* </Layout> */}
    </>
  );
}
