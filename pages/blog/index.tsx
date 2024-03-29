
import React from 'react'
import { PostCard, PostList } from 'components/post'
import { useFetch, useGetAPI } from 'hooks'
import { PostAPI } from 'api'
import { Pagination } from 'components/general'

const Blog = () => {
	const postAPI = useGetAPI(new PostAPI(`${process.env.NEXT_PUBLIC_API_HOST}/posts`))
	const { items: posts, setPagination, totalPages, pagination } = useFetch<Post>(
		postAPI,
		{ currentPage: 1, limit: 4 },
		[{ by: "publishedDate", order: "desc" }]
	)

	return (
		<div className='flex flex-col justify-'>
			<PostList>

				{posts.map(({ defaultTitle, publishedDate, slug, id }) => (

					<PostCard key={`post-${id}`} defaultTitle={defaultTitle} publishedDate={publishedDate} slug={slug} id={id} />

				))}

			</PostList>
			<div className='flex justify-center'>

				<Pagination pagination={pagination} setPagination={setPagination} totalPages={totalPages} />

			</div>
		</div>
	)
}

export default Blog