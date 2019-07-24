import React from "react";
import SearchBar from "./SearchBar";
import youtube from "./api/youtube";
import VideoList from "./VideoList";
import VideoDetail from "./videoDetails";

class App extends React.Component {
  state = {
    videos: [],
    selectedvideo: null
  };

  componentDidMount() {
    this.onTermSubmit("star wars 7");
  }

  onTermSubmit = async term => {
    const response = await youtube.get("/search", {
      params: {
        q: term
      }
    });
    this.setState({
      videos: response.data.items,
      selectedvideo: response.data.items[0]
    });
  };

  onVideoSelect = video => {
    this.setState({ selectedvideo: video });
  };

  render() {
    console.log(this.state.videos);
    return (
      <div className="ui container">
        <h1 className="ui center aligned grid" style={{color:'white', padding:'30px'}}>React with API Youtube <i className="youtube icon"></i></h1>

        <SearchBar onFormSubmit={this.onTermSubmit} />
        <div className="ui stackable grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetail video={this.state.selectedvideo} />
            </div>
            <div className="five wide column">
              <VideoList
                onVideoSelect={this.onVideoSelect}
                videos={this.state.videos}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

// Redux
// console.clear()
// Action Creators
// const createPolicy = (name, amount) => {
//   return{
//     type: 'CREATE_POLICY',
//     payload: {
//       name: name,
//       amount: amount
//     }
//   }
// }

// const deletePolicy = (name) =>{
//   return {
//     type: 'DELETE_POLICY',
//     payload: {
//       name: name
//     }
//   }
// }

// const createClaim = (name, amountOfMoneyToCollect) => {
//   return {
//     type: 'CREATE_CLAIM',
//     payload:{
//       name: name,
//       amountOfMoneyToCollect: amountOfMoneyToCollect
//     }
//   }
// }

// /*Reducer (departement!)*/
// const claimsHistory = (oldListOfClaims = [], action)=>{
//   if(action.type === 'CREATE_CLAIM'){
//    return [...oldListOfClaims, action.payload];
//   }
//   return oldListOfClaims;
// }

// const accounting = (bagOfMoney = 100, action) =>{
//   if (action.type === 'CREATE_CLAIM'){
//     return bagOfMoney - action.payload.amountOfMoneyToCollect;
//   } else if (action.type === 'CREATE_POLICY'){
//     return bagOfMoney + action.payload.amount;
//   }
//   return bagOfMoney;
// }

// const policies = (listOfPolicies = [], action) =>{
//   if(action.type === 'CREATE_POLICY'){
//     return [...listOfPolicies, action.payload.name]
//   } else if (action.type === 'DELETE_POLICY'){
//     return listOfPolicies.filter(name => name !== action.payload.name);
//   }
//   return listOfPolicies;
// }

// const { createStore, combineReducers } = Redux;

// const ourDepartments = combineReducers ({
//   accounting: accounting,
//   claimsHistory: claimsHistory,
//   policies: policies
// })

// const store = createStore(ourDepartments);

// store.dispatch(createPolicy('Alex', 30));
// store.dispatch(createPolicy('Jim', 40));
// store.dispatch(createPolicy('Bob', 60));

// store.dispatch(createClaim('Alex', 60));
// store.dispatch(createClaim('Jim', 20));

// store.dispatch(deletePolicy('Bob'));

// console.log(store.getState());
