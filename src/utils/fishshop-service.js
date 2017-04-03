import axios from 'axios';

export function checkBasket(items) {

  const instance = axios.create({
    headers: {'Content-Type': 'application/json'}
  });

  return instance.post(process.env.REACT_APP_FISHSHOP_API, {
      fish: items,
    })
    .then(response => {
      return response.data.canLiveTogether;
    })
}
