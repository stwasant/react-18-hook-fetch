import axios from 'axios';
import { useEffect, useState } from 'react';
import { InterfaceDataResponse } from '../interfaces/interfaceDataResp';

const useFetch = (url: string) => {
  const [flagLoading, setFlagLoading] = useState<boolean>(false);
  const [flagError, setFlagError] = useState<boolean>(false);
  const [dataSource, setDataSource] = useState<InterfaceDataResponse[]>();

  useEffect(() => {
    const controller = new AbortController();

    const fetchData = async () => {
        try {
          setFlagLoading(true);
          const resp = await axios.get(url, {
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
            signal: controller.signal,
          });
          console.log('resp.data');
          setDataSource(resp.data.data);
          console.log(resp.data);
        } catch (error) {
          setFlagLoading(false);
          setFlagError(true);
        } finally {
          setFlagLoading(false);
        }
      };

     fetchData();

     return () => controller.abort();

  },[url])
  
  return {dataSource, flagLoading, flagError};
};

export default useFetch;
