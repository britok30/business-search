import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization:
            'Bearer Ha1i-hrJNxHH-HjtAhS64UZXxFTeB6CmOS0wwDxI1AFqKStZ4-F-jKH_Ob5HViSpnrVHk9LSJhhZjlrqO20h_QBTCBj9PaqcRLYxjciN8QcPdXXnAacpT_UNeYUnX3Yx',
    },
});
