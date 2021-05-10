// /* eslint-disable @typescript-eslint/no-use-before-define */
import * as React from 'react';
import { DataGrid } from '@material-ui/data-grid';
import {  Button } from 'antd';
import {
  randomCreatedDate,
  randomTraderName,
  randomUpdatedDate,
} from '@material-ui/x-grid-data-generator';

export default function EditRowModelControlGrid() {
  const [editRowsModel, setEditRowsModel] = React.useState({});

  const handleEditRowModelChange = React.useCallback((params) => {
    setEditRowsModel(params.model);
   console.log(JSON.stringify(editRowsModel), '---------console.')
  }, []);

  return (
    <div style={{ width: '100%' }}>
      <code>editRowsModel: {JSON.stringify(editRowsModel)}</code>
      <div style={{ height: 400, width: '100%' }}>

        <DataGrid
          rows={rows}
          columns={columns}
          editRowsModel={editRowsModel}
          onEditRowModelChange={handleEditRowModelChange}
        />
                    <Button key="Cadastrar" type="primary" onClick={console.log(handleEditRowModelChange)}>
                        Cadastrar
              </Button>,
      </div>
    </div>
  );
}

const columns = [
  { field: 'name', headerName: 'Name', width: 180, editable: true },
  { field: 'age', headerName: 'Age', type: 'number', editable: true },
  {
    field: 'dateCreated',
    headerName: 'Date Created',
    type: 'date',
    width: 180,
    editable: true,
  },
  {
    field: 'lastLogin',
    headerName: 'Last Login',
    type: 'dateTime',
    width: 220,
    editable: true,
  },
];

const rows = [
  {
    id: 1,
    name: randomTraderName(),
    age: 25,
    dateCreated: randomCreatedDate(),
    lastLogin: randomUpdatedDate(),
  },
  {
    id: 2,
    name: randomTraderName(),
    age: 36,
    dateCreated: randomCreatedDate(),
    lastLogin: randomUpdatedDate(),
  },
  {
    id: 3,
    name: randomTraderName(),
    age: 19,
    dateCreated: randomCreatedDate(),
    lastLogin: randomUpdatedDate(),
  },
  {
    id: 4,
    name: randomTraderName(),
    age: 28,
    dateCreated: randomCreatedDate(),
    lastLogin: randomUpdatedDate(),
  },
  {
    id: 5,
    name: randomTraderName(),
    age: 23,
    dateCreated: randomCreatedDate(),
    lastLogin: randomUpdatedDate(),
  },
];