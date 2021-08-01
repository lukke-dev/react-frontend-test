/* eslint-disable no-param-reassign */
import Axios from 'axios';

const baseUrl = 'https://api-test-fullstack.herokuapp.com/players/';

export const getPlayers = async (id) => {
  id = id || '';
  return Axios.get(`${baseUrl}/${id}`);
};

export const addplayer = async (player) => Axios.post(`${baseUrl}/add`, player);

export const deleteplayer = async (id) => Axios.delete(`${baseUrl}/${id}`);

export const editplayer = async (id, player) =>
  Axios.put(`${baseUrl}/${id}`, player);

export const getTranfers = async () => Axios.get(`${baseUrl}/tranfers/show`);

export const addTranfer = async (tranfer) =>
  Axios.post(`${baseUrl}/tranfers/new`, tranfer);

export const deleteTranfer = async (id) =>
  Axios.delete(`${baseUrl}/transfers/${id}`);
