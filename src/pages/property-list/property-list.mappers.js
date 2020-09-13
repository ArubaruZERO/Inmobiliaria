


 export const mapPropertyListFromApiToVm = propertyList => {
   return propertyList.map(property => mapPropertyFromApiToVm(property));
 };

 const mapPropertyFromApiToVm = property =>{

   return {
     id: property.id,
     title: property.title,
     rooms: `${property.rooms} ${getRoomWord(property.rooms)}`,
     squareMeters: `${property.squareMeters}m2`,
     notes: `${property.notes.substring(0,240)}...`,
     price: `${property.price.toLocaleString()}€`,
     image: Array.isArray(property.images) ?
       property.images[0] : "",//se hace porque si no es un array no salga error
   };
 };



 const getRoomWord = rooms => {
   return rooms > 1 ? "habitaciones" : "habitacion";
 }


// /*
//   Property{
//     id: string;
//     title:string
//     rooms:string; // 3 habitaciones
//     squareMeter: string; // 136m2
//     notes: string; // truncar 240 chars
//     price: string; // 120.000 €
//     image: string; // 1º image base 64
//   }
// */

 //Hacemos un map para que busque en el json server el & es el interrogante apra añadir otro parametro
 export const mapFilterToQueryParams = filter => {
   let queryParams = "";
   if (filter.saleTypeId) {
     queryParams= `${queryParams}salesTypeIds_like=${filter.saleTypeId}&`
//     //en el array salestype busca el id que te estoy dando yo filter.saleTypeId
   }

   if (filter.provinceId) {
     queryParams=`${queryParams}provinceId=${filter.provinceId}&`

   }
   if (filter.minRooms) {
     queryParams= `${queryParams}rooms_gte=${filter.minRooms}&`;
//     //busca en el array el valor mayor o igual que te doy en el filtro
   }
   if (filter.minBathrooms) {
     queryParams = `${queryParams}bathrooms_gte${filter.minBathrooms}`

   }
   if (filter.minPrice) {
     queryParams = `${queryParams}minPrice_gte=${filter.min.Price}&`
   }
   if (filter.maxPrice) {
     queryParams = `${queryParams}maxPrice_lte=${filter.maxPrice}&`
   }

   return queryParams.slice(0, -1);
 }

