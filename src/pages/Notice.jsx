import React, { useState } from 'react';
import { firestore } from '../firebase';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { Button, Container, Form } from 'react-bootstrap';
import NoticeView from './NoticeView';

const Notice = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const handleTitleChange = (e) => {
        setTitle(e.target.value);
    };

    const handleContentChange = (e) => {
        setContent(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            // Add the notice to the "notices" collection
            const docRef = await addDoc(collection(firestore, 'notices'), {
                title,
                content,
                timestamp: serverTimestamp(), // Add a server timestamp
            });

            console.log('Notice added successfully with ID: ', docRef.id);

            // Reset the form
            setTitle('');
            setContent('');
        } catch (error) {
            console.error('Error adding notice: ', error);
        }
    };

    const handleClear = () => {
        setTitle('');
        setContent('');
    };

    return (
        <div>
            <Container className="mt-5">
                <h2 className="text-center mb-4">Add Notice</h2>
                <Form onSubmit={handleSubmit} className="mx-auto" style={{maxWidth: '500px'}}>
                    <Form.Group className="mb-3">
                        <Form.Label>Title:</Form.Label>
                        <Form.Control type="text" value={title} onChange={handleTitleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Content:</Form.Label>
                        <Form.Control as="textarea" value={content} onChange={handleContentChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                    </Form.Group>
                    <Button variant="primary" type="submit" className="w-full mb-3">
                        Add Notice
                    </Button>
                    <Button variant="secondary" type="button" onClick={handleClear} className="w-full">
                        Clear
                    </Button>
                </Form>
                <br />
                <hr />
                <h2>Show Notice</h2>
                <NoticeView></NoticeView>
            </Container>
        </div>
    );
};

export default Notice;