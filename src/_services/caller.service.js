/* Import des modules nécessaires */
import axios from 'axios';
import { accountService } from '@/_services';

const Axios = axios.create({
    baseURL: 'http://localhost:5173/'
});

export default Axios;