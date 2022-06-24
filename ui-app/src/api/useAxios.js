/* eslint-disable react-hooks/exhaustive-deps */
import { useState } from "react";
import axios from "axios";

// axios.defaults.baseURL = process.env.REACT_APP_SERVER_BASE_URL;

const useAxios = () => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  const fetchData = async (params) => {
    setLoading(true);
    try {
      const result = await axios.request(params);
      setResponse(result);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };
  return { response, error, loading, fetchData };
};

export default useAxios;
