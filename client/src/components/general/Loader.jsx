export default function Loader() {
  return (
    <div className="card bg-base-300 max-w-2xl text-white mx-auto shadow-xl">
      <div className="card-body">
        <div className="flex flex-row justify-evenly items-center">
          <img
            src={require("../../assets/general/CARGANDO.png")}
            className="animate-[spin_3s_linear_infinite] h-32 w-32 mx-6"
            alt=""
          />
          <h2 className="text-2xl font-semibold text-center">
            Por favor espere mientras
            <br />
            cargan los datos...
          </h2>
        </div>
      </div>
    </div>
  );
}
