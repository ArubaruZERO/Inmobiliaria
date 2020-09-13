import {Validators, createFormValidation} from '@lemoncode/fonk'


const validationSchema = {
  field: {
    email:[
      {
        validator: Validators.required,
        message:"email no valido"
      },
      {
        validator: Validators.email,
        message:"email no valido"
      }
    ],
    message:[ Validators.required]
  }
}

export const formValidation = createFormValidation(validationSchema);
