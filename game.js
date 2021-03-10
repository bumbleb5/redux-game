const initialWagonState = {
    supplies: 100,
    distance: 0,
    days: 0,
    cash: 200
  };
  
  const wagonReducer = (state = initialWagonState, action) => {
    switch (action.type) {
      case 'gather': {
        return {
          ...state,
          supplies: state.supplies + 15,
          days: state.days + 1
        };
      };
      case 'travel' : {
        if (state.supplies < (20 * action.payload)) {
          console.log('You don\'t have enough supplies to travel!');
          return {...state};
        }
        return {
          ...state,
          supplies: state.supplies - (20 * action.payload),
          distance: state.distance + (10 * action.payload),
          days: state.days + action.payload
        };
      };
      case 'tippedWagon' : {
        return {
          ...state,
          supplies: state.supplies - 30,
          days: state.days + 1
        };
      };
      case 'sell': {
        return {
          ...state,
          cash: state.cash + 5,
          supplies: state.supplies - 20
        };
      };
      case 'buy': {
        return {
          ...state,
          cash: state.cash - 15,
          supplies: state.supplies + 25
        };
      };
      case 'theft': {
        return {
          ...state,
          cash: Math.floor(state.cash / 2)
        };
      };
      default: {
        return state;
      };
    }
  };
  
//initializing
let wagon = wagonReducer(undefined, {});
console.log(wagon);

//traveled 1 day
wagon = wagonReducer(wagon, {type: 
'travel', payload: 1});
console.log(wagon);

//gathered 1 day
wagon = wagonReducer(wagon, {type: 'gather'});
console.log(wagon);

//oh no, the wagon tipped over!
wagon = wagonReducer(wagon, {type: 'tippedWagon'});
console.log(wagon);

//3 days of travel
wagon = wagonReducer(wagon, {type: 'travel', payload: 3});
console.log(wagon);

//can't travel anymore, insufficient supplies!
wagon = wagonReducer(wagon, {type: 'travel', payload: 1});
console.log(wagon);

  //up and going, gathered for a few days
wagon = wagonReducer(wagon, {type: 'gather'});
console.log(wagon);
wagon = wagonReducer(wagon, {type: 'gather'});
console.log(wagon);
wagon = wagonReducer(wagon, {type: 'gather'});
console.log(wagon);

//sell some supplies
wagon = wagonReducer(wagon, {type: 'sell'});
console.log(wagon);

//got robbed
wagon = wagonReducer(wagon, {type: 'theft'});
console.log(wagon);
  