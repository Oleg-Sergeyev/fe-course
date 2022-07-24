import * as React from 'react';
import { Table } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { useQuery } from '@tanstack/react-query';

const AllNews = () => {
  const [array, setArray] = React.useState([]);

const { isLoading, data, error } = useQuery([],() =>
  fetch(`/news.json`,{
  method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
  })
  .then(response => response.json())
)

  React.useEffect(() => {
    if (isLoading) {
      return
    }
    if (error) {
      console.error('Error:', error);
      return;
    }
      setArray(data);
      localStorage.setItem("AllNews", JSON.stringify(data));
  },[isLoading, data, error])

  const renderTR = () => {
    let td = [];
    for (let i = array.length - 1; i >= 0; i -= 1) {
      td.push(<tr key={i}>
                <td><span className='news-tr-td'><Link to={`/news/${array[i]["id"]}`}>{array[i]["date"]}</Link></span></td>
                <td><span className='news-tr-td'><Link to={`/news/${array[i]["id"]}`}>{array[i]["header"]}</Link></span></td>
                <td><span className='news-tr-td'><Link to={`/news/${array[i]["id"]}`}>{array[i]["simple_rating"]}</Link></span></td>
              </tr>);
    }
    return td;
  };
  
  return (
    <div>
      <Table className='table table table-striped table'>
        <tbody>
            {renderTR()}
        </tbody>
      </Table>
    </div>
  );
}
export default AllNews;