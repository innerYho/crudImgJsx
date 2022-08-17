import React, { useEffect, useState } from "react";

let styleError = {
    fontWeight: "bold",
    color: "#dc3545",
};

let styleImage = {
    height: "10em",
    width: "auto ",
};

const Err = ({ err }) => {
    useEffect(() => { }, [err]);

    return <p style={styleError}>{err}</p>;
};

const isObject = (val) => {
    return val instanceof Object;
}


export const ImagePaste = ({
    value,
    form,
    setForm,
    required,
    disabled,
    name,
    id,
    classNameInput,
    classNameDiv,
    label,
    route,
    err,
}) => {

    // https://www.kindacode.com/article/react-typescript-handle-oncopy-oncut-and-onpaste-events/
    const handleChange = async (e) => {
        var item = e.clipboardData.items[0];
        if (item === undefined) {
            alert('undefined')
        }
        if (item.type.indexOf("image") === 0) {
            let { name } = e.target;
            setForm({
                ...form,
                [name]: item.getAsFile(),
            });
        } else {
            alert("Solo se aceptan imágenes");
        }
        console.log('handleChange')
        console.log(value)
        console.log(form)

    };

    const removeFile = (idName) => {
        setForm({
            ...form,
            [idName]: "",
        });
    };

    return (
        <div className={classNameDiv}>
            <div className="row">
                <label className="">{label}</label>
                {value && (
                    // console.log(value)
                    <div className="col-12 text-center">
                        <img
                            alt="Img not found"
                            style={styleImage}
                            src={isObject(value) ? URL.createObjectURL(value) : `${route}`}
                        // src={isObject(value) ? URL.createObjectURL(value) : `${route}/${value}`}
                        />
                    </div>
                )}
                <div className="col-9 mt-2">
                    <input
                        type="text"
                        className={classNameInput}
                        id={id}
                        value={value}
                        name={name}
                        onPaste={handleChange}
                        required={required === 'true' || required ? true : false}
                        disabled={disabled}
                        placeholder="Pegar Imagen Ctrl + V"
                    />
                </div>
                {value && (
                    <div className="col-3 mt-2">
                        <button
                            className="btn btn-danger"
                            disabled={disabled}
                            onClick={() => removeFile(name)}
                        >
                            Remove
                        </button>
                    </div>
                )}
            </div>
            <Err err={err} />
        </div>
    );
};

export const Image = ({
    value,
    form,
    setForm,
    required,
    disabled,
    name,
    id,
    classNameInput,
    classNameDiv,
    label,
    route,
    isEdit,
    err,
}) => {
    const handleChange = (e) => {
        let { name } = e.target;
        setForm({
            ...form,
            [name]: e.target.files[0],
        });
    };

    const removeFile = (idName) => {
        setForm({
            ...form,
            [idName]: "",
        });
        document.getElementById(idName).value = null;
    };

    return (
        <div className={classNameDiv}>
            <div className="row">
                <label className="">{label}</label>
                {value && (
                    <div className="col-12 text-center">
                        <img
                            alt="not found XD"
                            style={styleImage}
                            src={isEdit ? `${route}/${value}` : URL.createObjectURL(value)}
                        />
                    </div>
                )}
                <div className="col-9 mt-2">
                    <input
                        type="file"
                        className={classNameInput}
                        id={id}
                        name={name}
                        onChange={handleChange}
                        required={required}
                        disabled={disabled}
                    />
                </div>
                {value && (
                    <div className="col-3 mt-2">
                        <button
                            className="btn btn-danger"
                            disabled={isEdit ? true : false}
                            onClick={() => removeFile(id)}
                        >
                            Remove
                        </button>
                    </div>
                )}
            </div>
            <Err err={err} />
        </div>
    );
};