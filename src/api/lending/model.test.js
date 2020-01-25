import { Lending } from '.'

let lending

beforeEach(async () => {
  lending = await Lending.create({ reader: 'test', book: 'test', deadline: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = lending.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(lending.id)
    expect(view.reader).toBe(lending.reader)
    expect(view.book).toBe(lending.book)
    expect(view.deadline).toBe(lending.deadline)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = lending.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(lending.id)
    expect(view.reader).toBe(lending.reader)
    expect(view.book).toBe(lending.book)
    expect(view.deadline).toBe(lending.deadline)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
