export default function (dataString) {
  const data = new Date(dataString);
  return data.getDate() + '-' + (data.getMonth() + 1) + '-' + data.getFullYear();
}
