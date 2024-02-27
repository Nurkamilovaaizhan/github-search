// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// import { IRepo, IUser, ServerResponse } from "../../models/models";

// export const githubApi = createApi ({
//     // Строчка которая будет говорить по какому адресу в сторе будет храниться все необ-е закэши-е данные при работе с API.
//     // reducerPath - ключ хранения данных
//     reducerPath: 'github/api',
//     baseQuery: fetchBaseQuery({
//         baseUrl: 'https://api.github.com/'
//     }),
//     endpoints: build => ({
//     // query - для запросов, получения запросов
//     // mutation - изменять данные
//     /* Дженерики(Generic) - это инструмент в программировании, позволяющий создавать компоненты, функции или классы, которые могут работать с различными типами данных, обеспечивая безопасность типов и повторное использование кода. вы можете создавать обобщенные (generic) компоненты, функции или классы, указывая тип данных как параметр. Это позволяет повторно использовать код с разными типами данных, обеспечивая при этом безопасность типов во время компиляции. */
//     // 1-g any/ServerResponse - что мы получаем в ответ от сервера
//     // 2-g string - какой параметр мы хотим принимать для осуще-я запроса
//     searchUsers: build.query<IUser[], string>({
//     // строчка будет конкатинироваться с базовым url
//             query: (search: string) => ({
//                 url: `search/users`,
//                 params: {
//                     q: search,
//                     per_page: 10
//                 }
//             }),
//             transformResponse: (response: ServerResponse<IUser>) => response.items
//         }),
//         getUserRepos: build.query<IRepo, string>({
//             query: (username: string) => ({
//                 url: `users/${username}/repos`
//             })
//         })
//         })
//     })

// // сгенерированный кастомный хук
// export const {useSearchUsersQuery, useLazyGetUserReposQuery} = githubApi
import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import {IRepo, IUser, ServerResponse} from '../../models/models'

export const githubApi = createApi({
  reducerPath: 'github/api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.github.com/'
  }),
  refetchOnFocus: true,
  endpoints: build => ({
    searchUsers: build.query<IUser[], string>({
      query: (search: string) => ({
        url: `search/users`,
        params: {
          q: search,
          per_page: 10
        }
      }),
      transformResponse: (response: ServerResponse<IUser>) => response.items
    }),
    getUserRepos: build.query<IRepo[], string>({
      query: (username: string) => ({
        url: `users/${username}/repos`
      })
    }),
    createUser: build.mutation<any, void>({
      query: () => ``
    })
  })
})

export const {useSearchUsersQuery, useLazyGetUserReposQuery} = githubApi