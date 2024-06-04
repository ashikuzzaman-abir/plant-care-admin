import mainApi from './mainApi';
import { User, ListType, TableProps } from '../store.types';
import { BASE_LIMIT } from '@/lib/constants';

export const plantApi = mainApi.injectEndpoints({
	endpoints: (builder) => ({
		getAllPlants: builder.query<ListType<any>, TableProps>({
			query: ({
				sort = '-createdAt',
				page = 1,
				limit = BASE_LIMIT,
				search = '',
				isActive,
				filters = {},
			}) => ({
				url: 'plant',
				params: { sort, page, limit, search, isActive, ...filters },
			}),
			providesTags: ['plant'],
		}),
		addPlant: builder.mutation<any, any>({
			query: (body) => ({
				url: 'plant',
				method: 'POST',
				body,
			}),
			invalidatesTags: ['plant'],
		}),
		updatePlant: builder.mutation<any, any>({
			query: ({ id, body }) => ({
				url: `plant/${id}`,
				method: 'PUT',
				body,
			}),
			invalidatesTags: ['plant'],
		}),
		// getCartTotal: builder.mutation<any, any>({
		// 	query: (body) => ({
		// 		url: 'plant/cart-total',
		// 		method: 'POST',
		// 		body,
		// 	}),
		// 	invalidatesTags: ['plant'],
		// }),
	}),
});

export const {
	useGetAllPlantsQuery,
	useAddPlantMutation,
	useUpdatePlantMutation,
} = plantApi;
