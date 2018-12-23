import { Table } from 'antd';
import * as React from 'react';
import './App.css';
import logo from './logo.svg';

interface Item {
  id: number;
  attrA: string;
  attrB: string;
  attrC: string;
}
class App extends React.Component {
  public render() {
    /* tslint:disable:object-literal-sort-keys */
    const columns = [
      {
        key: 'id',
        title: 'id',
        dataIndex: 'id',
      },
      { title: 'attrA', key: 'name',  dataIndex: 'attrA'},
      {
        title: 'attrB',
        key: 'required',
        render: (text: string, record: Item) => (record.attrB)
      },
      { title: 'attrC', key: 'name',  dataIndex: 'attrC', align: 'left' },
    ];
    const dataSource:Item[] = [
      {
        id: 1,
        attrA: "1-attrA",
        attrB: "1-attrB",
        attrC: "1-attrC",
      },
      {
        id: 2,
        attrA: "2-attrA",
        attrB: "2-attrB",
        attrC: "2-attrC",
      },
      {
        id: 3,
        attrA: "3-attrA",
        attrB: "3-attrB",
        attrC: "3-attrC",
      }
    ];
    
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
        <Table columns={columns} dataSource={dataSource}/>
        <Table<Item> columns={columns} dataSource={dataSource}/>
      </div>
    );
  }
}

export default App;
