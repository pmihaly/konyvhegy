import { success, notFound } from '../../services/response/'
import { Reader } from '.'

export const create = ({ bodymen: { body } }, res, next) =>
  Reader.create(body)
    .then((reader) => reader.view(true))
    .then(success(res, 201))
    .catch(next)

export const index = ({ querymen: { query, select, cursor } }, res, next) =>
  Reader.find(query, select, cursor)
    .then((readers) => readers.map((reader) => reader.view()))
    .then(success(res))
    .catch(next)

export const show = ({ params }, res, next) =>
  Reader.findById(params.id)
    .then(notFound(res))
    .then((reader) => reader ? reader.view() : null)
    .then(success(res))
    .catch(next)

export const update = ({ bodymen: { body }, params }, res, next) =>
  Reader.findById(params.id)
    .then(notFound(res))
    .then((reader) => reader ? Object.assign(reader, body).save() : null)
    .then((reader) => reader ? reader.view(true) : null)
    .then(success(res))
    .catch(next)

export const destroy = ({ params }, res, next) =>
  Reader.findById(params.id)
    .then(notFound(res))
    .then((reader) => reader ? reader.remove() : null)
    .then(success(res, 204))
    .catch(next)
