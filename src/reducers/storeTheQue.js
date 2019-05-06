export default (questions=[],action) => {
    switch(action.type){
        case 'GET_TRIVIA':{
            return [questions,...action.payload];
        }
        default :{
            return questions;
        }

    }

}

