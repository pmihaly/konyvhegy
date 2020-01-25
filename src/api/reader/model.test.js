import { Reader } from '.'

let reader

beforeEach(async () => {
  reader = await Reader.create({ fullName: 'test', email: 'test', phone: 'test', birthDate: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = reader.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(reader.id)
    expect(view.fullName).toBe(reader.fullName)
    expect(view.email).toBe(reader.email)
    expect(view.phone).toBe(reader.phone)
    expect(view.birthDate).toBe(reader.birthDate)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = reader.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(reader.id)
    expect(view.fullName).toBe(reader.fullName)
    expect(view.email).toBe(reader.email)
    expect(view.phone).toBe(reader.phone)
    expect(view.birthDate).toBe(reader.birthDate)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
