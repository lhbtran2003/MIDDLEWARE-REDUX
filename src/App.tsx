import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useDispatch } from "react-redux";
import { createStudent, getAllStudent, updateStudent } from "./store/slice/StudentSlice";
import { IStudent } from "./interfaces/student";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
  //   console.log("tien hanh...");
  //   dispatch(getAllStudent());

    // thêm mới
    const newStudent: IStudent[] = [
      {
      id: 1,
      name: "btran dưỡng thê",
      dob: "20032005",
      gender: false
    },
      {
      id: 2,
      name: "btran dưỡng thê",
      dob: "20032005",
      gender: false
    }
  ]

   const updatedStudent: IStudent = {
     id: 1,
     name: "btran updated",
     dob: "20032006",
     gender: true,
   };

   dispatch(updateStudent({ id: "1", data: updatedStudent }));

  });
  return <></>;
}

export default App;
