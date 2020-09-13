import Axios from "axios";

const url = `${process.env.BASE_API_URL}/properties` ;
const provinceListUrl = `${process.env.BASE_API_URL}/provinces`;
const saleTypeListUrl = `${process.env.BASE_API_URL}/saleTypes`;
//si vas al package json  en start por
// defecto sale puerto 3000 y es barra api porque pone que todas las rutas apunten a api
// estaria en .env una variable de entorno donde solo se le añadira la pagina con ${} si fuere un se4rvicio real en vez de poner local host 3000 se pondria el dominio
// es mas sencillo ya que no habria que cambiar todos los url de las apis para desplegarlas


export const getPropertyList= (queryParams) =>
  Axios.get(`${url}?${queryParams}`).then(response => {
    return response.data;
  });


export const getSaleTypeList = () =>
  Axios.get(saleTypeListUrl).then(response => {
    return response.data;
  });



export const getProvinceList = () =>
  Axios.get(provinceListUrl).then(response => {
    return response.data;
  });

//! PARA poner el query params es necesario añadirle ? a los bactips
