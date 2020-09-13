


export const mapPropertyFromApiToViewModel =( property, equipmentList) => {
  return {
    id: property.id,
    title: property.title,
    rooms: `${property.rooms} ${getRoomWord(property.rooms)}`,
    squareMeters: `${property.squareMeters}m2`,
    notes: `${property.notes}`,
    price: `${property.price.toLocaleString()}€`,
    address:property.address,
    city: property.city,
    bathrooms:  `${property.bathrooms} ${getBathRoomWord(property.bathrooms)}`,
    images: Array.isArray(property.images) ?  property.images : [],
    mainImage:  property.images[0],
    equipments: equivalentId(property , equipmentList),
    locationUrl: property.locationUrl,
    mainFeatures: property.mainFeatures,
  };
};

export const mapContactFormFromViewModelToApi = contact => {

  return {
    email:contact.email,
    message:contact.message,
  }

};





const getRoomWord= rooms =>{
  return rooms > 1 ? "habitaciones" : "habitacion";
}

const getBathRoomWord= bathrooms => {
  return bathrooms > 1? "baños" : "baño";
}



 const equivalentId = (property, equipmentList) => {
   let equivalent = "";
   equivalent = property.equipmentIds.map(function (obj){

      const find = equipmentList.find(element => element.id === obj);
      return find.name;
   })
   return equivalent;
 }








// const equivalentId = equipments.find(equipment => equipment.id === 1);
// console.log(equivalentId)
