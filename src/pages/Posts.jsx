

import React, { useEffect, useState, useRef } from 'react';
import { usePosts } from '../hooks/usePosts';
import { useFetching } from '../hooks/useFetching';
import PostFilter from '../components/PostFilter';
import PostForm from '../components/PostForm';
import PostList from '../components/PostList';
import Button from '../components/UI/Button/Button';
import MyModal from '../components/UI/MyModal/MyModal';
import PostService from '../API/PostService';
import Loader from '../components/UI/Loader/Loader';
import { getPageCount, getPagesArray } from '../utils/pages';
import Pagination from '../components/UI/pagination/Pagination';
import { useObserver } from '../hooks/useObserver';
import MySelect from '../components/UI/Select/MySelect';



function Posts() {

	const [posts, setPosts] = useState([])
	const [filter, setFilter] = useState({ sort: '', query: '' })
	const [modal, setModal] = useState(false)
	const [totalPages, setTotalPages] = useState(0)
	const [limit, setLimit] = useState(10)
	const [page, setPage] = useState(1)
	const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)
	const lastElement = useRef()

	console.log(lastElement)


	const [fetchPosts, isPostsLoading, postError] = useFetching(async (limit, page) => {
		const response = await PostService.getAll(limit, page)
		setPosts([...posts, ...response.data])
		const totalCount = response.headers['x-total-count']
		setTotalPages(getPageCount(totalCount, limit))
	})

	useObserver(lastElement, page < totalPages, isPostsLoading, () => {
		setPage(page + 1)
	})

	useEffect(() => {
		fetchPosts(limit, page)
	}, [page, limit])

	const createPost = (newPost) => {
		setPosts([...posts, newPost])
		setModal(false)
	}


	const removePost = (post) => {
		setPosts(posts.filter(p => p.id !== post.id))
	}


	const changePage = (page) => {
		setPage(page)
	}

	return (
		<div className='App'>
			<Button onClick={() => setModal(true)}>Add Post</Button>
			<MyModal
				visible={modal}
				setVisible={setModal}
			>
				<PostForm create={createPost} />
			</MyModal>
			<PostFilter
				filter={filter}
				setFilter={setFilter}
			/>
			<MySelect 
				value={limit}
				onChange={value => setLimit(value)}
				defaultValue="Количество элементов на странице..."
				options={[
					{value: 5, name: '5'},
					{value: 10, name: '10'},
					{value: 25, name: '25'},
					{value: -1, name: ' show all'},
				]}
			/>
			{postError &&
				<h1> Something wrong ${postError} </h1>
			}
			<PostList remove={removePost} posts={sortedAndSearchedPosts} title="Список постов" />
			<div ref={lastElement} style={{ height: "2rem", background: "teal", margin: "1rem 0" }} />
			{isPostsLoading &&
				<Loader />
			}
			<Pagination
				page={page}
				changePage={changePage}
				totalPages={totalPages}
			/>
		</div>
	);
}

export default Posts;
