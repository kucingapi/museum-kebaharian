import { axiosResponse } from './../api/interface/response';

export const getDataFromAxios = <data>(response: axiosResponse<data>) => 
  response.data.data;
