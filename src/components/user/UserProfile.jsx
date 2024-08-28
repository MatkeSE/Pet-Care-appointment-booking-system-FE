import React, { useState } from "react";
import UserImage from "../common/UserImage";
import { Link } from "react-router-dom";
import ImageUploaderModal from "../modals/ImageUploaderModal";
import ChangePasswordModal from "../modals/ChangePasswordModal";
import { Col, Row, Card, ListGroup, Button, Container } from "react-bootstrap";
// import DeleteConfirmationModal from "../modals/DeleteConfirmationModal";
// import style from "../../components/user/UserProfile.module.css";

const UserProfile = ({ user, handleRemovePhoto, handleDeleteAccount }) => {
  const [showImageUploaderModal, setShowImageUploaderModal] = useState(false);
  const [showChangePasswordModal, setShowChangePasswordModal] = useState(false);
//   const [showDeleteModal, setShowDeleteModal] = useState(false);
//   const [userToDelete, setUserToDelete] = useState(null);

  // const navigate = useNavigate();

  const handleShowImageUploaderModal = () => {
    setShowImageUploaderModal(true);
  };
  const handleCloseImageUploaderModal = () => {
    setShowImageUploaderModal(false);
  };

  const handleShowChangePasswordModal = () => {
    setShowChangePasswordModal(true);
  };
  const handleCloseChangePasswordModal = () => {
    setShowChangePasswordModal(false);
  };

//   const handleCloseDeleteModal = () => {
//     setShowDeleteModal(false);
//   };

//   const handleShowDeleteModal = (userId) => {
//     setUserToDelete(userId);
//     setShowDeleteModal(true);
//   };

//   const handleDeleteAndCloseModal = async () => {
//     try {
//       await handleDeleteAccount();
//       setShowDeleteModal(false);
//     } catch (error) {
//       console.error(error.message);
//     }
//   };

console.log("The user data:", user);
  return (
    <Container>
    
      <React.Fragment>
        <Row>
          <Col md={3}>
            <Card className='text-center mb-3 shadow'>
              <Card.Body>
                <UserImage userId={user.id} userPhoto={user.photo} />
              </Card.Body>
              <div className='text-center'>
                <p>
                  {" "}
                  <Link to={"#"} onClick={handleShowImageUploaderModal}>
                    Update Photo
                  </Link>
                </p>

                <ImageUploaderModal
                  userId={user.id}
                  show={showImageUploaderModal}
                  handleClose={handleCloseImageUploaderModal}
                />
                <p>
                  {" "}
                  <Link to={"#"} onClick={""}>
                    Remove Photo
                  </Link>
                </p>

                <p>
                  {" "}
                  <Link to={"#"} onClick={handleShowChangePasswordModal}>
                    Change Password
                  </Link>
                </p>

                <ChangePasswordModal
                  userId={user.id}
                  show={showChangePasswordModal}
                  handleClose={handleCloseChangePasswordModal}
                />
              </div>
            </Card>
          </Col>

          <Col md={8}>
            <Card className='mb-3 shadow'>
              <Card.Body className='d-flex align-items-center'>
                <Col md={4}>First Name :</Col>
                <Col md={4}>
                  <Card.Text>{user.firstName}</Card.Text>
                </Col>
              </Card.Body>

              <Card.Body className='d-flex align-items-center'>
                <Col md={4}>Last name :</Col>
                <Col md={4}>
                  <Card.Text>{user.lastName}</Card.Text>
                </Col>
              </Card.Body>

              <Card.Body className='d-flex align-items-center'>
                <Col md={4}>Gender :</Col>
                <Col md={4}>
                  <Card.Text>{user.gender}</Card.Text>
                </Col>
              </Card.Body>

              <Card.Body className='d-flex align-items-center'>
                <Col md={4}>Email :</Col>
                <Col md={4}>
                  <Card.Text>{user.email}</Card.Text>
                </Col>
              </Card.Body>

              <Card.Body className='d-flex align-items-center'>
                <Col md={4}>Mobile :</Col>
                <Col md={4}>
                  <Card.Text>{user.phoneNumber}</Card.Text>
                </Col>
              </Card.Body>

              <Card.Body className='d-flex align-items-center'>
                <Col md={4}>User Type :</Col>
                <Col md={4}>
                  <Card.Text>{user.userType}</Card.Text>
                </Col>
              </Card.Body>
          </Card>
        </Col>
      </Row>
      </React.Fragment>
    </Container>
  );
};

export default UserProfile;
