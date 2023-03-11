# `express-graphql-api`

## Installation

Using npx:

```shell
$ npx express-graphql-api my-api
$ cd my-api
$ npm start || $ npm run dev
```

Using Git : <br>

1. visit the [repository](https://github.com/emrecorbacii/express-graphql-api)
2. Use this template => create new repository

<br>
In .env : <br>

set MONGODB_URI if you want.

```env
PORT =3001
GENERATE_DEV_PASSWORD = devPass
GENERATE_DEV_SECRET = dev-secret

MONGODB_URI="your mongodb URI"

```

to use Apollo GraphQL : <br>

1. Visit "http://localhost:3001/gql/devPass/"nickname"".
2. Copy the token.
3. Open Apollo Sandbox.
4. Go to options => headers => set new header named "auth".
5. Past the token to the "auth" header's value field directly.
