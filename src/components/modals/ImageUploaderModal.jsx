import React, { useEffect, useState } from "react";
import AlertMessage from "../common/AlertMessage";
import { Modal, Button, Form, InputGroup } from "react-bootstrap";
import { updateUserPhoto, uploadUserPhoto } from "./ImageUploaderService";
import UseMessageAlerts from "../hooks/UseMessageAlerts";
import { getUserById } from "../user/UserService";

const ImageUploaderModal = ({ userId, show, handleClose }) => {
  const [file, setFile] = useState(null);
  const [user, setUser] = useState(null);
  const {
    successMessage,
    setSuccessMessage,
    errorMessage,
    setErrorMessage,
    showSuccessAlert,
    setShowSuccessAlert,
    showErrorAlert,
    setShowErrorAlert,
  } = UseMessageAlerts();

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const getUser = async () => {
    try {
      const result = getUserById(6);
      setSuccessMessage(result.data);
    } catch (error) {
      setErrorMessage(error.message);
      setShowErrorAlert(true);
      console.error(error.message);
    }
  };
  useEffect(() => {
    getUser();
  }, [userId]);

  const handleImageUpload = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append("file", file);

      if (user && user.photo) {
        const reader = new FileReader();
        reader.readAsArrayBuffer(file);
        reader.onload = async (e) => {
          const fileBytes = new Uint8Array(e.target.result);
          const response = await updateUserPhoto(6, fileBytes);
          setSuccessMessage(response.data);
          window.location.reload();
          setShowSuccessAlert(true);
        };
      } else {
        const response = await uploadUserPhoto(6, file);
        setSuccessMessage(response.data);
        window.location.reload();
        setShowSuccessAlert(true);
      }
    } catch (error) {
      setErrorMessage(error.message);
      setShowErrorAlert(true);
      console.error(error.message);
    }
  };

  //1. get the user
  //2. check if the user already got a phot
  //3. if yes, the update the exisiting photo.
  //else, create a new photo for the user
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Upload a Photo</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        {showErrorAlert && (
          <AlertMessage type={"danger"} messsag={errorMessage} />
        )}
        {showSuccessAlert && (
          <AlertMessage type={"success"} messsag={successMessage} />
        )}

        <Form>
          <h6>Select the photo you would like to display on your profile</h6>
          <InputGroup>
            <Form.Control type='file' onChange={handleFileChange}/>
              <Button variant='secondary' onClick={handleImageUpload}>
                Upload
              </Button>          
          </InputGroup>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default ImageUploaderModal;
