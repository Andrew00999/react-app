

import React, { useEffect, useState } from 'react';
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



function Posts() {

	const [posts, setPosts] = useState([])
	const [filter, setFilter] = useState({ sort: '', query: '' })
	const [modal, setModal] = useState(false)
	const [totalPages, setTotalPages] = useState(0)
	const [limit, setLimit] = useState(10)
	const [page, setPage] = useState(1)
	const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)


	const [fetchPosts, isPostsLoading, postError] = useFetching(async (limit, page) => {
		const response = await PostService.getAll(limit, page)
		setPosts(response.data)
		const totalCount = response.headers['x-total-count']
		setTotalPages(getPageCount(totalCount, limit))
	})

	const createPost = (newPost) => {
		setPosts([...posts, newPost])
		setModal(false)
	}

	useEffect(() => {
		fetchPosts(limit, page)
	}, [page])


	const removePost = (post) => {
		setPosts(posts.filter(p => p.id !== post.id))
	}


	const changePage = (page) => {
		setPage(page)
		fetchPosts(limit, page)
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
			{postError &&
				<h1> Something wrong ${postError} </h1>
			}
			<PostList remove={removePost} posts={sortedAndSearchedPosts} title="Список постов" />
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
