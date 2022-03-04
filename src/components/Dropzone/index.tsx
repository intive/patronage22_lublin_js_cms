import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import classes from "./Dropzone.module.css";

interface FilesListProps {
  setFilesList: any;
}

const Dropzone: React.FC<FilesListProps> = ({ setFilesList }) => {
  const onDrop = useCallback(acceptedFiles => {
    console.log(acceptedFiles)
    setFilesList(acceptedFiles)
  }, [setFilesList])
  const { acceptedFiles, fileRejections, getRootProps, getInputProps } =
    useDropzone({
      onDrop,
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

export default Dropzone;
