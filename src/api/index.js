import axios from 'axios';
import { API_URL } from './../consts.js';

export const getAllPersons = () => (
    axios.get(`${API_URL}/persons`)
    .then(res => res.data)
);

export const getSinglePerson = (personId) => (
    axios.get(`${API_URL}/persons/${personId}`)
    .then(res => res.data)
//    .catch(err => err)
);

export const postPerson = (personDtata) => (
    axios.post(`${API_URL}/persons`, personDtata)
    .then( res => res.data)
);