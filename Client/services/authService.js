import BaseService from "./baseService";

export function GetcustomerList(data) {
  return BaseService.get(`/get-customer-info`, data);
}

export function GetProductList(data) {
  return BaseService.get(
    `/get-order?minDate=${data.minDate}&&maxDate=${data.maxDate}&&commission=${data.commission}&&tag=${data.tag}`
  );
}

export function addArtistData(data) {
  return BaseService.post(`set-artist-data`, data);
}

export function GetArtistList(data) {
  return BaseService.post(`/get-artist-data`, data);
}

export function deleteArtistData(data) {
  return BaseService.post(`/delete-artist-data`, data);
}

export function editArtistData(data) {
  return BaseService.post(`/edit-artist-data`, data);
}
export function setInvoice(data) {
  return BaseService.post(`/set-invoice`, data);
}
export function getInvoice(data, page) {
  return BaseService.post(`/get-invoice?customer_Id=${data}&&page=${page}`);
}

export function uploadPdf(data) {
  return BaseService.post(`/upload`, data);
}
