import { IStudent } from './../../interfaces/student';
import { createAsyncThunk, createSlice, isFulfilled, isPending } from "@reduxjs/toolkit";
import axios from "axios";
import { IStudent } from "../../interfaces/student";

//taọ ra các action để call API
//hàm lấy dữ liệu về
export const getAllStudent: any = createAsyncThunk("students/getAllStudent", async () => {
    // call API ở đây
    let res = await axios.get("http://localhost:9999/student")
    return res.data;
})

export const createStudent: any = createAsyncThunk("students/createStudent", async(data: IStudent[]) => {
    let res = await axios.post("http://localhost:9999/student", data)
    return res.data
})

export const deleteStudent: any = createAsyncThunk("student/deleteStudent", async(studentId: number) => {
    await axios.delete(`http://localhost:9999/${studentId}`)
    return studentId
})

export const updateStudent: any = createAsyncThunk("student/updateStudent", async ({ id, data }: { id: number, data: IStudent }) => {
    let res = await axios.put(`http://localhost:9999/student/${id}`, data);
    return { id, data: res.data };
} )

const studentSlice = createSlice({
    name: "students",
    initialState: {
        data:[],
        isLoading: false,
    },
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(getAllStudent.pending, (state, action) => {
                console.log("đang call API...");
               state.isLoading = true
                

            }).addCase(getAllStudent.fulfilled, (state, action) => {
                console.log("call API thành công");
                console.log(action.payload);
                state.isLoading = false
                state.data = action.payload
                

            }).addCase(getAllStudent.rejected, (state, action) => {
                console.log(action);


            })
            .addCase(createStudent.pending, (state, action) => {
                console.log("đang call API...");
              
                

            }).addCase(createStudent.fulfilled, (state, action) => {
                console.log("call API thành công");
                console.log(action.payload);
                state.isLoading = false
                const newStudent = action.payload as never
                state.data = [...state.data, newStudent]
                

            }).addCase(createStudent.rejected, (state, action) => {
                console.log(action);


            }).addCase(deleteStudent.pending, (state) => {
                console.log("đang call API...");
                state.isLoading = true;
            })
            .addCase(deleteStudent.fulfilled, (state, action) => {
                console.log("call API thành công");
                console.log(action.payload);
                state.isLoading = false;
                state.data = state.data.filter((student: IStudent) => student.id !== action.payload.id);
            })
            .addCase(deleteStudent.rejected, (state, action) => {
                console.log("call API thất bại");
                console.log(action);
                state.isLoading = false;
            }).addCase(updateStudent.pending, (state, action) => {
                console.log("đang call API...");
                state.isLoading = true
            }).addCase(updateStudent.fulfilled, (state, action) => {
                console.log("call API thành công");
                console.log(action.payload);
                state.isLoading = false;
                const { id, data } = action.payload
                state.data = (state.data.map((student: IStudent) =>
                    student.id === id ? data : student
                )) as never
            })
    }

})

export const { reducer } = studentSlice