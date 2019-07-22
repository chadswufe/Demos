import request from '@/utils/request';

export async function queryCurrent() {
  return request('/api/currentUser');
}

export async function queryProvince() {
  return request('/api/geographic/province');
}

export async function queryCity(province) {
  return request(`/api/geographic/city/${province}`);
}

export async function updateCurrentUser(item) {
  return request("/api/currentUser", {
    method: "PATCH",
    data: item,
  });
}
