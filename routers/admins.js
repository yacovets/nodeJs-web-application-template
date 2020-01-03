import express from 'express'

import { admins } from '../controllers'
import { cash } from '../servises'

export default app => {

    const adminRouter = express.Router()

    app.use(`/admin`, cash.accessUsers([2]), adminRouter)

    adminRouter.get('/users', admins.users.get)
    adminRouter.get('/users/:id', admins.users.getOne)
    adminRouter.get('/users/:id/edit', admins.users.edit)
    adminRouter.post('/users/:id/edit', admins.users.editHandler)
    adminRouter.post('/users/:id/block', admins.users.block)

    adminRouter.get('/authorizations', admins.authorizations.get)
}