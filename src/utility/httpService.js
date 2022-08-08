//this httpServide file is used for communicate with the rest api .Here we use Axios for the communicatiion
import { httpConstants } from "../constants"
import axios from "axios";
export const httpService = (method, data, headers, url) => {

    //here is the main logic
    const requestOptions = {
        method: method,
        headers: headers || { 'Content-Type': 'application/json',"Access-Control-Allow-Origin": "*" },
        url:url
    };
    //  console.log("request url is >>>>>>>>>>>",requestOptions)
    if (method !== httpConstants.METHOD_TYPE.GET)
        requestOptions.body = JSON.stringify(data);

    axios(requestOptions).then(function handleResponse(response) {
        return response.text().then(text => {
            const data = text && JSON.parse(text);

            if (!data.success) {
                const error = data.responseCode === 404 ? data : (data && data.message) || response.statusText;
                return Promise.reject(error);
            }
            console.log("data in api is =>,><><><>>>>>>>>>",data)
            return data;
        });
    }).catch(function (err) {
        return err;
    });

}