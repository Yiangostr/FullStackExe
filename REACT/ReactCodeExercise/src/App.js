import './App.css';
import React, { useState, useEffect } from 'react';
function App() {
  // return (
  //   <div className="App">

  //   </div>
  // );
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [])

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <div className="container py-5">
        <table className="table table-bordered p-100 text-center">
          <thead className="thead-dark">
            <tr>
              <th>Item ID</th>
              <th>Item UserId</th>
              <th>Item Title</th>
              <th>Item Completed</th>
            </tr>
          </thead>
          <tbody>
            {
              items.map(item => {
                let uniKey = 'id: ' + item['id'] + ', title: ' + item['title'];
                let mapKey = 0;
                let bkGdColor = item['completed'] ? "bg-success" : "bg-light";
                return <tr key={uniKey} className={bkGdColor}>
                  {
                    Object.keys(item).map(one => {
                      let renderString = item[one];
                      let thisKey = uniKey + ', tdNo: ' + mapKey++;
                      if (one == "completed") renderString = item[one] ? "true" : "false"
                      return <td key={thisKey}>{renderString}</td>
                    })
                  }
                </tr>
              })
            }
          </tbody>
        </table >
      </div >
    );
  }
}

export default App;
