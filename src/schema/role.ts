import { builder } from '../builder'
import e from '../../dbschema/edgeql-js'
import { AuthError, EntityCreationError } from './error'

e.select(e.users.Role, () => ({

}))


const CreateRoleInput = builder.inputType('CreateRoleInput', {
    fields: (t) => ({
      name: t.string({ required: true }),
    }),
  })
  
  builder.mutationField('createRole', (t) =>
    t.field({
      type: 'Role',
      errors: { types: [AuthError, EntityCreationError] },
      args: {
        input: t.arg({ type: CreateRoleInput, required: true }),
      },
      resolve: async (_, { input }, { currentUser }) => {
        if (!currentUser) {
          throw new AuthError('You must be logged in.')
        }
      },
    }),
  )
  