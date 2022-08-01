import qs from "qs";
import axios from "axios";

const CLIENT_ID = "401ec9da56da1df";
const ROOT_URL = "https://api.imgur.com";

export default {
    login() {
        const querystring = {
            client_id: CLIENT_ID,
            response_type: 'token'
        };
        window.location = `${ROOT_URL}/oauth2/authorize?${qs.stringify(
            querystring
        )}`;

        //the actual api query string url
//https://api.imgur.com/oauth2/authorize?
// client_id=${CLIENT_ID}
// &response_type=REQUESTED_RESPONSE_TYPE
// &state=APPLICATION_STATE

//callback url upon return from imgur
//http://localhost:8080/oauth2/callback#
// access_token=93d846d1481774795cdf0f465097a64b6682be2c
// &expires_in=315360000
// &token_type=bearer
// &refresh_token=2951349e88c07f0b01a051073a12a63501890590
// &account_username=xine75
// &account_id=164281917

    },
    fetchImages(token){
        return axios.get(`${ROOT_URL}/3/account/me/images`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
    },
    uploadImages(images, token){
        const promises = Array.from(images).map(image => {
            const formData = new FormData();
            formData.append("image", image);
            return axios.post(`${ROOT_URL}/3/image`, formData, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
        });
        return Promise.all(promises);
    }
};



