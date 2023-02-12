import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import UserServices from "./services/UserServices";

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

function App() {
  const [users, getUsers] = useState();
  console.log("🚀 ~ file: App.js ~ line 26 ~ App ~ users", users);

  const fecthUser = async () => {
    try {
      const result = await UserServices.getAllUsers();
      getUsers(result);
    } catch (error) {
      console.log("🚀 ~ file: App.js ~ line 31 ~ fecthUser ~ error", error);
    }
  };

  useEffect(() => {
    //logic
    fecthUser();
  }, []);

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell align="right">Name</TableCell>
            <TableCell align="right">Email</TableCell>
            <TableCell align="right">Password</TableCell>
            <TableCell align="right">Update</TableCell>
            <TableCell align="right">Delete</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users &&
            users.docs.map((user) => (
              <TableRow
                key={user._id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {user._id}
                </TableCell>
                <TableCell align="right">{user.name}</TableCell>
                <TableCell align="right">{user.email}</TableCell>
                <TableCell align="right">{user.password}</TableCell>
                <TableCell align="right">
                  <Button variant="contained" color="success">
                    Update
                  </Button>
                </TableCell>
                <TableCell align="right">
                  <Button variant="outlined" color="error">
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default App;
