import axios from "axios";
const instance=axios.create({
    baseURL:"http://127.0.0.1:5001/mystore-13fa3/us-central1/api" //the API (cloud funtion)  URL
})
export default instance;