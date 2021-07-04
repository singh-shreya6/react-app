import React from 'react';
import  get  from 'lodash/get';
import Table from 'react-bootstrap/Table';
import forEach from 'lodash/forEach';

 class App extends React.Component {

  constructor(props) {
      super(props);
      this.state = {
        bpi: {},
        time: {}
      };
  }

  componentDidMount() {
    document.title = "Bitcoin Prices";
    fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
    .then(results => {
      return results.json();
    }).then(data => {
        console.log(data);
        const bpi = get(data, 'bpi', {});
        const time = get(data, 'time', {})
        this.setState({
          bpi: bpi,
          time: time
        });
    });
  }

  getTableBody() {
        let tableData = [];
        forEach(this.state.bpi, (data, key) => {
            tableData.push(
                <tr>
                    <td>
                            {data.code}
                    </td>
                    <td>
                            {data.description}
                    </td>
                    <td>
                                {data.rate}
                    </td>
                </tr>
            );
    });
        return tableData;
    }

  getTable() {
        return (
            <Table>
             <thead>
                <tr>
                    <th>Country
                    </th>
                    <th>Description</th>
                    <th>Rate</th>
                </tr>
             </thead>
             <tbody>
                 {this.getTableBody()}
             </tbody>
            </Table>
        );
    }

  render() {
    return (
      <div>
        <h>Bitcoin prices at {this.state.time.updated}</h>
        <div className = "price_table">
        {this.getTable()}
      </div>
    </div>
    );
  }
}

export default App;
