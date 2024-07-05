import { tagTypes } from '../tag-types';
import { baseApi } from './baseApi';


export const blogApi = baseApi.injectEndpoints({
    endpoints: (build) => ({


        getAllBlogs: build.query({
            query: () => ({
                url: `/blog/all-blogs`,
                method: 'GET'
            }),
            providesTags: [tagTypes.blogs]
        }),


        addBlog: build.mutation({
            query: (data) => {
                console.log('Data being sent:', data);
                return {
                    url: `/blog/add-blog`,
                    method: 'POST',
                    body: data,
                };
            },
            invalidatesTags: [tagTypes.blogs],
        }),
        // updateProject: build.mutation({
        //     query: ({ _id, body }) => ({
        //         url: `/project/update-project/${_id}`,
        //         method: 'PATCH',
        //         body,
        //     }),
        //     invalidatesTags: [tagTypes.projects],
        // }),


    }),
});

export const {
    useGetAllBlogsQuery,
    useAddBlogMutation

} = blogApi;
