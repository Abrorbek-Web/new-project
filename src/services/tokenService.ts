const KEY_FOR_REFRESH_TOKEN = "refresh_token";
const KEY_FOR_ACCESS_TOKEN = "access_token";

export const saveAccessToken = (): void => {
  localStorage.setItem(
    KEY_FOR_ACCESS_TOKEN,
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzI1Njg1MDYxLCJpYXQiOjE3MjU0MjU4NjEsImp0aSI6IjFjZDA1YjEwYzk2ZjRiZWViOWEyOTE1Y2M0YWVjNDQ0IiwidXNlcl9pZCI6M30.7wT_JEeAA4NLVBTqLthWRLQ-WSCXD1vfH-CG75Ux_wA"
  );
};

export const saveRefreshToken = (): void => {
  localStorage.setItem(
    KEY_FOR_REFRESH_TOKEN,
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTcyODAxNzg2MSwiaWF0IjoxNzI1NDI1ODYxLCJqdGkiOiJiNGNhMWIxOGEzNGE0MzIxODI1ZmQ1MjQ5NmNmOTNiZiIsInVzZXJfaWQiOjN9.Uqcc7LATFwtF1QV7sy5m7JLGGz717p56uSykdbZxWQA"
  );
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
