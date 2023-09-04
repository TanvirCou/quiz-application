import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faAt, faLock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { useAuth } from "../../Contexts/AuthContext";
import { Link, useNavigate } from "react-router-dom";


const Form = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [agree, setAgree] = useState("");

  const [error, setError] = useState();
  const [loading, setLoading] = useState();

  const { signup } = useAuth();
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    if (password !== confirmPassword) {
      return setError("Passwords don't match!");
    }

    try {
      setError("");
      setLoading(true);
      await signup(email, password, username);
      navigate("/");
    } catch (err) {
      console.log(err);
      setLoading(false);
      setError("Failed to create an account!");
    }
  }

    return (
        <form action="" className='p-6' onSubmit={handleSubmit}>
            <div className='m-5 flex justify-end items-center'>
            <input type="text" name="" placeholder='Enter name' required value={username} onChange={(e)=>setUsername(e.target.value)} className='w-full h-10 shadow-md rounded-md  placeholder:text-gray-400 placeholder:pl-2 placeholder:font-medium focus:outline-sky-500'/>
            <span className="absolute p-2"><FontAwesomeIcon icon={faUser} /></span>
            </div>
            <div className='m-5 flex justify-end items-center'>
            <input type="email" name="" placeholder='Enter email' required value={email} onChange={(e)=>setEmail(e.target.value)} className='w-full h-10 shadow-md rounded-md placeholder:text-gray-400 placeholder:pl-2 placeholder:font-medium focus:border-sky-500 focus:outline-sky-500'/>
            <span className="absolute p-2"><FontAwesomeIcon icon={faAt}/></span>
            </div>
            <div className='m-5 flex justify-end items-center'>
            <input type="password" name="" placeholder='Enter password' required value={password} onChange={(e)=>setPassword(e.target.value)} className='w-full h-10 shadow-md rounded-md placeholder:text-gray-400 placeholder:pl-2 placeholder:font-medium focus:outline-sky-500'/>
            <span className="absolute p-2"><FontAwesomeIcon icon={faLock}/></span>
            </div>
            <div className='m-5 flex justify-end items-center'>
            <input type="password" name="" placeholder='Confirm password' required value={confirmPassword} onChange={(e)=>setConfirmPassword(e.target.value)} className='w-full h-10 shadow-md rounded-md placeholder:text-gray-400 placeholder:pl-2 placeholder:font-medium focus:outline-sky-500'/>
            <span className="absolute p-2"><FontAwesomeIcon icon={faLock}/></span>
            </div>
            <div className='mt-5 ml-5'>
                <input type="checkbox" name="" id="" required value={agree} onChange={(e)=>setAgree(e.target.value)}/>
                <span className='text-gray-600 pl-2 font-medium'>I agree to the Terms &amp; Conditions</span>
            </div>
            <div className='my-2 mx-5'>
            <button type='submit' disabled={loading} className='w-full h-12 shadow-md rounded-md bg-green-500 hover:bg-green-600'>
                <span className='text-gray-700 font-semibold'>SUBMIT NOW</span>
            </button>

            {error && <p className="w-full h-12 shadow-md rounded-md bg-red-400 mt-2 pt-3 text-center"><span>{error}</span></p>}
            
            </div>
            <div className='text-center text-gray-600 font-medium mt-2'>
            Already have an account? <Link to="/login" className='text-blue-600'>Login</Link> instead.
            </div>
        </form>
    );
};

export default Form;