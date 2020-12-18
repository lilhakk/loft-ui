export const randomString = length=> {
  let res = '';
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charsLength = chars.length;
  for (let i = 0; i < length; i++) {
    res += chars.charAt(Math.floor(Math.random() * charsLength));
  }
  return res;
};

export const getNumOfPer = (num, per)=> num * (per / 100) || 0;
export const getPerOfNum = (num, full)=> (num / full) * 100 || 0;
