// import { http, HttpResponse, rest } from "msw";

// export const handlers = [
//   // Intercept the "GET /resource" request.
//   http.get("https://jsonplaceholder.typicode.com/todos", () => {
//     // And respond with a "text/plain" response
//     // with a "Hello world!" text response body.
//     return HttpResponse({
//       data: [
//         {
//           userId: 1,
//           id: 1,
//           title: "delectus aut autem",
//           completed: false,
//         },
//         {
//           userId: 1,
//           id: 2,
//           title: "quis ut nam facilis et officia qui",
//           completed: false,
//         },
//       ],
//     });
//   }),
// ];

// import { rest } from "msw";

// export const handlers = [
//   // Intercept the "GET /resource" request.
//   rest.get("https://jsonplaceholder.typicode.com/todos", (req, res, ctx) => {
//     // And respond with a "text/plain" response
//     // with a "Hello world!" text response body.
//     return res(
//       ctx.status(200),
//       ctx.json({
//         data: [
//           {
//             userId: 1,
//             id: 1,
//             title: "delectus aut autem",
//             completed: false,
//           },
//           {
//             userId: 1,
//             id: 2,
//             title: "quis ut nam facilis et officia qui",
//             completed: false,
//           },
//         ],
//       })
//     );
//   }),
// ];

import { rest } from "msw";

export const handlers = [
  // Match a GET request to a third-party server.
  rest.get("https://jsonplaceholder.typicode.com/todos", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
        {
          userId: 1,
          id: 1,
          title: "delectus aut autem",
          completed: false,
        },
        {
          userId: 1,
          id: 2,
          title: "quis ut nam facilis et officia qui",
          completed: false,
        },
      ])
    );
  }),

  // Match a POST request issued against the same origin
  // as the current application.
];
