describe('Single-Page-App', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/pizza')
  })
  it('sanity check', () => {
    expect(1 + 2).to.equal(3)
  })
  //  test 1  //
  describe("Getting the name input and typing a name in the text field.", () => {

    it('can type a name in the text field', () => {
      const customer = cy.get('input[name=customerName]')
      customer.type('Kristian Rosales').should('have.value', 'Kristian Rosales')
    })
  })
  //  test 2  //
  describe("Getting the dropdown menu, then selecting a pizza size", () => {

    it('can select a pizza size', () => {
      const dropdown = cy.get(`[data-test-id='pizzaSize']`)
        .select('extra-small')
        .select('small')
        .select('medium')
        .select('large')
    })
  })
  //  test 3  //
  describe('Getting the add-ons/toppings and checking the values', () => {

    it('can check each add-on box', () => {
      const checkboxes = cy.get('input[type="checkbox"]').check()
    })
  })
  //  test 4  //
  describe('Getting the special instructions input and typing in the text field', () => {

    it('can type "Make It With Love...', () => {
      const sInstructions = cy.get('input[name="special"]')
      sInstructions.type('Make It With Love...').should('have.value', 'Make It With Love...')
    })
  })
  //  test 5  //
  describe('Getting the submit button then clicking it.', () => {

    it('can submit', () => {
      const submit = cy.get('button[id="order-button"]').click()
    })
  })


})