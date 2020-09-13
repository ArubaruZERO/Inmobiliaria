import {Validators, createFormValidation } from "@lemoncode/fonk"
import { isUrl } from '@lemoncode/fonk-is-url-validator';
const validationSchema = {
  field:{
    notes:[Validators.required],
    title:[Validators.required],
    email:[
      {
        validator : Validators.email,
        message: "email incorrecto"
      },
      {
        validator: Validators.required,
        message:"introduzca una direccion de correo"
      }
    ],
    phone:[
      {
        validator: Validators.required,
        message:"introduzca un telefono de contacto"
      },
      {
        validator: Validators.pattern,
        customArgs:{ pattern: `^(7|8|9)\\d{9}$` },
        message:"intruduzca un numero de telefono valido"
      }
    ],
    price:[
      {
        validator: Validators.required,
        message:"introduzca el precio"
      },
      {
        validator:Validators.pattern,
        customArgs: {pattern: `^[1-9]*$`}
      }
    ],

    address:[{
      validator:Validators.required,
      message: "introduzca una direccion"
    }],

    squareMeter:[
      {
        validator:Validators.required,
        message:"valor requerido"
      },
      {
        validator: Validators.pattern,
        customArgs:{pattern: `^[1-9]$`}
      },

    ],

    rooms:[
      {
        validator:Validators.required,
        message:"introduzca un numero"
      },
      {
        validator:Validators.pattern,
        customArgs:{pattern: `^[1-9]$`},
        message: "introduzca un valor valido"
      }
    ],
    bathrooms:[
      {
        validator:Validators.required,
        message:"introduzca un numero"
      },
      {
        validator:Validators.pattern,
        customArgs:{pattern: `^[1-9]$`},
        message:"Introduzca un valor valido"
      },
    ],
    locationUrl:[
      {
        validator:Validators.required,
        message: "introduzca una url"
      },
      {
      validator: isUrl.validator,
      message:"ponga una url valida"
    }
    ],


  }
}

export const formValidation = createFormValidation(validationSchema);


