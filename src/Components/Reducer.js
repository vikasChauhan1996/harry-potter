import {FETCH_CHARACTERS,FETCH_STUDENTS,FETCH_STAFF} from './Action';


const initialState = {
    charactersName :[]
};
const initialStudents ={
    studentsList:[]
};
const initialStaff = {
    staff:[]
}

export const allCharacters = (state=initialState,action)=>{
    switch (action.type) {
        case FETCH_CHARACTERS:
            return{...state, charactersName: action.payload}
            break;
        default:
            return state;
            
    }
};

export const allStudents = (state=initialStudents,action)=>{
    switch (action.type) {
        case FETCH_STUDENTS:
            return{...state, studentsList: action.payload}
            break;
    
        default:
            return state;
    }

};

export const getStaff = (state=initialStaff, action )=>{
    switch (action.type) {
        case FETCH_STAFF:
            return{...state, staff: action.payload }
            break;
    
        default:
            return state;
    }

}
