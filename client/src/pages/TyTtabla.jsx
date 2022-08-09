import { lazy, Suspense, useState } from "react";
// import Layout from "../../../components/ui/Layout";
import FiltroExcel from "../components/general/FiltroExcel";
import Loader from "../components/general/Loader";
const TablaContado = lazy(() =>
  import("../components/TablaFinanciado")
);
// import TablaContado from '../../../components/campanaTYT/contado/TablaContado';

export default function TyTtabla() {
  const tabla = "tyt_finan";
  const filtroFch = "fecha_r"; //nameUno
  const filtroCiudad = 0; //nameDos
  const filtroEstado = "estado"; //estado
  const filtroCamp = "campana"; //nameCuatro
  const documento = "id";
  const nameCinco = "usu_id_agent";
  const nomExcel = "ContadoT&T";
  const tablaID = "contadoT&T";
  const [data, setData] = useState([]);
  const [table, setTable] = useState(false);
  const [showModalPoliedro, setShowModalPoliedro] = useState(false);
  const [showModalEstado, setShowModalEstado] = useState(false);

  return (
    <>
      {/* <Layout titulo="T&T Contado"> */}
      <h1 className="text-center text-4xl font-semibold">Consultas</h1>
      <FiltroExcel
        date={data}
        setDate={setData}
        setTable={setTable}
        tabla={tabla}
        nameUno={filtroFch}
        nameDos={filtroCiudad}
        nameTres={filtroEstado}
        nameCuatro={filtroCamp}
        nameCinco={nameCinco}
        nomExcel={nomExcel}
        tablaID={tablaID}
        tablaSearch={tabla}
        documento={documento}
      />
      <br />
      {table && (
        <Suspense fallback={<Loader />}>
          <TablaContado
            data={data}
            setData={setData}
            tablaID={tablaID}
            setShowModalPoliedro={setShowModalPoliedro}
            setShowModalEstado={setShowModalEstado}
          />
        </Suspense>
      )}

      {/* </Layout> */}
    </>
  );
}
