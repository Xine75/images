import qs from "qs";

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
    }
}
//the actual api query string url
//https://api.imgur.com/oauth2/authorize?
// client_id=${CLIENT_ID}
// &response_type=REQUESTED_RESPONSE_TYPE
// &state=APPLICATION_STATE
