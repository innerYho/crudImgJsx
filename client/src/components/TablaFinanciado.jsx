import { FaEdit } from "react-icons/fa";
import { useState } from "react";
import moment from "moment";
// import Cookies from "universal-cookie";
import { Link } from "react-router-dom";
// import { url } from "../../../data/url";

export default function TablaFinanciado({
  data,
  setData,
  setShowModalP,
  setShowModalE,
  setShowModalC,
  tablaID,
}) {
  // const cookie = new Cookies();
  // const [usuario] = useState(cookie.get("usuario"));
  const now = new Date();
  const hour = now.toLocaleTimeString();

  const url = "http://localhost:9369"


  // Mostrar fecha
  const fecha = (date) => {
    return moment(date).format("YYYY-MM-DD");
  };

  const filterRow = (row) => {
    setData(
      data.filter((element) => {
        return element.id === row.id;
      })
    );
  };

  return (
    data.length > 0 && (
      <>
        <div className="overflow-x-auto shadow-xl">
          <table id={tablaID} className="table table-auto">
            <thead>
              <tr className="text-center">
                {/* <th>Editar</th> */}
                <th>°</th>
                <th>ID</th>
                <th>Fechas de registro</th>
                <th>Nombre</th>

                <th className="bg-base-200"></th>
                <th>
                  <h6 className="w-40">Validación de identidad</h6>
                </th>
                <th>
                  <h6 className="w-40">Poliedro</h6>
                </th>

              </tr>
            </thead>
            <tbody>
              {data.map((item) => (
                <tr className="text-center" key={item.id}>
                  <td>
                    <Link
                      className="btn btn-ghost btn-square shadow-md mx-0.5"
                      to={`/registro/${item.id}`}
                    >
                      <FaEdit className="text-accent text-2x1" />
                    </Link>
                  </td>
                  <td
                    className={
                      item.color === "Gris"
                        ? "bg-slate-500"
                        : item.color === "Amarillo"
                          ? "bg-yellow-500"
                          : item.color === "Verde"
                            ? "bg-green-500"
                            : "bg-red-500"
                    }
                  ></td>
                  <td>{item.id}</td>
                  <td>{fecha(item.fecha_r)}</td>
                  <td>{item.hora_r}</td>
                  <td>{item.nom_cli}</td>

                  {/* <td className="bg-base-200"></td> */}
                  <td>
                    {item.val_identidad && (
                      <label
                        htmlFor="validacion"
                        className="cursor-zoom-in"
                        onClick={() => filterRow(item)}
                      >
                        <img
                          alt="..."
                          src={`${url}/${item.val_identidad}`}
                          className="w-40"
                        />
                      </label>
                    )}
                  </td>
                  <td className="w-40">
                    {item.poliedro && (
                      <label
                        htmlFor="poliedro"
                        className="cursor-zoom-in"
                        onClick={() => filterRow(item)}
                      >
                        <img
                          alt="..."
                          src={`${url}/${item.poliedro}`}
                          className="w-40"
                        />
                      </label>
                    )}
                  </td>

                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Validación de identidad */}
        <input type="checkbox" id="validacion" className="modal-toggle" />
        <div className="modal">
          <div className="modal-box relative max-w-6xl">
            <label
              htmlFor="validacion"
              className="btn btn-sm btn-circle absolute right-2 top-2"
            >
              ✕
            </label>
            <img
              alt="..."
              src={`${url}/${data[0].val_identidad}`}
              className="w-full"
            />
          </div>
        </div>
        {/* Poliedro */}
        <input type="checkbox" id="poliedro" className="modal-toggle" />
        <div className="modal">
          <div className="modal-box relative max-w-6xl">
            <label
              htmlFor="poliedro"
              className="btn btn-sm btn-circle absolute right-2 top-2"
            >
              ✕
            </label>
            <img
              alt="..."
              src={`${url}/${data[0].poliedro}`}
              className="w-full"
            />
          </div>
        </div>
        {/* Inventario */}
        <input type="checkbox" id="inventario" className="modal-toggle" />
        <div className="modal">
          <div className="modal-box relative max-w-6xl">
            <label
              htmlFor="inventario"
              className="btn btn-sm btn-circle absolute right-2 top-2"
            >
              ✕
            </label>
            <img
              alt="..."
              src={`${url}/${data[0].inventario}`}
              className="w-full"
            />
          </div>
        </div>
        {/* AC */}
        <input type="checkbox" id="ac" className="modal-toggle" />
        <div className="modal">
          <div className="modal-box relative max-w-6xl">
            <label
              htmlFor="ac"
              className="btn btn-sm btn-circle absolute right-2 top-2"
            >
              ✕
            </label>
            <img alt="..." src={`${url}/${data[0].ac}`} className="w-full" />
          </div>
        </div>
        {/* Tickler */}
        <input type="checkbox" id="tickler" className="modal-toggle" />
        <div className="modal">
          <div className="modal-box relative max-w-6xl">
            <label
              htmlFor="tickler"
              className="btn btn-sm btn-circle absolute right-2 top-2"
            >
              ✕
            </label>
            <img
              alt="..."
              src={`${url}/${data[0].tickler}`}
              className="w-full"
            />
          </div>
        </div>
        {/* Soporte incidencias */}
        <input
          type="checkbox"
          id="soporte_incidencias"
          className="modal-toggle"
        />
        <div className="modal">
          <div className="modal-box relative max-w-6xl">
            <label
              htmlFor="soporte_incidencias"
              className="btn btn-sm btn-circle absolute right-2 top-2"
            >
              ✕
            </label>
            <img
              alt="..."
              src={`${url}/${data[0].soporte_incidencias}`}
              className="w-full"
            />
          </div>
        </div>
        {/* Soporte incidencias 2 */}
        <input
          type="checkbox"
          id="soporte_incidencias2"
          className="modal-toggle"
        />
        <div className="modal">
          <div className="modal-box relative max-w-6xl">
            <label
              htmlFor="soporte_incidencias2"
              className="btn btn-sm btn-circle absolute right-2 top-2"
            >
              ✕
            </label>
            <img
              alt="..."
              src={`${url}/${data[0].soporte_incidencias2}`}
              className="w-full"
            />
          </div>
        </div>
        {/* Soporte incidencias 3 */}
        <input
          type="checkbox"
          id="soporte_incidencias3"
          className="modal-toggle"
        />
        <div className="modal">
          <div className="modal-box relative max-w-6xl">
            <label
              htmlFor="soporte_incidencias3"
              className="btn btn-sm btn-circle absolute right-2 top-2"
            >
              ✕
            </label>
            <img
              alt="..."
              src={`${url}/${data[0].soporte_incidencias3}`}
              className="w-full"
            />
          </div>
        </div>
      </>
    )
  );
}
