import {getPropertyDetails, getEquipment, insertContact} from "./property-detail.api"
import{history} from "../../core/router/history"
import{mapPropertyFromApiToViewModel, mapContactFormFromViewModelToApi} from "./property-detail.mapper"
import {setPropertyValues} from "./property-detail.helpers"
import{onSubmitForm, onUpdateField, onSetError, onSetFormErrors } from "../../common/helpers/element.helpers"
import{formValidation} from "./property-detail.validations"
const params = history.getParams();

 Promise.all([getPropertyDetails(params.id) ,getEquipment()]).then(
    ([apiPropertyDetails,apiEquipments]) => {
      const viewPropertyDetails = mapPropertyFromApiToViewModel(apiPropertyDetails, apiEquipments);
      setPropertyValues(viewPropertyDetails)
 })





 //Guardar datos del formulario
 //crear validaciones


 let contact = {
   email:"",
   message:"",
 }

 onUpdateField("email", event => {
   const value = event.target.value;
   contact= {
     ...contact,
     email : value
   }
   formValidation.validateField("email", contact.email).then(result => {
    onSetError("email", result)
  })
 })

onUpdateField("message", event => {
  const value = event.target.value;
  contact= {
    ...contact,
    message: value
  }
   formValidation.validateField("message", contact.message).then(result =>{
     onSetError("message", result)
   })
})






const onContact = ()=> {
 const apiContact = mapContactFormFromViewModelToApi(contact);
 return insertContact(apiContact)
}



onSubmitForm("contact-button", ()=> {
  console.log({contact})
  formValidation.validateForm(contact).then(result=> {
    onSetFormErrors(result);
    if (result.succeeded) {
      onContact().then(apiContact => {
        history.back
      })

    }
  })
})
