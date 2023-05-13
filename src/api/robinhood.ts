const data =
  "0:10,1:12,2:13,3:14,4:12,5:11,6:10,7:9,8:8,9:7,10:8,11:9,12:10,13:45,14:12,15:14,16:17,17:18,18:19,19:20";

export const fetchData = (): Promise<string> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(data);
    }, 2000);
  });
};
