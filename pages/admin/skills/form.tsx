import { CategoryAPI, SkillAPI } from 'api';
import axios, { AxiosError } from 'axios';
import { getErrorMessage, errorModal, successModal, validateFields} from 'helpers';
import { useFetch, useGetAPI, useIsLogged } from 'hooks'
import { useRouter } from 'next/router';
import React, { useRef, useState } from 'react'


const New = () => {
	useIsLogged()
	const router = useRouter()
	const { id, idCategory, name }: Partial<Skill> = router.query
	const skillAPI = useGetAPI(new SkillAPI(`${process.env.NEXT_PUBLIC_API_HOST}/skills`))
	const categoryAPI = useGetAPI(new CategoryAPI(`${process.env.NEXT_PUBLIC_API_HOST}/categories`))

	const { items: categories } = useFetch<Category>(categoryAPI, { currentPage: 1, limit: 10 }, [{ by: 'name', order: 'asc' }])

	const [category, setCategory] = useState(idCategory ? idCategory : '')
	const [errorMessage, setErrorMessage] = useState('')
	const form = useRef<HTMLFormElement | null>(null)

	const handleCategoryChange = (e: { target: { value: any } }) => {
		setCategory(e.target.value)
	}


	const handleCreate = async (e: { preventDefault: () => void; }) => {
		e.preventDefault()

		setErrorMessage('')
		const skillName = form?.current?.skillName.value as string
		const field = validateFields([{
			name: 'Name',
			value: skillName
		},
		{
			name: 'Category',
			value: category
		}
		])

		if (field !== null) {
			setErrorMessage(`${field.name} cannot be empty`)
			return
		}

		const resp = await skillAPI.create({
			idCategory: category,
			name: skillName
		})

		if (!axios.isAxiosError(resp) && resp !== null) {
			successModal(`${resp.name} was created succesfully!`)
			router.push('/admin/skills')
			return
		}

		errorModal(getErrorMessage(resp as AxiosError<any, any>))

	}

	const handleUpdate = async (e: { preventDefault: () => void; }) => {
		e.preventDefault()

		setErrorMessage('')
		const skillName = form?.current?.skillName.value as string
		const field = validateFields([{
			name: 'Name',
			value: skillName
		},
		{
			name: 'Category',
			value: category
		}
		])

		if (field !== null) {
			setErrorMessage(`${field.name} cannot be empty`)
			return
		}

		const resp = await skillAPI.update({
			id: id as string,
			idCategory: category,
			name: skillName
		})

		if (!axios.isAxiosError(resp) && resp !== null) {
			successModal(`${resp.name} was updated succesfully!`)
			router.push('/admin/skills')
			return
		}

		errorModal(getErrorMessage(resp as AxiosError<any, any>))
	}
	return (
		<div className='flex justify-center'>
			<form ref={form} onSubmit={id ? handleUpdate : handleCreate} className='flex flex-col gap-3 px-5 py-4 border rounded-lg border-txt-light dark:border-txt-dark'>

				<h2 className='text-4xl text-center'>{id ? 'Update' : 'Create'}</h2>
				{
					<div className='text-red-600'>{errorMessage}</div>
				}
				<input type="text" placeholder="Name" className='text-xl text-center text-txt-light dark:text-txt-dark' name='skillName' defaultValue={name} />

				<select onChange={handleCategoryChange} defaultValue={idCategory} className='mb-8 text-xl dark:bg-back-dark dark:text-txt-dark bg-back-light text-txt-light' >
					{idCategory ? <option value={idCategory}>{categories.find((category) => (category.id === idCategory))?.name}</option> : <option value="">Category</option>}
					{categories.map((category) => (

						idCategory !== category.id &&
						< option key={`cat-${category.id}`} value={category.id} style={{ color: category.color }} >{category.name}</option>

					))}

				</select>


				<button type='submit' className='p-1 mb-2 text-2xl border rounded-lg border-txt-light dark:border-txt-dark hover:border-secondary dark:hover:border-secondary hover:scale-105'>{id ? 'Update' : 'Create'}</button>

			</form>
		</div >
	)
}

export default New