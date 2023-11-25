import React, { useEffect, useState } from 'react'
import {firestore} from '../../firebase'
import { collection, getDocs } from '@firebase/firestore';

import { Table } from 'react-bootstrap';

const UserViewAppointment = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const querySnapshot = await getDocs(collection(firestore, 'appointments'));
      // const dataRef = await firestore.collection('appointments').get();
      const tempData = [];
      querySnapshot.forEach(doc => {
        tempData.push(doc.data());
      });
      setData(tempData);
    };
    fetchData();
  }, []);
  return (
    <div>
    <Table striped bordered hover responsive>
    <thead>
          <tr>
            {/* <th>Email</th>
            <th>Name</th> */}
            {/* <th>Role</th> */}
            <th>Phone</th>
            <th>Age</th>
            <th>Faculty</th>
            <th>Batch</th>
            <th>Working Ref</th>
            <th>Working Role Date</th>
            <th>Working Role Time</th>
            <th>Note</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              {/* <td>{item.email}</td>
              <td>{item.name}</td> */}
              {/* <td>{item.role}</td> */}
              <td>{item.phone}</td>
              <td>{item.age}</td>
              <td>{item.faculty}</td>
              <td>{item.batch}</td>
              <td>{item.workingRef}</td>
              <td>{item.workingRoleDate}</td>
              <td>{item.workingRoleTime}</td>
              <td>{item.note}</td>
            </tr>
          ))}
        </tbody>
    </Table>
    </div>
  )
}

export default UserViewAppointment