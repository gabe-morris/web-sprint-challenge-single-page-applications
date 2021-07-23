describe('Order text', () => {
beforeEach(() => {
   cy.visit('http://localhost:3000/pizza')
});

it('sanity test', () => {
    expect(1+2).to.equal(3)
})
it('Order Name Test', () => {
    cy.get('input[name="name"]')
    .type('Order Name')

})
    it('Toppings Test', () => {
        cy.get('[type="checkbox"]').check()

    })
    it('Submit Test', () => {
        cy.get('form').submit()
    } )
})
