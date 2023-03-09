export const shuffle = (arr: any) => [...arr].sort(() => 0.5 - Math.random());

export const buildUrl = (url: string, params: string) => {
  let urlWithParams = url;
  Object.entries(params).forEach(([key, value], i) => {
    const sign = !i ? "?" : "&";
    urlWithParams += `${sign}${key}=${value}`;
  });
  return urlWithParams;
};

export const sumBy = (arr: any) =>
  arr.reduce((prev: number, cur: number) => prev + cur, 0);
