import axios, { AxiosError } from 'axios';

export class GenericAPI<T extends { id?: string }> {
	constructor(protected url: string) {}

	protected buildOrderString(orderBy: Order[]): string {
		let orderString = 'orderBy=';
		orderBy.forEach((argument) => {
			orderString = orderString + `${argument.by}_${argument.order},`;
		});
		return orderString;
	}

	async create(item: Omit<T, 'id'>): Promise<T | AxiosError | null> {
		try {
			const resp = await axios.post(this.url, item);

			return resp.data as T;
		} catch (error) {
			if (axios.isAxiosError(error)) {
				return error;
			}
			return null;
		}
	}
	async get(
		filters: Partial<T>,
		pagination: Pagination,
		orderBy: Order[]
	): Promise<{
		items: T[];
		totalPages: number;
	} | null> {

		const queryString =  this.buildOrderString(orderBy);
		try {

			const res = await axios.get(
				`${this.url}?${queryString}`,{
					params:{
						...pagination,
						...filters
					},

				}
			);
			return {
				items: res.data.data,
				totalPages: res.data.totalPages,
			};
		} catch (error) {
			return {
				items:[],
				totalPages:0,

			};
		}
	}

	async delete(id: string): Promise<T | AxiosError | null> {
		try {
			const res = await axios.delete(`${this.url}/${id}`);
			return res.data as T;
		} catch (error) {
			if (axios.isAxiosError(error)) {
				return error;
			}
			return null;
		}
	}

	async update(item: T) {
		try {
			const resp = await axios.put(`${this.url}/${item.id}`, item);

			return resp.data as T;
		} catch (error) {
			if (axios.isAxiosError(error)) {
				return error;
			}
			return null;
		}
	}
}
