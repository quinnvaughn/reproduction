import { IncomingMessage } from 'http'
import e, { createClient } from '../dbschema/edgeql-js'
import { users } from '../dbschema/interfaces'

type CurrentUser = Omit<users.User, 'role'>

export type Context = {
  client: ReturnType<typeof createClient>
  currentUser: CurrentUser | null
}

const client = createClient()

export async function createContext(req: IncomingMessage): Promise<Context> {
    // there is actual auth logic here normally.
    let currentUser = await e
      .select(e.users.User, () => ({
        ...e.users.User['*'],
        filter_single: { id: '1234' },
      }))
      .run(client)
  return {
    client,
    currentUser,
  }
}
