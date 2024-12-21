import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async () => {
    const response = await fetch("https://bulkback.onrender.com/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });

    if (response.ok) {
      alert("Successfully Login")

      navigate("/bulkmail");
    } else {
      setError("Invalid username or password.");
    }
  };

  return (
    <div>
      <div className="bg-cyan-900 text-white text-center p-8">
        <h1 className="text-5xl font-medium px-5 py-3">Welcome to BulkMail</h1>
        </div>
        <div className="bg-cyan-800 text-white text-center p-8">

        </div>
        <div  className="bg-cyan-600 text-white text-center p-8"></div>

        <div className="bg-cyan-400 flex flex-col items-center text-black p-10">
          <input
            type="text"
            placeholder="Username"
            onChange={(e) => setUsername(e.target.value)}
            className="border-4  py-4 px-4  mb-2"
          />
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            className="border-4  py-4 px-4 mb-2"
          />
          <button
            onClick={handleLogin}
            className="mt-2 bg-blue-950 py-3 px-3 text-white font-bold rounded-md w-fit text-xl"
          >
            Login
          </button>
          {error && <p className="text-red-500">{error}</p>}
        </div>
        <div className="bg-cyan-300 text-center p-8">
        <p className=" text-lg">
          Don't have an account? <Link to="/signup" className="text-rose-900 font-extrabold underline text-lg">Sign up</Link>
        </p>      

       </div>
       <div className="bg-cyan-200 text-white text-center p-12"></div>
        
      
    </div>
  );
}

export default Login;
