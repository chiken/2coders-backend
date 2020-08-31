const assets = require('assert')
const request = require('supertest')

const app = require('../index')
const { assert } = require('console')

describe('Test para la ruta de update frutas', () => {
  it('Deberia devolver un estado 200 la peticion HTTP', done => {
    request(app)
    // El ID de la fruta tiene que ser
    // cambiado por alguno real al hacer las pruebas
    .put('/api/fruits/5f4d780a8835f26b3a0d9efa')
    .send({
      name: 'Peras',
      color: 'Verde',
    })
    .end((err, response) => {
      assert(response.status === 200)
      done()
    })
  })
})
