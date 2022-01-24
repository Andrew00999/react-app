import React from 'react';
import { useHistory } from 'react-router-dom'
import Button from './UI/Button/Button';

const PostItem = (props) => {

    const router = useHistory();

    return (
        <div className='post'>
            <div className='post__content'>
                <strong>{props.post.id} {props.post.title}</strong>
                <div>
                    {props.post.body}
                </div>
            </div> 
            <div className='post__btns'>
                <Button onClick={() => router.push(`./posts/${props.post.id}`)}>Open</Button>
                <Button onClick={() => props.remove(props.post)}>Delete</Button>
            </div>
        </div>
    )
}

export default PostItem;



