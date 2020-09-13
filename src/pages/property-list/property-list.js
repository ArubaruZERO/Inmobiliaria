
// import {
//   mapPropertyListApiToVm,
//   mapFilterToQueryParams,
// } from './property-list.mappers';
// import {
//   getPropertyList,
//   getSaleTypeList,
//   getProvinceList,
// } from './property-list.api';
// import {
//   addPropertyRows,
//   setOptions,
//   clearPropertyRows,
// } from './property-list.helpers';
// import {
//   roomOptions,
//   bathroomOptions,
//   minPriceOptions,
//   maxPriceOptions,
// } from './property-list.constants';
// import { onUpdateField, onSubmitForm } from '../../common/helpers';

// // const [propertyList, saleTypeList, provinceList] = resultList
// Promise.all([getPropertyList(), getSaleTypeList(), getProvinceList()]).then(
//   ([propertyList, saleTypeList, provinceList]) => {
//     loadPropertyList(propertyList);
//     setOptions(saleTypeList, 'select-sale-type', '¿Qué venta?');
//     setOptions(provinceList, 'select-province', '¿Dónde?');
//     setOptions(roomOptions, 'select-room', '¿Habitaciones?');
//     setOptions(bathroomOptions, 'select-bathroom', '¿Cuartos de baño?');
//     setOptions(minPriceOptions, 'select-min-price', 'Min (EUR)');
//     setOptions(maxPriceOptions, 'select-max-price', 'Max (EUR');
//   }
// );

// const loadPropertyList = (propertyList) => {
//   const viewModelPropertyList = mapPropertyListApiToVm(propertyList);
//   addPropertyRows(viewModelPropertyList);
// };

// let filter = {
//   saleTypeId: '',
//   provinceId: '',
//   minRoom: '',
//   minBathRooms: '',
//   minPrice: '',
//   maxPrice: '',
// };

// onUpdateField('select-sale-type', (event) => {
//   const value = event.target.value;
//   filter = {
//     ...filter,
//     saleTypeId: value,
//   };
// });

// onUpdateField('select-province', (event) => {
//   const value = event.target.value;
//   filter = {
//     ...filter,
//     provinceId: value,
//   };
// });

// onUpdateField('select-room', (event) => {
//   const value = event.target.value;
//   filter = {
//     ...filter,
//     minRooms: value,
//   };
// });

// onUpdateField('select-bathroom', (event) => {
//   const value = event.target.value;
//   filter = {
//     ...filter,
//     minBathrooms: value,
//   };
// });

// onUpdateField('select-min-price', (event) => {
//   const value = event.target.value;
//   filter = {
//     ...filter,
//     minPrice: value,
//   };
// });

// onUpdateField('select-max-price', (event) => {
//   const value = event.target.value;
//   filter = {
//     ...filter,
//     maxPrice: value,
//   };
// });

// onSubmitForm('search-button', () => {
//   const queryParams = mapFilterToQueryParams(filter);
//   clearPropertyRows();

//   getPropertyList(queryParams).then((propertyList) => {
//     loadPropertyList(propertyList);
//   });
//   console.log({ filter });
// });












 import {getPropertyList ,getProvinceList, getSaleTypeList} from "./property-list.api";
 import {mapPropertyListFromApiToVm, mapFilterToQueryParams} from "./property-list.mappers";
 import{addPropertyRows, setOptions, clearPropertyRows} from "./property-list.helpers";
 import{roomOptions, bathroomOptions, maxPriceOptions,minPriceOptions} from "./property-list.constants"
 import{onUpdateField, onSubmitForm} from "../../common/helpers/element.helpers";
// //* Con esto se cumpliran todas las promesas y no habra que escribirlas *//
 Promise.all ([getPropertyList(),getSaleTypeList(),getProvinceList()]).then(
   ([propertyList, saleTypeList, provinceList]) => {
//   // const propertyList = resultList[0];
//   // const salesTypeList = resultList[1];
//   // const provinceList = resultList[2];
//   // en vez de esto hacemos un destructuring;
   loadPropertyList(propertyList);
   setOptions(saleTypeList, "select-sale-type", "¿Que venta?");
   setOptions(provinceList, "select-province", "¿Donde?");
   setOptions(roomOptions, "select-room", "¿habitaciones?");
   setOptions(bathroomOptions, "select-bathroom","¿baños?");
   setOptions(maxPriceOptions, "select-max-price","Min(EUR)" );
   setOptions(minPriceOptions, "select-min-price","Max(EUR)" )
   }
 );


  const loadPropertyList = propertyList => {
     const viewModelPropertyList = mapPropertyListFromApiToVm(propertyList);
     addPropertyRows(viewModelPropertyList);
   };



// //recogemos la informacion del filtro

 let filter ={
   saleTypeId:"",
   provideId: "",
   minRooms: "",
   minBathRooms: "",
   minPrice:"",
   maxPrice: "",
 };

 onUpdateField("select-sale-type", event => {
   const value = event.target.value ;
   filter = {
     ...filter,
     saleTypeId: value,
   }
 })

 onUpdateField("select-province", event => {
   const value = event.target.value ;
   filter = {
     ...filter,
     provideId: value,
   }
 })
 onUpdateField("select-room", event => {
   const value = event.target.value ;
   filter = {
     ...filter,
     minRooms: value,
   }
 })

 onUpdateField("select-sale-type", event => {
   const value = event.target.value ;
   filter = {
     ...filter,
     saleTypeId: value,
   }
 })
 onUpdateField("select-bathroom", event => {
   const value = event.target.value ;
   filter = {
     ...filter,
     minBathRooms: value,
   }
 })

 onUpdateField("select-min-price", event => {
   const value = event.target.value ;
   filter = {
     ...filter,
     minPrice: value,
   }
 })

 onUpdateField("select-max-price", event => {
   const value = event.target.value ;
   filter = {
     ...filter,
     maxPrice: value,
   }
 })
 onSubmitForm("search-button", ()=> {
//   //para filtrar hay que mandar la
//   //url http://localhost:1234/api/properties?rooms_gte=${filter.minRooms}
//   //traerselo con un get
   const queryParams = mapFilterToQueryParams(filter);
   clearPropertyRows();//limpiamos el html del resultado anterior antes de añadir las proximas
   getPropertyList(queryParams).then(propertyList=> {
     loadPropertyList(propertyList);//se añadiria las propiedades ya filtradas
   });

   console.log({filter})
 })
