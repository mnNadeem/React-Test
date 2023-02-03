import { Button } from "bootstrap";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import NewCustomer from "./NewCustomer";

export default function Customers() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("/customers")
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.log(error));
  }, []);
  return (
    <div>
      <table className="table">
        <thead className="table-header">
          <tr>
            <th>ID</th>
            <th>NAME</th>
            <th>AGE</th>
          </tr>
        </thead>
        <tbody>
          {data &&
            data.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.age}</td>
                {/* <td> */}
                {/* <PostDescription title={item.title} description={item.body} /> */}
                {/* &nbsp; */}
                {/* <Button onClick={() => handleDelete(item.id)}>Delete</Button> */}
                {/* <Link to={ pathname: `/posts/${item.id}`, state: { myState: 'some value'}} >
                      <Button>Show</Button>
                    </Link> */}
                {/* <Link
                      to={{
                        pathname: `/posts/${item.id}`,
                        state: {
                          title: item.title,
                          description: item.body,
                        },
                      }}
                    >
                      <Button>Show</Button>
                    </Link> */}
                {/* <Button onClick={() => handleShow(item)}> Show Post </Button> */}
                {/* </td> */}
              </tr>
            ))}
        </tbody>
      </table>
      <Link to='/customers/new' >
        <button>Create New Customer</button>
      </Link>
    </div>
  );
}
