import { useDispatch, useSelector } from "react-redux";
import UserCard from "../components/UserCard";
import DeleteConfirmationModal from "../components/DeleteConfirmationModal";
import { BASE_API_URL } from "../config/api";
import { useEffect, useState } from "react";
import { logout } from "../features/user/userSlice";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [userData, setUserData] = useState([]);
  const [deleteModal, setDeleteModal] = useState({
    isOpen: false,
    userToDelete: null
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const { user, token } = useSelector((state) => state.user.userValue);
  const { type } = user;

  const onEdit = async (details, userEmail) => {
    try {
      const selectedUser = userData.find(user => user.email === userEmail);
      const response = await fetch(`${BASE_API_URL}/api/admin/updateById`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ ...selectedUser, ...details })
      });
    
      if (response.ok) {
        setUserData(prevData =>
          prevData.map(user => user.email === userEmail ? { ...user, ...details } : user)
        );
      } else {
        // Throw error so UserCard can catch it
        const errorText = await response.text();
        throw new Error(`Update failed: ${response.status} - ${errorText}`);
      }
    } catch (error) {
      console.error("Error updating user:", error.message);
      throw error; // Re-throw so UserCard can handle it
    }
  };

  const handleDeleteClick = (userEmail) => {
    const userToDelete = userData.find(user => user.email === userEmail);
    setDeleteModal({
      isOpen: true,
      userToDelete
    });
  };

  const handleDeleteConfirm = async () => {
    const { userToDelete } = deleteModal;
    if (!userToDelete) return;

    try {
      const isCurrentUser = user.email === userToDelete.email;
      
      // If deleting current user, logout first
      if (isCurrentUser) {
        dispatch(logout());
        navigate('/');
      }

      const response = await fetch(`${BASE_API_URL}/api/user/${userToDelete._id}`, {
        method: 'DELETE',
        headers: { 'Authorization': `Bearer ${token}` },
      });
      
      if (response.ok) {
        if (!isCurrentUser) {
          setUserData(prev => prev.filter(val => val.email !== userToDelete.email));
        }
      } else {
        console.error("Error deleting user");
      }
    } catch (error) {
      console.error("Network error during delete:", error);
    } finally {
      // Close modal
      setDeleteModal({ isOpen: false, userToDelete: null });
    }
  };

  const handleDeleteCancel = () => {
    setDeleteModal({ isOpen: false, userToDelete: null });
  };

  useEffect(() => {
    async function getData() {
      if (type === 'Admin') {
        try {
          const response = await fetch(`${BASE_API_URL}/api/admin/`, {
            headers: { 'Authorization': `Bearer ${token}` }
          });

          if (response.ok) {
            const json = await response.json();
            setUserData([user, ...json]);
          } else {
            console.log("Error in getting user data");
          }
        } catch (err) {
          console.error("Network error:", err);
        }
      } else {
        setUserData([user]);
      }
    }

    getData();
  }, [user, type, token]);

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-6 text-gray-900">Users</h2>
      {userData.map((userVal, idx) => (
        <UserCard 
          key={idx} 
          name={userVal.name} 
          email={userVal.email} 
          type={userVal.type} 
          phNo={userVal.phNo}
          onEdit={onEdit} 
          onDelete={handleDeleteClick}
        />
      ))}

      <DeleteConfirmationModal
        isOpen={deleteModal.isOpen}
        onClose={handleDeleteCancel}
        onConfirm={handleDeleteConfirm}
        userName={deleteModal.userToDelete?.name}
        userEmail={deleteModal.userToDelete?.email}
        isCurrentUser={user.email === deleteModal.userToDelete?.email}
      />
    </div>
  );
};

export default Dashboard;