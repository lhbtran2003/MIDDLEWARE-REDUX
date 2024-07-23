import React from 'react'
import  {Table , Button} from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css"
import { useSelector } from 'react-redux';
import { IBook } from '../interfaces';
import { RootState } from '../store/store';

export const Book = () => {
  const listBook = useSelector((state: RootState) => state.book)
  return (
    <div>
      <div className="d-flex justify-content-between">
        <p className="fs-3">Quản lí mượn trả sách</p>
        <button>Thêm thông tin</button>
      </div>
      <div>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th className="fw-bold">STT</th>
              <th className="fw-bold">Tên Sách</th>
              <th className="fw-bold">Sinh viên mượn</th>
              <th className="fw-bold">Ngày mượn</th>
              <th className="fw-bold">Ngày trả</th>
              <th className="fw-bold">Trạng thái</th>
              <th className="fw-bold">Chức năng</th>
            </tr>
          </thead>
          <tbody>
            {listBook.map((book,index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{book.bookName}</td>
                <td>{book.author}</td>
                <td>{book.bookPrice}</td>
                <td>{book.content}</td>
                <td>{book.isDeleted ? "đã trả" : "chưa trả"}</td>
                <td className='d-flex gap-3'>
                  <Button>Xóa</Button>
                  <Button>Sửa</Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
}
