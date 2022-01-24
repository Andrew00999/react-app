import React from 'react';
import PostItem from './PostItem';
import { TransitionGroup, CSSTransition } from 'react-transition-group';


const PostList = ({ posts, title, remove }) => {

    if (!posts.length) {
        return (
            <h1 style={{ textAlign: "center" }}>Упс.. Что-то пошло не так. Посты не найдены!</h1>
        )
    }

    return (
        <div>
            <h1 style={{ textAlign: 'center' }}>{title}</h1>
            <TransitionGroup>
                {posts.map((post, index) =>
                    <CSSTransition
                        key={post.id}
                        timeout={500}
                        classNames="post"
                    >
                        <PostItem remove={remove} post={post} number={index} />
                    </CSSTransition>
                )}
            </TransitionGroup>

        </div>
    )
}

export default PostList;