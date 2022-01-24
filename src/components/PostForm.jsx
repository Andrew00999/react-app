import React, { useState } from 'react';
import Button from './UI/Button/Button';
import Input from './UI/input/Input';


const PostForm = ({create}) => {

    const [postObject, setPostObject] = useState({ title: '', body: '' })

    const addNewPost = (event) => {
        event.preventDefault();

        const newPost = {
            ...postObject, id: Date.now()
        }
        create(newPost)
        setPostObject({
            title: '',
            body: ''
        })
    }

    return (
        <form>
            <Input
                holder="Title"
                value={postObject.title}
                onChange={event => setPostObject({ ...postObject, title: event.target.value })}
            />
            <Input
                holder="Body"
                value={postObject.body}
                onChange={event => setPostObject({ ...postObject, body: event.target.value })}
            />
            <Button onClick={addNewPost}>Add</Button>
        </form>
    )
}

export default PostForm;