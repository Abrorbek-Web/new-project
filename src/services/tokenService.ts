const KEY_FOR_REFRESH_TOKEN = "refresh_token";
const KEY_FOR_ACCESS_TOKEN = "access_token";

// export const saveAccessToken = (): void => {
//   localStorage.setItem(
//     KEY_FOR_ACCESS_TOKEN,
//     "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzI1NzcwMDAzLCJpYXQiOjE3MjU1MTA4MDMsImp0aSI6IjQzMzBkNWE2Njc1YTRkMWJiNDZiZmY1ODkxMjFlMzE0IiwidXNlcl9pZCI6M30.Oli92slImMEISnKgJHD0JfVzL4NcH3cyf9Fx0nd3kg8"
//   );
// };

// export const saveRefreshToken = (): void => {
//   localStorage.setItem(
//     KEY_FOR_REFRESH_TOKEN,
//     "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTcyODEwMjgwMywiaWF0IjoxNzI1NTEwODAzLCJqdGkiOiI0ZDhmOThlNGU2NzM0N2JhODA2NTljZjZmNzExYzVlNiIsInVzZXJfaWQiOjN9.U-CYYJ7HhMwhPdSJmsxpfUqsT_u2TuHipBiwaWq0CPQ"
//   );
// };

export const saveAccessToken = (value: string): void => {
  localStorage.setItem(KEY_FOR_ACCESS_TOKEN, value);
};
export const saveRefreshToken = (value: string): void => {
  localStorage.setItem(KEY_FOR_REFRESH_TOKEN, value);
};
export const deteleRefreshToken = (): void => {
  localStorage.removeItem(KEY_FOR_REFRESH_TOKEN);
};

export const deteleAccessToken = (): void => {
  localStorage.removeItem(KEY_FOR_ACCESS_TOKEN);
};

export const getAccessToken = (): string | null => {
  return localStorage.getItem(KEY_FOR_ACCESS_TOKEN);
};

export const getRefreshToken = (): string | null => {
  return localStorage.getItem(KEY_FOR_REFRESH_TOKEN);
};
