import * as React from 'react';
import { Table } from 'react-bootstrap';
import { Link } from "react-router-dom";

const AllNews = () => {
  const [array, setArray] = React.useState([]);
    React.useEffect(() => {
      fetch(`/news.json`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        }
      })
      .then(response => response.json())
      .then(data => {
        setArray(data)
        console.log('Success:', data);
      })
      .catch((error) => {
      console.error('Error:', error);
      });
  }, []);

  const renderTR = () => {
    let td: any[] = [];
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