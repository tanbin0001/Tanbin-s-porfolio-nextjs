import { tagTypes } from '../tag-types';
import { baseApi } from './baseApi';


export const projectApi = baseApi.injectEndpoints({
   endpoints: (build) => ({


      getAllProjects: build.query({
         query: () => ({
            url: `/project/all-projects`,
            method: 'GET'
         }),
         providesTags: [tagTypes.projects]
      }),


      addProject: build.mutation({
         query: (data) => {
            console.log('Data being sent:', data);
            return {
               url: `/project/add-project`,
               method: 'POST',
               body: data, // Use `body` instead of `data`
            };
         },
         invalidatesTags: [tagTypes.projects],
      }),
      updateProject: build.mutation({
         query: ({ _id, body }) => ({
            url: `/project/update-project/${_id}`,
            method: 'PATCH',
            body,
         }),
         invalidatesTags: [tagTypes.projects],
      }),


   }),
});

export const {
   useGetAllProjectsQuery,

   useAddProjectMutation,
   useUpdateProjectMutation
} = projectApi;
