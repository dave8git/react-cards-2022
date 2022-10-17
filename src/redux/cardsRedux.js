import shortid from 'shortid';
import { stringsEqual } from '../utils/strContains';

//selectors 
export const getFilteredCards = ({ cards, searchString }, columnId) => cards.filter(card => card.columnId === columnId && stringsEqual(card.title, searchString));
export const getFavoriteCard = (state) => state.cards.filter(card => card.isFavorite === true);

//actions
const createActionName = actionName => `app/lists/${actionName}`;
const ADD_CARD = createActionName('ADD_CARD');
const FAVORITE_CARD = createActionName('FAVORITE_CARD');
const REMOVE_CARD = createActionName('REMOVE_CARD');

//action creators
export const addCard = payload => ({type: ADD_CARD, payload});
export const favoriteCard = payload => ({type: FAVORITE_CARD, payload});
export const removeCard = payload => ({type: REMOVE_CARD, payload});

const cardsReducer = (statePart = [], action) => {
    switch(action.type) {
        case ADD_CARD:
          return [...statePart, { ...action.payload, id: shortid()}];
        case FAVORITE_CARD:
          return statePart.map(card => (card.id === action.payload) ? {...card, isFavorite: !card.isFavorite } : card);
        case REMOVE_CARD: 
            return  statePart.filter(card => card.id !== action.payload);
        default: 
          return statePart;
    }
}

export default cardsReducer;