import React, { Component, Image } from 'react';
import { Link, BrowserRouter } from 'react-router-dom'
import { Modal, Button, Select, Tabs, Table, DatePicker } from 'antd';
import { Input } from 'antd';

const dateFormat = 'YYYY/MM/DD';
const monthFormat = 'YYYY/MM';

const dateFormatList = ['DD/MM/YYYY', 'DD/MM/YY'];

const { TextArea } = Input;

const columns = [
    {
      title: 'Data',
      dataIndex: 'name',
    },
    {
      title: 'Cargo',
      dataIndex: 'age',
    },
    {
      title: 'Salario',
      dataIndex: 'address',
    },
  ];
  
  const data = [];
  for (let i = 0; i < 46; i++) {
    data.push({
      key: i,
      name: `01/01/200${i}`,
      age: `Analista de Dados ${i}`,
      address: `R$ 50${i},00`,
    });
  }

class HistFunc extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedRowKeys: [], // Check here to configure the default column
      loading: false,
      data: '05/09/1964',

       }
       this.start = this.start.bind(this)
       this.onSelectChange = this.onSelectChange.bind(this)
       this.convertData = this.convertData.bind(this)
  }
  convertData(str) {
    var date = new Date(str),
        mnth = ("0" + (date.getMonth() + 1)).slice(-2),
        day = ("0" + date.getDate()).slice(-2);
    return [day,mnth,date.getFullYear()].join("/");
}
  start = () => {
    this.setState({ loading: true });
    // ajax request after empty completing
    setTimeout(() => {
      this.setState({
        selectedRowKeys: [],
        loading: false,
      });
    }, 1000);
  };

  onSelectChange = selectedRowKeys => {
    console.log('selectedRowKeys changed: ', selectedRowKeys);
    this.setState({ selectedRowKeys });
  };

  render() {
    const { loading, selectedRowKeys } = this.state;
    const rowSelection = {
      selectedRowKeys,
      onChange: this.onSelectChange,
    };
    const hasSelected = selectedRowKeys.length > 0;
    return (
      <div>
            <table>
              <tr>
                  <th>
                    Data:
                    <DatePicker format={dateFormatList}
                                    onChange={(e) => {if(e!==null) {this.setState({ 'data': this.convertData(e._d) })}}} />
                    </th>
                    <th>
                      Cargo:
                      <Input placeholder="Cargo:" />
                      </th>
                  <th>
                    Salario:
                    <Input placeholder="Salario:" />
                    </th>
                    </tr>
                
                </table>
                <div>
        <div style={{ marginBottom: 16 }}>
          <Button type="primary" onClick={this.start} disabled={!hasSelected} loading={loading}>
            Insere  
          </Button><>  </>
          <Button type="primary" onClick={this.start} disabled={!hasSelected} loading={loading}>
            Exclui  
          </Button>
          <span style={{ marginLeft: 8 }}>
            {hasSelected ? `Selected ${this.state.selectedRowKeys.length} items` : ''}
          </span>
        </div>
        <Table rowSelection={rowSelection} columns={columns} dataSource={data} />
      </div>
          </div>
          )
}
}
export default HistFunc;