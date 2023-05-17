import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const key = import.meta.env.VITE_KEY; // Environment variable


export const articleApi = createApi({
    reducerPath: 'articleApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://article-extractor-and-summarizer.p.rapidapi.com/',
        prepareHeaders: (headers) => {
            headers.set('X-RapidAPI-Key', key), // Add your own RapidAPI key here
            headers.set('X-RapidAPI-Host', 'article-extractor-and-summarizer.p.rapidapi.com')
            return headers;
        },
        }),
    endpoints: (builder) => ({
        getSummary: builder.query({
            query: (params) => `/summarize?url=${encodeURIComponent(params.articleUrl)}&lenght=4`,
        }),
    })
})

export const { useLazyGetSummaryQuery } = articleApi;