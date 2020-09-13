export const  mapUploadDataFromVmToApi = uploadData =>{
  return{
    title: uploadData.title,
    notes: uploadData.notes,
    email: uploadData.email,
    phone: uploadData.phone,
    price:  `${uploadData.price}-€`,
    salesTypes: uploadData.salesTypes,
    address: uploadData.address,
    city: uploadData.city,
    province: uploadData.province,
    squareMeter: `${uploadData.squareMeter}-m2` ,
    rooms: uploadData.rooms,
    bathrooms: uploadData.bathrooms,
    locationUrl: uploadData.locationUrl,
    feature: uploadData.feature,
    equipment: uploadData.equipment,
    images:uploadData.images,
  }
};


