import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../features/user/userSlice";
import { BASE_API_URL } from "../config/api";

const useAuth = () => {
    const [error,setError]=useState("");
    const [loading,setLoading]=useState(false);

    const dispatch=useDispatch();
    const navigate=useNavigate();

    const authenticate=async(form,endpoint)=>{
        setLoading(true);
        setError("");

        const response=await fetch(`${BASE_API_URL}/api/user/${endpoint}`,{
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify(form)
        });

        const json=await response.json();

        if(!response.ok){
            setLoading(false);
            setError(json.error);
        } 

        if(response.ok){
            setLoading(false);
            dispatch(login(json));
            navigate('/dashboard');
        }
    }
    
    return {error,loading,authenticate};
}

export default useAuth;
