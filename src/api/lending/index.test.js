import request from 'supertest'
import { apiRoot } from '../../config'
import express from '../../services/express'
import routes, { Lending } from '.'

const app = () => express(apiRoot, routes)

let lending

beforeEach(async () => {
  lending = await Lending.create({})
})

test('POST /lendings 201', async () => {
  const { status, body } = await request(app())
    .post(`${apiRoot}`)
    .send({ reader: 'test', book: 'test', deadline: 'test' })
  expect(status).toBe(201)
  expect(typeof body).toEqual('object')
  expect(body.reader).toEqual('test')
  expect(body.book).toEqual('test')
  expect(body.deadline).toEqual('test')
})

test('GET /lendings 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}`)
  expect(status).toBe(200)
  expect(Array.isArray(body)).toBe(true)
})

test('GET /lendings/:id 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}/${lending.id}`)
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(lending.id)
})

test('GET /lendings/:id 404', async () => {
  const { status } = await request(app())
    .get(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})

test('PUT /lendings/:id 200', async () => {
  const { status, body } = await request(app())
    .put(`${apiRoot}/${lending.id}`)
    .send({ reader: 'test', book: 'test', deadline: 'test' })
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(lending.id)
  expect(body.reader).toEqual('test')
  expect(body.book).toEqual('test')
  expect(body.deadline).toEqual('test')
})

test('PUT /lendings/:id 404', async () => {
  const { status } = await request(app())
    .put(apiRoot + '/123456789098765432123456')
    .send({ reader: 'test', book: 'test', deadline: 'test' })
  expect(status).toBe(404)
})

test('DELETE /lendings/:id 204', async () => {
  const { status } = await request(app())
    .delete(`${apiRoot}/${lending.id}`)
  expect(status).toBe(204)
})

test('DELETE /lendings/:id 404', async () => {
  const { status } = await request(app())
    .delete(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})
