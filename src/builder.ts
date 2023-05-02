import SchemaBuilder from '@pothos/core'
import { Context } from './context'
import { users } from '../dbschema/interfaces'
import ErrorsPlugin from '@pothos/plugin-errors'

type CurrentUser = Omit<users.User, 'role'>

type Objects = {
  User: CurrentUser
  Role: users.Role
}

export type TypesWithDefaults = PothosSchemaTypes.ExtendDefaultTypes<{
  Context: Context
  Objects: Objects
  Scalars: {
    Date: {
      Input: Date
      Output: Date
    }
    DateTime: {
      Input: Date
      Output: Date
    }
  }
}>

export const builder = new SchemaBuilder<TypesWithDefaults>({
    // normally error plugin here.
  plugins: [ErrorsPlugin]
})

builder.mutationType()
builder.queryType()
