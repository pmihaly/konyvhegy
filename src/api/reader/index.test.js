import request from 'supertest'
import { apiRoot } from '../../config'
import express from '../../services/express'
import routes, { Reader } from '.'

const app = () => express(apiRoot, routes)

let reader

beforeEach(async () => {
  reader = await Reader.create({})
})

test('POST /readers 201', async () => {
  const { status, body } = await request(app())
    .post(`${apiRoot}`)
    .send({ fullName: 'test', email: 'test', phone: 'test', birthDate: 'test' })
  expect(status).toBe(201)
  expect(typeof body).toEqual('object')
  expect(body.fullName).toEqual('test')
  expect(body.email).toEqual('test')
  expect(body.phone).toEqual('test')
  expect(body.birthDate).toEqual('test')
})

test('GET /readers 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}`)
  expect(status).toBe(200)
  expect(Array.isArray(body)).toBe(true)
})

test('GET /readers/:id 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}/${reader.id}`)
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(reader.id)
})

test('GET /readers/:id 404', async () => {
  const { status } = await request(app())
    .get(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})

test('PUT /readers/:id 200', async () => {
  const { status, body } = await request(app())
    .put(`${apiRoot}/${reader.id}`)
    .send({ fullName: 'test', email: 'test', phone: 'test', birthDate: 'test' })
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(reader.id)
  expect(body.fullName).toEqual('test')
  expect(body.email).toEqual('test')
  expect(body.phone).toEqual('test')
  expect(body.birthDate).toEqual('test')
})

test('PUT /readers/:id 404', async () => {
  const { status } = await request(app())
    .put(apiRoot + '/123456789098765432123456')
    .send({ fullName: 'test', email: 'test', phone: 'test', birthDate: 'test' })
  expect(status).toBe(404)
})

test('DELETE /readers/:id 204', async () => {
  const { status } = await request(app())
    .delete(`${apiRoot}/${reader.id}`)
  expect(status).toBe(204)
})

test('DELETE /readers/:id 404', async () => {
  const { status } = await request(app())
    .delete(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})
