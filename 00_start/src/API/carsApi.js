import axios from "axios";

const baseUrl = "http://localhost:3050/api/cars";
const handleError = err => console.log(err);

export const getAllCars = () => {
  return axios
    .get(baseUrl)
    .then(result => {
      const cars = result.data.map(i => i);
      resolve(cars);
    })
    .catch(handleError);
};

export const getCarById = id => {
    return axios
    .get(`${baseUrl}/2`)
    .then(result => {
      const car = result.data.map(i => i).find(c => c.car_id === id);
      resolve(car);
    })
    .catch(handleError);
};

export const addCar = car => {
    axios
    .post(baseUrl)
    .then(() => {
      car["car_id"] = data.length + 1;
      data.push(car);
      resolve("ok");
    })
    .catch(handleError);
};
