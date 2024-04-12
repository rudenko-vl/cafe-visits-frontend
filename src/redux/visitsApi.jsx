import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


export const visitsApi = createApi({
  reducerPath: 'visitsApi',
  tagTypes: ['visits'],
  baseQuery: fetchBaseQuery({
    // baseUrl: 'https://cafe-visits-backend.vercel.app/',
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
    getVisits: build.query({
      query: () => "/visits",
      providesTags: (result) => result
        ? [
          ...result.map(({ id }) => ({ type: 'visits', id })),
          { type: 'visits', id: 'LIST' },
        ]
        : [{ type: 'visits', id: 'LIST' }],
    }),
    newVisit: build.mutation({
      query: (body) => ({
        url: 'visits',
        method: 'POST',
        body,
      }),
      invalidatesTags: [{ type: 'visits', id: 'LIST' }]
    }),
    deleteVisit: build.mutation({
      query: (_id) => ({
        url: `visits${_id}`,
        method: 'DELETE',
      }),
      invalidatesTags: [{ type: 'visits', id: 'LIST' }]
    }),
    // updateOwner: build.mutation({
    //   query: ({ _id, ...owner }) => ({
    //     url: `options/name/${_id}`,
    //     params: owner,
    //     method: "PATCH",
    //     body: owner,
    //   }),
    //   invalidatesTags: [{ type: 'options', id: 'LIST' }],
    // }),
  })
});

export const {useGetVisitsQuery, useDeleteVisitMutation, useNewVisitMutation} = visitsApi;