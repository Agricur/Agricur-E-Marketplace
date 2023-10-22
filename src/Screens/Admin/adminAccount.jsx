import React,{useState,useEffect} from 'react'
import Header from '../../Component/AdminOption/AdminHeader.jsx'
import Footer from '../../Component/Layout/Footer.jsx'
import AdminAccount from '../../Component/Accounts/AdminAccountCom.jsx'
import { ErrorPage } from '../../Routes.js'
import Cookies from "js-cookie";
import { server } from "../../server";
import { useNavigate } from "react-router-dom";

const AdminAccountPage = () => {
  const [type, setType] = useState("");
  const [AdminID,setAdminID] = useState("");
  const [email,setEmail] = useState("");
  const [firstName,setFirstName] = useState("");
  const adminCookie = Cookies.get("jwtToken-admin");
  const navigate = useNavigate();

  useEffect(() => {
    if (adminCookie) {
      fetch(`${server}/api/admin/data`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${adminCookie}`,
        },
      })
        .then((response) => response.json())
        .then((data) => {
          setType(data.type);
          setAdminID(data.admin_id)
          setEmail(data.email);
          setFirstName(data.first_name);
        })
        .catch((error) => {
          console.error("Error fetching user data:", error);
        });
    }
  }, [adminCookie]);
    
    return (
      <div>
        {adminCookie? (
          <Header />
        ) : (
          <ErrorPage />
        )}
        {adminCookie && type === 'admin' && (
          <>
            <AdminAccount adminID={AdminID} adminName = {firstName} email ={email} />
            <Footer />
          </>
        )}
        
      </div>
    );
  };
  
  export default AdminAccountPage;
