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
        <div className="col-span-12">
          <label htmlFor="">Heimdall</label>
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
        </div>

        <div className="col-span-12">
          <label htmlFor="">Newnet</label>
          <a
            href={"http://localhost:3000/rgt"}
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
        </div>
      </div>
      {/* </Layout> */}
    </>
  );
}
