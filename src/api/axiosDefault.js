import axios from "axios";

axios.defaults.baseURL = 'https://moment-app-5ddf9c7bced4.herokuapp.com/'
axios.defaults.headers.post['Content-Type'] = 'multipart/form-data'
axios.defaults.withCredentials = true