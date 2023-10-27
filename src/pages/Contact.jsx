import React, { useEffect, useState, useRef } from 'react'
import { collection, getDocs, doc, updateDoc, deleteDoc  } from '@firebase/firestore';
import { firestore } from '../firebase';
import { Button } from 'react-bootstrap';

const Contact = () => {
  const [userData, setUserData] = useState([]);

  //edit mode
  const [editMode, setEditMode] = useState(null);
  const nameRef = useRef(null);
  const ageRef = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      const querySnapshot = await getDocs(collection(firestore, 'users'));
      const data = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setUserData(data);
    };

    fetchData();
  }, [editMode]);

  //edit mode
  const handleEdit = (id) => {
    setEditMode(id);
  }

  const handleSave = async (id, newName, newAge) => {
    try {
      await updateDoc(doc(firestore, 'users', id), {
        name: newName,
        age: newAge
      });
      setEditMode(null);
      editMode();
    } catch (error) {
      console.error('Error updating document: ', error);
    }
  }

  //delete mode
  const handleDelete = async (id) => {
    try {
      await deleteDoc(doc(firestore, 'users', id));
      const updatedData = userData.filter(user => user.id !== id);
      setUserData(updatedData);
    } catch (error) {
      console.error('Error deleting document: ', error);
    }
  }
  return (
    <div>
      {/* <h1>View Data</h1>
      <ol type='1'>
        {userData.map(user => (
          <li key={user.id}>
            Name: {user.name}, Age: {user.age}
          </li>
        ))}
      </ol> */}


      <h1>View Data</h1>
      <ol type='1'>
        {userData.map(user => (
          <li key={user.id}>
            {editMode === user.id ? (
              <div>
                <input type="text" defaultValue={user.name} ref={nameRef} />
                <input type="text" defaultValue={user.role} ref={ageRef} />
                <button onClick={() => handleSave(user.id, nameRef.current.value, ageRef.current.value)}>Save</button>
              </div>
            ) : (
              <div>
                Name: {user.name}, Age: {user.role === "1" ? 'Student' : user.role === "2" ? 'Lectur' : 'Other'}
                <Button onClick={() => handleEdit(user.id)}>Edit</Button>
                <Button variant="danger" onClick={() => handleDelete(user.id)}>Delete</Button>
              </div>
            )}
          </li>
        ))}
      </ol>
    </div>
  )
}

export default Contact