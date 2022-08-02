// const prod = true;
const prod = false;

export let url;

prod === true
  ? (url = "http://10.255.255.24:9369")
  : (url = "http://localhost:9369");
