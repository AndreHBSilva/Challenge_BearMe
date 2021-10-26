import axios from 'axios';

export default function BearmeAPI(httpMethod, body) {

  return axios({
    method: httpMethod,
    url: 'https://bearme-api.herokuapp.com/rest/usuario',
    data: body
  });

}