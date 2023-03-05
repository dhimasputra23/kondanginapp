
const BASE_URL = `${window.location.origin}/api${decodeURIComponent(window.location.pathname)}`

export const getUndangan = () => {
    
   
    return async (dispatch) => {
        console.log('Api Undangan', BASE_URL);

        let result = await fetch(BASE_URL,{
           method: 'GET',
           headers:{
              'Access-Control-Allow-Origin': '*'
           }
        })
        let dataUndangan = await result.json()
        console.log("Response", result);
        console.log("data undangan",dataUndangan);

        dispatch({
            type : "GET_UNDANGAN",
            loadingUndangan: false,
            payload: dataUndangan
        })

    }
}