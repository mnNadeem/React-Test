import React, { useEffect, useState } from "react";
import PostDescription from "./PostDescription";
import styled from "styled-components";
import { Button } from "react-bootstrap";
import { Link, Navigate, useNavigate } from "react-router-dom";

const TableConatainer = styled.div`
  margin: 50px;
`;

const Posts = () => {
  const [data, setData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.log(error));
  }, []);

  const handleDelete = (id) => {
    const newData = data.filter((data) => data.id !== id);
    setData(newData);
  };

  const handleShow = ({ id, title, body }) => {
    navigate(`/posts/${id}`, { state: { title, body } });
  };

  return (
    <TableConatainer>
      <table className="table">
        <thead className="table-header">
          <tr>
            <th>ID</th>
            <th>USER ID</th>
            <th>TITLE</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data &&
            data.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.userId}</td>
                <td>{item.title}</td>
                <td>
                  <PostDescription title={item.title} description={item.body} />
                  &nbsp;
                  <Button onClick={() => handleDelete(item.id)}>Delete</Button>
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
                  <Button onClick={() => handleShow(item)}> Show Post </Button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </TableConatainer>
  );
};

export default Posts;
