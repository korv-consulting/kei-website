This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Project kei-app-frontweb structure

```js
+-- .next // Source build
+-- components // The directory containing components divided in groups
|   +-- auth // Folder containing Login, Signup, Password recovery components
|   +-- layouts // Folder containing landing(presentation) and app(admin and team side) templates
|   +-- partials // Folder containg components for different parts of a general page(template)
|   |   +-- app // Folder containg components for different parts for a app template(admin and team side) like Header, Footer, Sidebar, etc
|   |   +-- base // Folder containg components for different parts for a base template(prensentation) like Header, Footer, etc
|   +-- utils // Folder containing small components like Button, Div, TextInput, Form, .etc
+-- core //  Directory for functions calling API(services)
+-- lib  // Directory for events founction and others
+-- node_modules // dependencies file
|   pages // Direcory containing the pages of our application
|   |   +-- _app.js // The natural template page our application
|   |   +-- index.js // The main page and route of our application
|   +-- public // Folder containing images
|   +-- styles // Folder containing css files of our application
+-- .gitignore // File whose content is ignored by git
+-- Dockerfile //Docker file for mouning image of our application
+-- next.config.js // Configuration file for nextjs environment
+-- package.json //  Core to the Node.js ecosystem and is a fundamental part of understanding and working with Node.js,
```
