import axios from 'axios';

const API_URL = import.meta.env.VITE_APP_API_URL;


export const fetchVideos = async () => {
  const response = await axios.get(`${API_URL}/videos`);
  return response.data;
};

export const fetchVideoById = async (id) => {
  const response = await axios.get(`${API_URL}/videos/${id}`);
  return response.data;
};

export const postVideo = async (videoData) => {
  const response = await axios.post(`${API_URL}/videos`, videoData);
  return response.data;
};

