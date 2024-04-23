import { useCallback, useEffect, useState } from 'react';
import { useAppContext } from '../context/AppContext';
import axios from 'axios';
export const useFetch = url => {
  const { token } = useAppContext();
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(undefined);
  const [error, setError] = useState(null);
  const api = axios.create({
    baseURL: `${process.env.REACT_APP_BASE_URL}/api/v1/facebook-clone`,
  });
  const getData = useCallback(async () => {
    setLoading(true);
    try {
      const res = await api.get(url, {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (res.data.success) {
        setData(res.data);
      } else {
        console.log(res);
      }
    } catch (error) {
      // console.log(error);
      setError(error);
    } finally {
      setLoading(false);
    }
  }, [url, token, api]);
  useEffect(() => {
    getData();
  }, [url]);
  return { data, loading, error };
};
