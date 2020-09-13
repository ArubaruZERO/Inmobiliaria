import Axios from "axios"

const saleTypeUrl = `${process.env.BASE_API_URL}/saleTypes`;
const provinceListUrl = `${process.env.BASE_API_URL}/provinces`;
const equipmentListUrl=`${process.env.BASE_API_URL}/equipments`;
const url = `${process.env.BASE_API_URL}/properties`;

export const getSaleTypeList = () =>
Axios.get(saleTypeUrl).then(response => {
  return response.data
})

export const getProvinceList = () =>
Axios.get(provinceListUrl).then(response => {
  return response.data
})


export const getEquipmentList= ()=>
Axios.get(equipmentListUrl).then(response => {
  return response.data
})


export const insertUploadData = uploadData =>
  Axios.post(url,uploadData).then(response => {
    return response.data
  });
