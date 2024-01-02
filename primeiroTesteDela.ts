describe('Users Controller', () =>{
  it('Deve somar 1 + 1', ()=>{
    function soma (a: number, b: number){ //preparação do cenário
      return a + b
    }

    const resultado = soma(1, 2) //teste
    expect(resultado).toBe(3) //validação
  })
})
