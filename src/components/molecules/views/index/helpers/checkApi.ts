export const isApiOK = (
  isMock: boolean,
  values: {
    local: "failed" | any;
    online: "failed" | any;
  }
) => {
  let isLocalOK = false;
  let isOnlineOK = false;

  if (isMock) return [true, false];
  if (values === undefined || Object.keys(values).length == 0)
    return [false, false];

  if (values.local !== "failed") isLocalOK = true;
  if (values.online !== "failed") isLocalOK = true;

  return [isLocalOK, isOnlineOK];
};
