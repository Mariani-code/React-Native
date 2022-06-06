import "./userList.css";
import { DataGrid } from "@material-ui/data-grid";
import {DeleteOutline} from "@material-ui/icons" 

export default function UserList() { 
    const columns = [
        { field: 'id', headerName: 'ID', width: 90 },
        { field: 'user', headerName: 'Submitted By', width: 200, renderCell: (params)=>{
            return (
                <div className="userListUser">
                    <img className="userListImg" src={params.row.avatar} alt=""/>
                    {params.row.username}
                </div>
            )
        }  },
        { field: 'email', headerName: 'Category', width: 200 },
        {
          field: 'status',
          headerName: 'Technology',
          width: 220,
        },
        {
            field: 'transaction',
            headerName: 'Edit',
            width: 150, 
            renderCell: (params)=>{
                return(

                    <>
                    
                    
                    <button className="userListEdit">Edit</button>
                    <DeleteOutline className="userListDeleted"/>

                    </>


                )
            }
          },
          {
            field: 'date',
            headerName: 'Date Submitted',
            width: 220,
          },
          {
            field: 'description',
            headerName: 'Description',
            width: 520,
          },
         
 
      ];
      
      const rows = [
        { id: 1, username: 'Kiran Narcisse', avatar: "https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", email: "General Tech", status: "Small Scale Nuclear", description: "Reduces cost and construction risk by moving more into factory assembly", date: "June 02, 2022"  },
        { id: 2, username: 'Goda Joel', avatar: "https://images.pexels.com/photos/837358/pexels-photo-837358.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", email: "General Tech", status: "Direct air CO2 Capture", description: "Possibly a critical part of the net zero energy system. Can locate anywhere, way more flexible than CCS", date: "May 13, 2022"  },
        { id: 3, username: 'Kara Eva', avatar: "https://images.pexels.com/photos/762080/pexels-photo-762080.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", email: "Battery Tech", status: "High Nickel NMC", description: "Non-invasice, fast metrology for amterials which cannot traditionally...", date: "May 03, 2022" },
        { id: 4, username: 'Evelina Olavi', avatar: "https://images.pexels.com/photos/5975035/pexels-photo-5975035.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", email: "General Tech", status: "Drone Fire Suppression", description: "While lithium is not a scarce element, extracting ....", date: "Apr 21, 2022"  },
        { id: 5, username: 'Rufus Skadi', avatar: "https://images.pexels.com/photos/762527/pexels-photo-762527.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", email: "Battery Tech", status: "Advanced LiB Analytics", description: "Handles hydrogen but also methanol, natural gas and even biofuels...", date: "Apr 6, 2022" },
        { id: 6, username: 'Shubham Azaliya', avatar: "https://images.pexels.com/photos/1181542/pexels-photo-1181542.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", email: "Battery Tech", status: "Iron Air", description: "Fast medium voltage, working with organizations like....", date: "Mar 22, 2022" },
        { id: 7, username: 'Ona Leo', avatar: "https://images.pexels.com/photos/39866/entrepreneur-startup-start-up-man-39866.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", email: "General Tech", status: "Flex Fuel Cells", description: "Nano-cell foam used for thermal and fire protection for lithium-ion batt.....", date: "Feb 12, 2022" },
        { id: 8, username: 'Theodoar Lhamo', avatar: "https://images.pexels.com/photos/5710683/pexels-photo-5710683.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", email: "General Tech", status: "Aerogel Insulation", description: "Very new industry, involved clean tech and found it interesting in general...", date: "Feb 02, 2022" },
        { id: 9, username: 'Jaylen Kelleigh', avatar: "https://images.pexels.com/photos/4049516/pexels-photo-4049516.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", email: "Battery Tech", status: "ALD Coatings", description: "Distributed Hydrogen production based on compact solar hydrogen panels", date: "Jan 20, 2022" },
        { id: 10, username: 'Ren Samppa', avatar: "https://images.pexels.com/photos/3417403/pexels-photo-3417403.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", email: "General Tech", status: "3D Computed Tomograpy", description: "Scientists from  MIT's computer Science and Artitifical Intelligence Labor....", date: "Jan 13, 2022" },

        
       
      ];

    return (
        <div className="userList">
             <DataGrid rows={rows} disableSelectionOnClick columns={columns} pageSize={8}  rowsPerPageOptions={[5]} checkboxSelection/>
        </div>
    );
}

