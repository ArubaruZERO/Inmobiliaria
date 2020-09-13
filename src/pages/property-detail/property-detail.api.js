import Axios from "axios"

const url = `${process.env.BASE_API_URL}/properties`;
const urlEquipments= `${process.env.BASE_API_URL}/equipments`;
const urlContact= `${process.env.BASE_API_URL}/contact`;



export const getPropertyDetails = (id) =>
Axios.get(`${url}/${id}`).then(response =>{
  return response.data;
});

export const getEquipment = () =>
Axios.get(urlEquipments).then(response => {
  return response.data;
})

export const insertContact = contact =>
Axios.post(urlContact, contact).then(response => {
  return response.data
})

