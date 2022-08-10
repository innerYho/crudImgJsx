// import Layout from "../../../components/ui/Layout";
import FinanciadoNewnet from "../components/FinanciadoNewnet";
import { useParams } from 'react-router-dom'
import { useState } from "react";

export default function AgenteFinanciado() {
  const { id } = useParams()
  const [data, setData] = useState([])
  return (
    <>
      {/* <Layout titulo="T&T Financiado"> */}
      <h1 className="text-center text-4xl font-semibold">{id ? 'Actualizar venta' : 'Registrar venta'}</h1>
      <FinanciadoNewnet id={id} data={data} setData={setData} />
      {/* </Layout> */}
    </>
  );
}
