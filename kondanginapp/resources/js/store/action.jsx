
const BASE_URL = `${window.location.origin}/api${decodeURIComponent(window.location.pathname)}`

export const getUndangan = () => {
    
   
    return async (dispatch) => {


        let result = await fetch(BASE_URL,{
           method: 'GET',
           headers:{
              'Access-Control-Allow-Origin': '*'
           }
        })
        let dataUndangan = await result.json()

        dispatch({
            type : "GET_UNDANGAN",
            loadingUndangan: false,
            payload: dataUndangan
        })

    }
}