import * as React from 'react';
import { Table } from 'react-bootstrap';

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
      td.push(<tr key={i}><td>{array[i]["date"]}</td><td>{array[i]["header"]}</td></tr>);
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