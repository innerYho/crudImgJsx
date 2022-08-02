import React from "react";
// import Slider from "react-slick";
// import ReactECharts from "echarts-for-react";
// import Layout from "../components/ui/Layout";
import { url } from "../data/url";
import { useState, useEffect } from "react";
import CargueImagenes from "../components/general/CargueImagenes";

export default function Home() {

  const [soporte_incidencias, setSoporte_incidencias] = useState('');
  const [image8, setImage8] = useState("");

  return (
    <>
      {/* <Layout titulo="Inicio"> */}

      <div className="grid grid-cols-3 gap-4">

        <p>Hola</p>
        <div className="col-span-2">
          <CargueImagenes
            ide={id}
            id="fileInput"
            body="soporte_incidencias"
            value={soporte_incidencias}
            label="Soporte soporte_incidencias"
            image={image8}
            setImage={setImage8}
            route={`${url}`}
          />


        </div>
      </div>
      {/* </Layout> */}
    </>
  );
}
