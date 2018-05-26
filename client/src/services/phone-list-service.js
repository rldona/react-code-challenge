export const getPhoneList = () => {
  let endPoint = `http://localhost:3000/phones`;

  return fetch(endPoint)
    .then(response => response.json())
    .catch(error => {
      console.error(error);
    });
}