const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MzEsImlhdCI6MTY3NzUxMjUzOCwiZXhwIjoxNjgwMTA0NTM4fQ.dNJ1HbUNMuVyEgf_fEyj_KHPkkvho1yqEnkFI8FcCL4';

export const params = {
  headers: {
    Authorization: `Bearer ${token}`,
    Accept: 'application/json, text/plain, */*',
  },
};
