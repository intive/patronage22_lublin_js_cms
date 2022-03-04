import React from "react";
import { useDropzone } from "react-dropzone";
import classes from "./Dropzone.module.css";
import uploadRequest from "../lib/uploadImage";

const Basic = () => {
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone();

  const files = acceptedFiles.map((file) => (
    <li key={file.name}>
      {file.name} - {file.size} bytes
    </li>
  ));

  const formData = new FormData();
  const file = acceptedFiles[0];
  formData.append("image", file);
  uploadRequest(formData)
    .then((response) => {
      if (response.status === 200) {
        console.log(response.data);
      } else {
        throw new Error("Authenfication Fail!");
      }
    })
    .catch((error) => {
      console.log(error);
    });

  return (
    <section className={classes.container}>
      <div className={classes.dropzone} {...getRootProps()}>
        <input {...getInputProps()} />
        <p>Drag 'n' drop some files here, or click to select files</p>
      </div>
      <aside>
        <h4>{files.length === 0 ? null : "Files"}</h4>
        <ul>{files}</ul>
      </aside>
    </section>
  );
};

export default Basic;
