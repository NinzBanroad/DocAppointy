import { createContext, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
export const AdminContext = createContext();

const AdminContextProvider = (props) => {
  const [adminToken, setAdminToken] = useState(
    localStorage.getItem('adminToken') ? localStorage.getItem('adminToken') : ''
  );

  const [doctors, setDoctors] = useState([]);

  const backendURL = import.meta.env.VITE_BACKEND_URL;

  const getAllDoctors = async () => {
    try {
      const { data } = await axios.post(
        `${backendURL}/api/admin/all-doctors`,
        {},
        { headers: { adminToken } }
      );

      if (data.success) {
        setDoctors(data.doctors);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  const changeAvailability = async (docId) => {
    try {
      const { data } = await axios.post(
        `${backendURL}/api/admin/change-availability`,
        { docId },
        { headers: { adminToken } }
      );

      if (data.success) {
        toast.success(data.message);
        getAllDoctors(); // Refresh the list of doctors after changing availability
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  const value = {
    adminToken,
    setAdminToken,
    backendURL,
    doctors,
    getAllDoctors,
    changeAvailability,
  };

  return (
    <AdminContext.Provider value={value}>
      {props.children}
    </AdminContext.Provider>
  );
};

export default AdminContextProvider;
