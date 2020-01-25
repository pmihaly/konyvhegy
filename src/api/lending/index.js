import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { create, index, show, update, destroy } from './controller'
import { schema } from './model'
export Lending, { schema } from './model'

const router = new Router()
const { reader, book, deadline } = schema.tree

/**
 * @api {post} /lendings Create lending
 * @apiName CreateLending
 * @apiGroup Lending
 * @apiParam reader Lending's reader.
 * @apiParam book Lending's book.
 * @apiParam deadline Lending's deadline.
 * @apiSuccess {Object} lending Lending's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Lending not found.
 */
router.post('/',
  body({ reader, book, deadline }),
  create)

/**
 * @api {get} /lendings Retrieve lendings
 * @apiName RetrieveLendings
 * @apiGroup Lending
 * @apiUse listParams
 * @apiSuccess {Object[]} lendings List of lendings.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get('/',
  query(),
  index)

/**
 * @api {get} /lendings/:id Retrieve lending
 * @apiName RetrieveLending
 * @apiGroup Lending
 * @apiSuccess {Object} lending Lending's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Lending not found.
 */
router.get('/:id',
  show)

/**
 * @api {put} /lendings/:id Update lending
 * @apiName UpdateLending
 * @apiGroup Lending
 * @apiParam reader Lending's reader.
 * @apiParam book Lending's book.
 * @apiParam deadline Lending's deadline.
 * @apiSuccess {Object} lending Lending's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Lending not found.
 */
router.put('/:id',
  body({ reader, book, deadline }),
  update)

/**
 * @api {delete} /lendings/:id Delete lending
 * @apiName DeleteLending
 * @apiGroup Lending
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Lending not found.
 */
router.delete('/:id',
  destroy)

export default router
