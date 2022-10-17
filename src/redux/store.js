import { createStore, combineReducers } from 'redux';
import initialState from './initialState';
import listsReducer from './listsRedux';
import columnsReducer from './columnsRedux';
import cardsReducer from './cardsRedux';
import searchStringReducer from './searchStringReducer';
import shortid from 'shortid';



// const reducer = (state, action) => {
//     console.log(action);
//     switch(action.type) {
//         case 'ADD_COLUMN': 
//             return {...state, columns: [...state.columns, action.payload]};
//         case 'ADD_CARD': 
//         console.log('ADD_CARD');
//             return { ...state, cards: [...state.cards, action.payload]};
//         case 'ADD_LIST': 
//             return {...state, lists: [...state.lists, action.payload]};
//         case 'UPDATE_SEARCHSTRING':
//             return {...state, searchString: action.payload };
//         case 'FAVORITE_CARD':
//             return { ...state, cards: state.cards.map(card => (card.id === action.payload) ? { ...card, isFavorite: !card.isFavorite } : card)};
//         default: 
//             return state;
//     }
// };

// const listsReducer = (statePart = [], action) => {
//     switch(action.type) {
//         case 'ADD_LIST': 
//             return [...statePart, { ...action.payload, id: shortid()}];
//         default: 
//             return statePart;
//     }
// }

// const columnsReducer = (statePart = [], action) => {
//     switch(action.type) {
//         case 'ADD_COLUMN':
//             return [...statePart, { ...action.payload, id: shortid()}];
//         default: 
//         return statePart; 
//     }
// }

// const cardsReducer = (statePart = [], action) => {
//     switch(action.type) {
//         case 'ADD_CARD':
//           return [...statePart, { ...action.payload, id: shortid()}];
//         case 'FAVORITE_CARD':
//           return statePart.map(card => (card.id === action.payload) ? {...card, isFavorite: !card.isFavorite } : card);
//         default: 
//           return statePart;
//     }
// }

// const searchStringReducer = (statePart = '', action) => {
//     switch(action.type) {
//         case 'UPDATE_SEARCHSTRING': 
//           return action.payload
//         default: 
//           return statePart;
//     }
// }

const subreducers = {
    lists: listsReducer,
    columns: columnsReducer,
    cards: cardsReducer,
    searchString: searchStringReducer
};
const reducer = combineReducers(subreducers);

const store = createStore(
    reducer, 
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__&& window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store; 