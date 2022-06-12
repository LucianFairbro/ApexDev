import "./userList.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { userRows } from "../../dummyData";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function UserList() {
  const [data, setData] = useState(userRows);


  
  const columns = [
    { field: "id", headerName: "Video", width: 150 ,height:250,color:'white'},
    {color:'white',
      field: "user",
      headerName: "Creator",
      width: 200,innerHeight:30000,
      renderCell: (params) => {
        return (
          <div className="userListUser">
            <img className="userListImg1" src={params.row.avatar} alt="" />
            <img className="userListImg1" src={params.row.clip} alt="" />
            
            {params.row.username}
          </div>
        );
      },
    },
    
    {
      field: "clip",
      headerName: "Clip",
      width: 120,
      color:'white',
      
    }, {
      field: "status",
      headerName: "Status",
      width: 120,
      color:'white',
      
    },
    
    {
      field: "action",
      headerName: "Action",
      width: 150,color:'white',
      renderCell: (params) => {
        return (
          <>
            <a href="https://www.youtube.com/watch?v=-NMPRjX9_fQ">
              <button className="userListEdit">Watch Video</button>
              </a>
            
          </>
        );
      },
    },
  ];

  return (
    <div className="userList">
      <DataGrid
        rows={data}
        disableSelectionOnClick
        columns={columns}
        color='white'
        pageSize={8}
        checkboxSelection
      />
    </div>
  );
}
