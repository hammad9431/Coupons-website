import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";

function VerifyOtp() {

  const navigate = useNavigate();
  const location = useLocation();

  const [otp, setOtp] = useState("");

  const email = location.state?.email;

  // 🔒 Agar email nahi hai to direct redirect
  if (!email) {
    navigate("/forgot-password");
    return null;
  }

  const handleVerify = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "http://localhost:2000/api/auth/verify-otp",
        { email, otp }
      );

      alert(res.data.message);

      navigate("/reset-password", { state: { email } });

    } catch (error) {
      alert(error.response?.data?.message || "Invalid OTP");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <form onSubmit={handleVerify} className="bg-white p-6 shadow-md rounded">
        <h2 className="text-xl font-bold mb-4">Verify OTP</h2>

        <input
          type="text"
          placeholder="Enter OTP"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
          className="border p-2 w-full mb-4"
          required
        />

        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 w-full"
        >
          Verify OTP
        </button>
      </form>
    </div>
  );
}

export default VerifyOtp;