import { ApolloServer } from '@apollo/server'
import { startStandaloneServer } from '@apollo/server/standalone'
import { createContext } from './context'
import { schema } from './schema'

const server = new ApolloServer({
  schema,
})

async function main() {
    const { url } = await startStandaloneServer(server, {
      // normally a zod config object.
    listen: { port: 4000 },
    context: ({ req }) => createContext(req),
  })
  console.log(`🚀 Server ready at ${url}`)
}

main()
