import React, { useEffect, useCallback } from "react";
import { useDropzone } from "react-dropzone";
import uploadImagesRequest from "../lib/uploadMultipleImages";
import uploadRequest from "../lib/uploadImage";
import classes from "./Dropzone.module.css";

function AcceptMaxFiles() {
  const { acceptedFiles, fileRejections, getRootProps, getInputProps } =
    useDropzone({
      maxFiles: 4,
    });

  const acceptedFileItems = acceptedFiles.map((file) => (
    <li key={file.name}>
      {file.name} - {file.size} bytes
    </li>
  ));

  const fileRejectionItems = fileRejections.map(({ file, errors }) => {
    return (
      <li key={file.name}>
        {file.name} - {file.size} bytes
        <ul>
          {errors.map((e) => (
            <li key={e.code}>{e.message}</li>
          ))}
        </ul>
      </li>
    );
  });

  useEffect(() => {
    const formData = new FormData();
    acceptedFiles.forEach((file) => {
      formData.append("photos", file);
    });
    uploadImagesRequest(formData)
      .then((response) => {
        if (response.status === 200) {
          const data = response.data;
          console.log(data);
        } else {
          throw new Error("Authenfication Fail!");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, [acceptedFiles]);

  const uploadSingleImage = useCallback(async () => {
    for (let i = 0; i < acceptedFiles.length; i++) {
      const singleFormData = new FormData();
      singleFormData.append("image", acceptedFiles[i]);
      singleFormData.append("product_id", "1");
      uploadRequest(singleFormData)
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
    }
  }, [acceptedFiles]);

  useEffect(() => {
    setTimeout(() => {
      uploadSingleImage();
    }, 5000);
  }, [uploadSingleImage]);

  return (
    <section className="container">
      <div className={classes.dropzone} {...getRootProps()}>
        <input {...getInputProps()} />
        <p>Drag 'n' drop some files here, or click to select files</p>
        <em>(4 files are the maximum number of files you can drop here)</em>
      </div>
      <aside>
        <h4>Accepted files</h4>
        <ul>{acceptedFileItems}</ul>
        <h4>Rejected files</h4>
        <ul>{fileRejectionItems}</ul>
      </aside>
    </section>
  );
}

export default AcceptMaxFiles;
