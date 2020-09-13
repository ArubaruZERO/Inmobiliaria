import {onUpdateField,onSetError, onSubmitForm, onAddFile, onSetFormErrors} from "../../common/helpers/element.helpers"
import {formValidation} from "./upload-property.validations"
import {getSaleTypeList, getEquipmentList , getProvinceList, insertUploadData} from "./upload-property.api"
import{setCheckboxList, setOptionList, onAddFeature, formatDeleteFeatureButtonId,onAddImage, onRemoveFeature} from "./upload-property.helpers"
import {mapUploadDataFromVmToApi} from "./upload-property.mapper"

//DATOS GENERALES, RECOGER Y VALIDAR

Promise.all([getSaleTypeList(),getProvinceList(),getEquipmentList()]).then(
  ([saleTypeList, provinceList, equipmentList]) => {
    setCheckboxList(saleTypeList, "saleTypes");
    setOptionList(provinceList, "province");
    setCheckboxList(equipmentList, "equipments")

  }
)


let uploadData = {
  title:"",
  notes:"",
  email:"",
  phone:"",
  price:"",
  saleTypes:"",
  address:"",
  city:"",
  province:"",
  squareMeter:"",
  rooms:"",
  bathrooms:"",
  locationUrl:"",
  feature:[],
  equipment:[],
  images:[],
}


onUpdateField("title", event=>{
  const value = event.target.value;
  uploadData = {
    ...uploadData,
    title:value,
  }
  formValidation.validateField("title", uploadData.title).then(result => {
    return onSetError("title", result)
  })
})




onUpdateField("notes", event=>{
  const value = event.target.value;
  uploadData = {
    ...uploadData,
    notes:value,
  }
  formValidation.validateField("notes", uploadData.notes).then(result=> {
    return onSetError("notes",result)
  })
})



onUpdateField("email", event=>{
  const value = event.target.value;
  uploadData = {
    ...uploadData,
    email:value,
  }
  formValidation.validateField("email", uploadData.email).then(result=> {
    return onSetError("email", result)
  })
})



onUpdateField("phone", event=>{
  const value = event.target.value;
  uploadData = {
    ...uploadData,
    phone:value,
  }
  formValidation.validateField("phone", uploadData.phone).then(result=> {
    return onSetError("phone", result)
  })
})

onUpdateField("price", event=>{
  const value = event.target.value;
  uploadData = {
    ...uploadData,
    price:value,
  }
  formValidation.validateField("price", uploadData.price).then(result=> {
    return onSetError("price", result)
  })
})



onUpdateField("saleTypes", event=>{
  const value = event.target.value;
  uploadData = {
    ...uploadData,
    saleTypes:value,
  }

})






//DATOS VIVIENDA , RECOGER Y VALIDAR



onUpdateField("address", event=> {
  const value= event.target.value;
  uploadData ={
    ...uploadData,
    address: value,
  }
  formValidation.validateField("address", uploadData.address).then(result=> {
    return onSetError("address", result)
  })
})





onUpdateField("city", event=> {
  const value= event.target.value;
  uploadData ={
    ...uploadData,
    city: value,
  }
  formValidation.validateField("city", uploadData.city).then(result=> {
    return onSetError("city", result)
  })
})

onUpdateField("squareMeter", event=> {
  const value= event.target.value;
  uploadData ={
    ...uploadData,
    squareMeter: value,
  }
  formValidation.validateField("squareMeter", uploadData.squareMeter).then(result=> {
    return onSetError("squareMeter", result)
  })
})


onUpdateField("rooms", event=> {
  const value= event.target.value;
  uploadData ={
    ...uploadData,
    rooms: value,
  }
  formValidation.validateField("rooms", uploadData.rooms).then(result=> {
    return onSetError("rooms", result)
  })
})


onUpdateField("bathrooms", event=> {
  const value= event.target.value;
  uploadData ={
    ...uploadData,
    bathrooms: value,
  }
  formValidation.validateField("bathrooms", uploadData.bathrooms).then(result=> {
    return onSetError("bathrooms", result)
  })
})


onUpdateField("province", event=> {
  const value= event.target.value;
  uploadData ={
    ...uploadData,
    province: value,
  }

})



onUpdateField("locationUrl", event=> {
  const value= event.target.value;
  uploadData ={
    ...uploadData,
    locationUrl: value,
  }
  formValidation.validateField("locationUrl", uploadData.locationUrl).then(result=> {
    return onSetError("locationUrl", result)
  })
})







onUpdateField("equipments", event=>{
  const value = event.target.value;
  uploadData = {
    ...uploadData,
    equipment:value,
  }

})





//INSERTAR CARACTERISTICAS Y BORRARLAS


onSubmitForm("insert-feature-button", () => {
  const value = document.getElementById("newFeature").value;
  if (value){
    uploadData= { ...uploadData, feature:[uploadData.feature,value]};
    onAddFeature(value);
  };
  const id = formatDeleteFeatureButtonId(value);
  onSubmitForm(id, () => {
    onRemoveFeature(value);
    const index = uploadData.saleTypes.indexOf(value);
    uploadData.saleTypes.splice(index,1);

  })

});






//INSERTAR FOTOS



onAddFile("add-image", (image) => {

      uploadData= { ...uploadData, image:[ ...uploadData.images,image]};

      onAddImage(image);

  });







//ENVIAR INFORMACION AL SERVIDOR

const onUploadData = () => {
  const apiUploadData = mapUploadDataFromVmToApi(uploadData);
  return insertUploadData(apiUploadData)
}



 onSubmitForm("save-button", ()=> {

  formValidation.validateForm(uploadData).then(result=> {
    onSetFormErrors(result);
    console.log({result})
    if (result.succeeded) {
      onUploadData().then(apiUploadData => {
        history.back
      })

    }
  })
})
