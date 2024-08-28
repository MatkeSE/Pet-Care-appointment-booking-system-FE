import React, {useEffect, useState} from "react";
import { Container, Tabs, Tab, Col, Row, Card } from "react-bootstrap";
import { useParams } from "react-router-dom";
import UserProfile from "./UserProfile";
import UseMessageAlerts from "../hooks/UseMessageAlerts";
import { getUserById } from "./UserService";
// import { deleteUserPhoto } from "../modals/ImageUploaderService";
import AlertMessage from "../common/AlertMessage";
// import Review from "../review/Review";
// import UserAppointments from "../appointment/UserAppointments";
// import CustomPieChart from "../charts/CustomPieChart";
// import { formatAppointmentStatus } from "../utils/utilities";
// import NoDataAvailable from "../common/NoDataAvailable";

const UserDashboard = () => {
  const [user, setUser] = useState(null);

//   const [appointments, setAppointments] = useState([]);
//    const [appointmentData, setAppointmentData] = useState([]);  
//   const [activeKey, setActiveKey] = useState(() => {
//     const storedActiveKey = localStorage.getItem("activeKey");
//     return storedActiveKey ? storedActiveKey : "profile";
  

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

   // const { userId } = useParams();
  const userId = 4;

  useEffect(() => {
    const getUser = async () => {
      try {
        console.log("The user id from the dashboard:", userId);
        const data = await getUserById(userId);
        setUser(data.data);
        console.log("The user data from the dashboard:", user);

      } catch (error) {
        setErrorMessage(error.response.data.message);
        setShowErrorAlert(true);
        console.error(error.message);
      }
    };
    getUser();
  }, [userId]);

//   useEffect(() => {
//     if (user && user.appointments) {
//       const statusCounts = user.appointments.reduce((acc, appointment) => {
//         const formattedStatus = formatAppointmentStatus(appointment.status);
//         if (!acc[formattedStatus]) {
//           acc[formattedStatus] = {
//             name: formattedStatus,
//             value: 1,
//           };
//         } else {
//           acc[formattedStatus].value += 1;
//         }
//         return acc;
//       }, {});

//       const transformedData = Object.values(statusCounts);
//       setAppointmentData(transformedData);
//       setAppointments(user.appointments);
//       console.log("Here is the transform data: ", transformedData);
//     }
//   }, [user]);


//   const handleRemovePhoto = async () => {
//     try {
//       const result = await deleteUserPhoto(user.photoId, userId);
//       setSuccessMessage(result.message);
//       window.location.reload();
//       setShowSuccessAlert(true);
//     } catch (error) {
//       setErrorMessage(error.message);
//       setShowErrorAlert(true);
//       console.error(error.message);
//     }
//   };

//   const handleDeleteAccount = async () => {
//     try {
//       const response = await deleteUser(userId);
//       setSuccessMessage(response.message);
//       setShowSuccessAlert(true);
//     } catch (error) {
//       setErrorMessage(error.message);
//       setShowErrorAlert(true);
//       console.error(error.message);
//     }
//   };

//   const handleTabSelect = (key) => {
//     setActiveKey(key);
//     localStorage.setItem("activeKey", key);
//   };

  return (
    <Container className='mt-2 user-dashboard'>
     
      <Tabs>
        <Tab eventKey='profile' title={<h3>Profile</h3>}>
          {user && (
            <UserProfile
              user={user}
            />
          )}
        </Tab>
      </Tabs>
    </Container>
  )

};
    


export default UserDashboard;
