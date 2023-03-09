import { applyMiddleware, createStore } from 'redux'
import thunx from 'redux-thunk'

const initialState = {
    undangan: [],
    loadingUndangan: true,
    errorMessage: null,
    profilPasangans: [],
    subAcaras: [],
    akad: null,
    resepsi: null,
    pria : null,
    wanita : null,
    tamu: null,


}

const reducer = (state = initialState, action ) => {
    switch (action.type) {
        case "GET_UNDANGAN":
            let undanganData = action.payload ? action.payload : []
            let mempelaiPria = '';
            let mempelaiWanita = '';
            let akad = '';
            let resepsi ='';
            let tamu ='';
            if (action.payload) {
                ///pasangan
                if (action.payload.data.profilPasangans[0].kelamin =="Pria") {
                    mempelaiPria = action.payload.data.profilPasangans[0].nama
                    mempelaiWanita = action.payload.data.profilPasangans[1].nama
                }else if (action.payload.data.profilPasangans[1].kelamin =="Pria") {
                    mempelaiPria = action.payload.data.profilPasangans[1].nama
                    mempelaiWanita = action.payload.data.profilPasangans[0].nama
                }

                if(action.payload.data.subAcaras[0].nama == "Akad Nikah"){

                    akad = action.payload.data.subAcaras[0].tempat
                    resepsi = action.payload.data.subAcaras[1].tempat

                } else if(action.payload.data.subAcaras[1].nama == "Resepsi"){
                    akad = action.payload.data.subAcaras[1].tempat
                    resepsi = action.payload.data.subAcaras[0].tempat
                }

                if(action.payload.data.tamu != null){
                    tamu = action.payload.data.tamu
                }
                

            }
            
            return {
                ...state,
                undangan : undanganData,
                pria : mempelaiPria,
                wanita : mempelaiWanita,
                akad: akad,
                tamu: tamu,
                loadingUndangan: action.loadingUndangan,
                errorMessage: action.errorMessage
            }
            
    
        default:
            return state
    }
}

let store = createStore(reducer, applyMiddleware(thunx))

export default store