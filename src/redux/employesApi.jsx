import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const employesApi = createApi({
  reducerPath: "employesApi",
  tagTypes: ["employes"],
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://cafe-visits-backend.vercel.app/',
    // baseUrl: "http://localhost:5000/",
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
    getEmployes: build.query({
      query: () => "/employes",
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: "employes", id })),
              { type: "employes", id: "LIST" },
            ]
          : [{ type: "employes", id: "LIST" }],
    }),
    newEmployee: build.mutation({
      query: (body) => ({
        url: "employes",
        method: "POST",
        body,
      }),
      invalidatesTags: [{ type: "employes", id: "LIST" }],
    }),
    deleteEmployee: build.mutation({
      query: (_id) => ({
        url: `employes/${_id}`,
        method: "DELETE",
      }),
      invalidatesTags: [{ type: "employes", id: "LIST" }],
    }),
    updateEmployee: build.mutation({
      query: ({ _id, ...employes }) => ({
        url: `/employes/${_id}`,
        params: employes,
        method: "PATCH",
        body: employes,
      }),
      invalidatesTags: [{ type: "employes", id: "LIST" }],
    }),
  }),
});

export const {
  useGetEmployesQuery,
  useDeleteEmployeeMutation,
  useNewEmployeeMutation,
  useUpdateEmployeeMutation,
} = employesApi;
