import moment from 'moment'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare, faTrashAlt, faNewspaper } from "@fortawesome/free-regular-svg-icons";
export const Row = ({
	post,
	handleDelete }: {
		post: Post,
		handleDelete: (id: string, defaultTitle: string) => Promise<void>
	}) => {
	const router = useRouter()

	const handleRedirectToForm = () => {
		const { id, defaultTitle, publishedDate, slug } = post
		router.push({
			pathname: '/admin/posts/form',
			query: {
				id,
				defaultTitle,
				publishedDate,
				slug
			}
		})
	}

	const handleRedirectToPostContent = () => {
		const { id } = post
		router.push({
			pathname: '/admin/posts/content',
			query: {
				idPost:id
			}
		})
	}
	return (
		<tr className=''>
			<td className='text-center border border-txt-light dark:border-txt-dark'>{post.defaultTitle}</td>
			<td className='px-4 text-center border border-txt-light dark:border-txt-dark ' > <Link href={`/blog/${post.slug}`}  >{post.slug.length > 20 ? post.slug.slice(0, 20) : post.slug}</Link> </td>
			<td className='text-center border border-txt-light dark:border-txt-dark'>{moment(post.publishedDate).calendar()}</td>
			<td className='flex items-center justify-center gap-1 px-4 text-center border border-txt-light dark:border-txt-dark' >
				<button onClick={handleRedirectToPostContent}><FontAwesomeIcon className='text-xl text-txt-light dark:text-txt-dark hover:text-secondary dark:hover:text-secondary' icon={faNewspaper} /> </button>
				<button onClick={handleRedirectToForm}><FontAwesomeIcon className='text-xl text-txt-light dark:text-txt-dark hover:text-secondary dark:hover:text-secondary' icon={faPenToSquare} /> </button>
				<button onClick={() => handleDelete(post.id, post.defaultTitle)}><FontAwesomeIcon className='text-xl text-txt-light dark:text-txt-dark hover:text-secondary dark:hover:text-secondary' icon={faTrashAlt} /></button>
			</td>
		</tr>
	)
}
