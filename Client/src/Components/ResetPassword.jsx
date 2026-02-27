import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";

function ResetPassword() {

  const navigate = useNavigate();
  const location = useLocation();

  const [newPassword, setNewPassword] = useState("");

  const email = location.state?.email;

  // 🔒 Agar email nahi mila to wapas bhejo
  if (!email) {
    navigate("/forgot-password");
    return null;
  }

  const handleReset = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "http://localhost:2000/api/auth/reset-password",
        { email, newPassword }
      );

      alert(res.data.message);

      // ✅ Redirect to SignIn page
      navigate("/signin");

    } catch (error) {
      alert(error.response?.data?.message || "Error resetting password");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <form onSubmit={handleReset} className="bg-white p-6 shadow-md rounded w-80">
        <h2 className="text-xl font-bold mb-4 text-center">
          Reset Password
        </h2>

        <input
          type="password"
          placeholder="Enter New Password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          className="border p-2 w-full mb-4"
          required
        />

        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 w-full"
        >
          Reset Password
        </button>
      </form>
    </div>
  );
}

export default ResetPassword;