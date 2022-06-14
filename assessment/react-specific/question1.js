// ASSESSMENT:
// You will be implementing a table with its content fetched from https://jsonplaceholder.typicode.com/todos?_start=0&_limit=10
// You will use functional components and hooks
// And a simple table styling in question1.css
// An example UI of a working version is presented in question1.gif
//

// BONUS POINT: implement pagination feature with Previous-Next buttons
// _start and _limit are query parameters which you can use to fetch some of the items, which is called 'pagination'
// _limit is always 10 for our case, but _start parameter can be changed to fetch portions of that data


// SOLUTION:
// React and ReactDOM is already imported in index.html

const INITIAL_VALUE = {
  loading: false,
  error: false,
  data: null
};

const ACTION_TYPES = {
  START_FETCH: 0,
  FETCH_SUCCESS: 1,
  FETCH_FAILURE: 2,
};

function reducer(state, action) {
  switch (action.type) {
    case ACTION_TYPES.START_FETCH:
      return {
        ...state,
        loading: true
      };
    case ACTION_TYPES.FETCH_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload
      };
    case ACTION_TYPES.FETCH_FAILURE:
      return {
        ...state,
        loading: false,
        error: true
      };

    default:
      return state;
  }
}

function App() {
  const [state, dispatch] = React.useReducer(reducer, INITIAL_VALUE);
  const [pageNumber, setpageNumber] = React.useState(0);

  React.useEffect(() => {

    dispatch({type: ACTION_TYPES.START_FETCH})

    fetch(`https://jsonplaceholder.typicode.com/todos?_start=`+(pageNumber*10)+`&_limit=10`)
      .then((response) => {
        if(response.ok) {
          return response.json()
        }
        throw new Error("HTTP RESPONSE ERROR")

      })

      .then((json) => dispatch({type: ACTION_TYPES.FETCH_SUCCESS, payload: json}))

      .catch(err => {
        console.log(err);
        dispatch({type: ACTION_TYPES.FETCH_FAILURE})
      })
  }, [pageNumber]);



  return (
    <div>
      {state.loading && <p>Loading ....</p>}
      {state.error && <p>ERROR HAPPENED!!</p>}
      {state.data && 
      <div>

      <table>
        <thead>
          <tr>
          <th>Id</th>
          <th>User Id</th>
          <th>Title</th>
          <th>Completed</th>
          </tr>
        </thead>
        <tbody>
        {state.data.map((val, key) => {
          return (
            <tr key={key}>
              <td>{val.id}</td>
              <td>{val.userId}</td>
              <td>{val.title}</td>
              <td>{val.completed.toString()}</td>
            </tr>
          )
        })}
        </tbody>
      </table>
      <br></br>
      <button disabled={pageNumber===0} onClick={() => setpageNumber(pageNumber - 1)}>Previous</button>
      <button onClick={() => setpageNumber(pageNumber + 1)}>Next</button>

      </div>
    }
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
