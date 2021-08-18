import axios from "axios";

const USER_API_BASE_URL = "http://localhost:8082/getAllUsers";
const USER_API_BASE_URL_ADD = "http://localhost:8082/addUser";
const USER_API_BASE_URL_DELETE = "http://localhost:8082/deleteUserById";
const USER_API_BASE_URL_GETBYID = "http://localhost:8082/getUserById";
const USER_API_BASE_URL_UPDATE = "http://localhost:8082/updateInfo";


class AdminService{

    getUsers(){
        return axios.get(USER_API_BASE_URL);
    }
    addUser(user){
        return axios.post(USER_API_BASE_URL_ADD, user);
    }
   getUserById(uid){
    return axios.get( `${USER_API_BASE_URL_GETBYID}/${uid}`);
   }
    deleteUser(uid){
        return axios.delete( `${USER_API_BASE_URL_DELETE}/${uid}`);
    }
    updateUser(user){
        return axios.put(USER_API_BASE_URL_UPDATE, user);
    }

}
export default new AdminService();