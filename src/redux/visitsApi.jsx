import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const visitsApi = createApi({
  reducerPath: "visitsApi",
  tagTypes: ["visits"],
  baseQuery: fetchBaseQuery({
    baseUrl: "https://cafe-backend-alpha.vercel.app/",
    // baseUrl: "http://localhost:5001/",
    refetchOnMountOrArgChange: true,
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.token;
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: (build) => ({
    getVisits: build.query({
      query: () => "/visits",
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: "visits", id })),
              { type: "visits", id: "LIST" },
            ]
          : [{ type: "visits", id: "LIST" }],
    }),
    newVisit: build.mutation({
      query: (body) => ({
        url: "visits",
        method: "POST",
        body,
      }),
      invalidatesTags: [{ type: "visits", id: "LIST" }],
    }),
    deleteVisit: build.mutation({
      query: (_id) => ({
        url: `visits${_id}`,
        method: "DELETE",
      }),
      invalidatesTags: [{ type: "visits", id: "LIST" }],
    }),
  }),
});

export const {
  useGetVisitsQuery,
  useDeleteVisitMutation,
  useNewVisitMutation,
} = visitsApi;
