// app/utils/loadStatus.js
export const loadStatus = (function(){
    let error, response;
    const promise = new Promise((resolve) =>
        setTimeout(resolve, 3000)
    )
        .then(() => (response = "success"))
        .catch(e => (error = e));
    return function(){
        if(error) throw error;
        if(response) return response;
        throw promise;
    };
})();