import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


export const optionsApi = createApi({
  reducerPath: 'optionsApi',
  tagTypes: ['options'],
  baseQuery: fetchBaseQuery({
    // baseUrl: 'https://backend-tsd.vercel.app/',
    baseUrl: "http://localhost:5000/",
    refetchOnMountOrArgChange: true,
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.token;
      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }
      return headers;
    }
  }),
  endpoints: (build) => ({
    getNames: build.query({
      query: () => "/options/name",
      providesTags: (result) => result
        ? [
          ...result.map(({ id }) => ({ type: 'options', id })),
          { type: 'options', id: 'LIST' },
        ]
        : [{ type: 'options', id: 'LIST' }],
    }),
    newOwner: build.mutation({
      query: (body) => ({
        url: 'options/name',
        method: 'POST',
        body,
      }),
      invalidatesTags: [{ type: 'options', id: 'LIST' }]
    }),
    getPlaces: build.query({
      query: () => "/options/place",
      providesTags: (result) => result
        ? [
          ...result.map(({ id }) => ({ type: 'options', id })),
          { type: 'options', id: 'LIST' },
        ]
        : [{ type: 'options', id: 'LIST' }],
    }),
    newPlace: build.mutation({
      query: (body) => ({
        url: 'options/place',
        method: 'POST',
        body,
      }),
      invalidatesTags: [{ type: 'options', id: 'LIST' }]
    }),
    deletePlace: build.mutation({
      query: (_id) => ({
        url: `options/place/${_id}`,
        method: 'DELETE',
      }),
      invalidatesTags: [{ type: 'options', id: 'LIST' }]
    }),
    deleteOwner: build.mutation({
      query: (_id) => ({
        url: `options/name/${_id}`,
        method: 'DELETE',
      }),
      invalidatesTags: [{ type: 'options', id: 'LIST' }]
    }),
    updateOwner: build.mutation({
      query: ({ _id, ...owner }) => ({
        url: `options/name/${_id}`,
        params: owner,
        method: "PATCH",
        body: owner,
      }),
      invalidatesTags: [{ type: 'options', id: 'LIST' }],
    }),
  })
});

export const { useGetNamesQuery, useNewOwnerMutation, useNewPlaceMutation, useGetPlacesQuery, useDeletePlaceMutation, useDeleteOwnerMutation, useUpdateOwnerMutation } = optionsApi;