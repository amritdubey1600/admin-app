import { useState } from "react";
import { Trash2, Edit3, Check, X } from "lucide-react";
import Snackbar from "./Snackbar";

const UserCard = ({ name, email, type, phNo, onEdit, onDelete }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newDetails, setNewDetails] = useState({
    name: name,
    phNo: phNo
  });

  const [isUpdating, setIsUpdating] = useState(false);
  const [snackbar, setSnackbar] = useState({
    isOpen: false,
    message: '',
    type: 'success'
  });

  const showSnackbar = (message, type = 'success') => {
    setSnackbar({
      isOpen: true,
      message,
      type
    });
  };

  const hideSnackbar = () => {
    setSnackbar(prev => ({ ...prev, isOpen: false }));
  };

  const handleDetailSubmit = async (e) => {
    e.preventDefault();

    if (newDetails.name.trim() === "") {
      showSnackbar("Name cannot be empty", "error");
      return;
    }

    if (newDetails.phNo.trim() === "") {
      showSnackbar("Phone number cannot be empty", "error");
      return;
    }

    // Check if BOTH fields are unchanged
    if (newDetails.name.trim() === name.trim() && 
        newDetails.phNo.trim() === phNo.trim()) {
      setIsEditing(false);
      return;
    }

    setIsUpdating(true);

    try {
      await onEdit(newDetails, email);
      setIsEditing(false);
      showSnackbar("User details updated successfully!", "success");
    } catch (error) {
      showSnackbar("Failed to update user details", "error");
      setNewDetails({ name, phNo }); // Reset to original values on error
      console.log(error);
    } finally {
      setIsUpdating(false);
    }
  };

  const handleDetailChange = (e) => {
    setNewDetails({
      ...newDetails,
      [e.target.name]: e.target.value
    })
  }

  const handleCancel = () => {
    setNewDetails({ name, phNo }); // Reset to original values on cancel
    setIsEditing(false);
  };

  return (
    <>
      <div className="relative w-full bg-white border border-slate-200 rounded-xl shadow-lg p-6 my-4 transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1">
        {/* Action buttons */}
        <div className="absolute top-4 right-4 flex gap-2">
          {!isEditing && (
            <>
              <button
                onClick={() => setIsEditing(true)}
                className="p-2 text-slate-600 hover:text-slate-800 hover:bg-slate-100 rounded-lg transition-all duration-200"
                aria-label="Edit user"
              >
                <Edit3 className="w-4 h-4" />
              </button>
              <button
                onClick={() => onDelete(email)}
                className="p-2 text-red-500 hover:text-red-700 hover:bg-red-50 rounded-lg transition-all duration-200"
                aria-label="Delete user"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </>
          )}
        </div>

        {/* User Type Badge */}
        <div className="mb-6">
          <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
            type === 'Admin' 
              ? 'bg-slate-100 text-slate-800 border border-slate-300' 
              : 'bg-slate-50 text-slate-600 border border-slate-200'
          }`}>
            {type}
          </span>
        </div>

        {/* Content */}
        {isEditing ? (
          <form onSubmit={handleDetailSubmit} className="space-y-4">
            {/* Name Field */}
            <div>
              <label className="block mb-2 text-sm font-medium text-slate-700">Name</label>
              <input
                type="text"
                name="name"
                value={newDetails.name}
                onChange={handleDetailChange}
                autoFocus
                disabled={isUpdating}
                className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-500 focus:border-slate-500 bg-white text-slate-900 disabled:bg-slate-50 disabled:text-slate-500 transition-all duration-200"
                placeholder="Enter full name"
              />
            </div>

            {/* Phone Number Field */}
            <div>
              <label className="block mb-2 text-sm font-medium text-slate-700">Phone Number</label>
              <input
                type="tel"
                name="phNo"
                value={newDetails.phNo}
                onChange={handleDetailChange}
                disabled={isUpdating}
                className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-500 focus:border-slate-500 bg-white text-slate-900 disabled:bg-slate-50 disabled:text-slate-500 transition-all duration-200"
                placeholder="Enter phone number"
              />
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-3 pt-2">
              <button
                type="submit"
                disabled={isUpdating}
                className="flex items-center gap-2 px-4 py-2 bg-slate-700 text-white rounded-lg hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2 transition-all duration-200 shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed font-medium"
              >
                {isUpdating ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Updating...
                  </>
                ) : (
                  <>
                    <Check className="w-4 h-4" />
                    Save Changes
                  </>
                )}
              </button>
              <button
                type="button"
                onClick={handleCancel}
                disabled={isUpdating}
                className="flex items-center gap-2 px-4 py-2 bg-slate-100 text-slate-700 rounded-lg hover:bg-slate-200 focus:outline-none focus:ring-2 focus:ring-slate-300 focus:ring-offset-2 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed font-medium"
              >
                <X className="w-4 h-4" />
                Cancel
              </button>
            </div>
          </form>
        ) : (
          <div className="space-y-4">
            {/* Name Display */}
            <div>
              <label className="block mb-1 text-sm font-medium text-slate-600 uppercase tracking-wide">Name</label>
              <p className="text-xl text-slate-900 font-semibold">{name}</p>
            </div>

            {/* Phone Number Display */}
            <div>
              <label className="block mb-1 text-sm font-medium text-slate-600 uppercase tracking-wide">Phone Number</label>
              <p className="text-lg text-slate-800 font-mono bg-slate-50 px-3 py-2 rounded-lg inline-block border border-slate-200">
                {phNo}
              </p>
            </div>

            {/* Email Display */}
            <div>
              <label className="block mb-1 text-sm font-medium text-slate-600 uppercase tracking-wide">Email</label>
              <p className="text-lg text-slate-700 break-words">{email}</p>
            </div>
          </div>
        )}
      </div>

      {/* Snackbar for feedback */}
      <Snackbar
        isOpen={snackbar.isOpen}
        message={snackbar.message}
        type={snackbar.type}
        onClose={hideSnackbar}
        position="bottom-right"
        duration={2500}
      />
    </>
  );
};

export default UserCard;