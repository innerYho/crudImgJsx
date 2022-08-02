import { useState, useEffect } from "react";
import { FaTrashAlt } from "react-icons/fa";
// import axios from "axios";
import Swal from "sweetalert2";
// import { url } from "../../data/url";

export default function ImageUpload({
  image,
  setImage,
  label,
  id,
  value,
  route,
  required,
  body,
  ide,
}) {
  const [preview, setPreview] = useState("");

  useEffect(() => {
    if (!image) {
      setPreview(undefined);
      return;
    }

    const objectUrl = URL.createObjectURL(image);
    setPreview(objectUrl);

    return () => URL.revokeObjectURL(objectUrl);
  }, [image]);

  useEffect(() => {
    if (value.length === null) {
      value("");
    }
  }, []);

  const onSelectFile = (e) => {
    if (!e.target.files || e.target.files.length === 0) {
      setImage(undefined);
      return;
    }

    setImage(e.target.files[0]);
  };

  const onDeletePreload = () => {
    setImage(null);
    setPreview(null);
    document.getElementById("fileInput").value = null;
  };

  const onDeleteLoad = async () => {
    Swal.fire({
      title:
        "La eliminación de imagenes se encuentra temporalmente deshabilitada",
      icon: "info",
      showConfirmButton: false,
    });
  };

  const paste = async (e) => {
    let items = e.clipboardData.items;
    for (let i = 0, len = items.length; i < len; ++i) {
      let item = items[i];
      if (item.type.indexOf("image") === 0) {
        setImage(item.getAsFile());
      } else {
        Swal.fire({
          title: "Solo se permiten imagenes",
          icon: "warning",
          showConfirmButton: false,
        });
      }
    }
  };

  return (
    <div className="flex flex-col flex-wrap">
      <label className="label flex-1 justify-center text-xl">{label}</label>
      {image ? (
        <img
          alt="..."
          src={preview}
          className="h-auto w-full rounded-xl py-1"
        />
      ) : value ? (
        <img
          alt="..."
          src={`${route}/${value}`}
          className="h-auto w-full rounded-xl py-1"
        />
      ) : null}
      <div className="flex flex-row justify-between gap-2">
        <input
          id={id}
          type="text"
          value={value}
          onPaste={paste}
          placeholder="Pegar Imagen Ctrl + V"
          className="input input-bordered flex-1"
          required={required === "true" || required ? true : false}
          onChange={onSelectFile}
          autoComplete="off"
        // pattern=".{0}"
        />
        {image ? (
          <button
            className="btn btn-outline btn-primary"
            onClick={() => {
              onDeletePreload();
            }}
          >
            <FaTrashAlt />
          </button>
        ) : value ? (
          <button
            type="button"
            className="btn btn-outline btn-primary"
            onClick={() => {
              onDeleteLoad();
            }}
          >
            <FaTrashAlt />
          </button>
        ) : null}
      </div>
    </div>
  );
}

// useEffect(() => {
//   data.length > 0 ? datosFinanciado(data[0]) : clear();
// }, [data]);
