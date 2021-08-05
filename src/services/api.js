/* eslint-disable no-param-reassign */
import Axios from 'axios';
import { toast } from 'react-toastify';

const baseUrl = 'https://api-test-fullstack.herokuapp.com/players';

export const getPlayers = async (id) => {
  if (id) return Axios.get(`${baseUrl}/find/${id}`).then((resp) => resp.data);
  return Axios.get(`${baseUrl}/`).then((resp) => resp.data);
};

export const getPlayersByQuery = async (query) => {
  if (!query)
    return Axios.get(`${baseUrl}/?page=1&limit=3`).then((resp) => resp.data);
  return Axios.get(`${baseUrl}/${query}`).then((resp) => resp.data);
};

export const getByName = async (playerName) => {
  const name = playerName.replace('/listone', '');

  return Axios.get(`${baseUrl}/name${name}`).then((resp) => resp.data);
};

export const addPlayer = async (player) => {
  try {
    await Axios.post(`${baseUrl}/add`, player);
    return toast.info('Jogador criado com sucesso!');
  } catch (err) {
    toast.error('Nome do jogador já existe!');
    return 'error';
  }
};

export const addTranfer = async (tranfer) => {
  try {
    await Axios.post(`${baseUrl}/transfers/new`, tranfer);
    return toast.info('Transferência realizada com sucesso!');
  } catch (err) {
    return 'error';
  }
};

export const deletePlayer = async (id) => Axios.delete(`${baseUrl}/${id}`);

export const editPlayer = async (id, player) =>
  Axios.put(`${baseUrl}/${id}`, player);

export const getTransfers = async () => Axios.get(`${baseUrl}/transfers/show`);

export const deleteTranfer = async (id) =>
  Axios.delete(`${baseUrl}/transfers/${id}`);
