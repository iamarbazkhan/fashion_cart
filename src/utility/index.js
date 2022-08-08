const isMenuActive=(path)=>{
    return window.location.pathname.includes(path);
}
const utility={
isMenuActive,
parseResponse
};

function parseResponse(promise) {
    return promise
        .then((data) => {
            return [null, data];
        })
        .catch((err) => [err]);
}

export default utility;

