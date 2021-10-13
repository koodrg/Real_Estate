import "./utilitiesList.css";
import { DataGrid } from "@material-ui/data-grid";
import { useState, useEffect} from "react";
import { Link } from 'react-router-dom';
import { DeleteOutline } from "@material-ui/icons";

const handleDelete = (id) => {
  console.log(id)
}

const columns = [
  {field: "id", headerName:"STT", width: 100},
  { field: "_id", hide: true },
  { field: "name", headerName: "Tên tiện ích", width: 400 },
  { field: "type", headerName: "Loại tiện ích", width: 400 },
  {
    field: "action",
    headerName: "Action",
    width: 150,
    renderCell: (params) => {
      return (
        <>
          <Link to={"/admin/utility/" + params.row._id}>
            <button className="categoriesListEdit">Edit</button>
          </Link>
          <DeleteOutline
            className="categoriesListDelete"
            onClick={() => handleDelete(params.row.id)}
          />
        </>
      );
    }
  }
];

const UtilitiesList = () => {
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8080/utilities/all-utilities')
    .then(response => response.json())
    .then(res => {
      const data = res.data;
      const temp = data.map((e, key) => {
        let obj = {id: key}
        return e = {...e, ...obj}
      })
      setTableData(temp);
    }
      
    );
  }, [])

  return (
    <div className="categoriesList">
      <DataGrid
        rows={tableData}
        columns={columns}
        pageSize={6}
        checkboxSelection
      />
    </div>
  );
}

export default UtilitiesList;