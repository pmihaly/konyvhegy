import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { create, index, show, update, destroy } from './controller'
import { schema } from './model'
export Reader, { schema } from './model'

const router = new Router()
const { fullName, email, phone, birthDate } = schema.tree

/**
 * @api {post} /readers Create reader
 * @apiName CreateReader
 * @apiGroup Reader
 * @apiParam fullName Reader's fullName.
 * @apiParam email Reader's email.
 * @apiParam phone Reader's phone.
 * @apiParam birthDate Reader's birthDate.
 * @apiSuccess {Object} reader Reader's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Reader not found.
 */
router.post('/',
  body({ fullName, email, phone, birthDate }),
  create)

/**
 * @api {get} /readers Retrieve readers
 * @apiName RetrieveReaders
 * @apiGroup Reader
 * @apiUse listParams
 * @apiSuccess {Object[]} readers List of readers.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get('/',
  query(),
  index)

/**
 * @api {get} /readers/:id Retrieve reader
 * @apiName RetrieveReader
 * @apiGroup Reader
 * @apiSuccess {Object} reader Reader's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Reader not found.
 */
router.get('/:id',
  show)

/**
 * @api {put} /readers/:id Update reader
 * @apiName UpdateReader
 * @apiGroup Reader
 * @apiParam fullName Reader's fullName.
 * @apiParam email Reader's email.
 * @apiParam phone Reader's phone.
 * @apiParam birthDate Reader's birthDate.
 * @apiSuccess {Object} reader Reader's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Reader not found.
 */
router.put('/:id',
  body({ fullName, email, phone, birthDate }),
  update)

/**
 * @api {delete} /readers/:id Delete reader
 * @apiName DeleteReader
 * @apiGroup Reader
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Reader not found.
 */
router.delete('/:id',
  destroy)

export default router
