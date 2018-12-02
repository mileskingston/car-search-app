const API = 'https://vpic.nhtsa.dot.gov/api/vehicles/getallmakes?format=json';

export const fetchManufacterers = async () => {
  const response = await fetch(API);  
  const json = await response.json();

  if (response.ok) {
    return json;
  }

  const error = {
    ...json,
    status: response.status,
    statusText: response.statusText,
  };

  return Promise.reject(error);
};

// export default fetchManufacterers;