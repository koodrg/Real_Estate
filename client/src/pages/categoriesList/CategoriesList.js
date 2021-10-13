import "./categoriesList.css";
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
  { field: "cate_name", headerName: "Tên danh mục", width: 400 },
  { field: "cate_type", headerName: "Kiểu danh mục", width: 400 },
  {
    field: "action",
    headerName: "Action",
    width: 150,
    renderCell: (params) => {
      return (
        <>
          <Link to={"/admin/category/" + params.row._id}>
            <button className="categoriesListEdit">Edit</button>
          </Link>
          <DeleteOutline
            className="categoriesListDelete"
            onClick={() => handleDelete(params.row._id)}
          />
        </>
      );
    }
  }
];

const CategoriesList = () => {
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8080/categories/all-category')
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

export default CategoriesList;