describe('Product Management', () => {

    beforeEach(function () {
        cy.fixture('product/post').then(function (product) {
            this.product = product
        })
        cy.fixture('product/put').then(function (productPut) {
            this.productPut = productPut
        })
    })

    it('Creating a New Product', function () {

        const product  = this.product.create
        

        cy.postProduct(product)
            .then(response => {
                expect(response.status).to.eq(201)
                expect(response.body.title).to.eq(product.title)
                expect(response.body.price).to.eq(product.price)
                expect(response.body.description).to.eq(product.description)
                expect(response.body.category.id).to.eq(product.categoryId)
                const id = response.body.id;
                cy.setProductId(id);
            })

    })


    it('Reading Product Details', function () {
     
    const product  = this.product.create
        
     cy.getProductId().then((ProductId) => {
        cy.log(ProductId);
        cy.getUniqueProduct(ProductId)
            .then(response => {
                expect(response.status).to.eq(200)
                expect(response.body.title).to.eq(product.title)
                expect(response.body.price).to.eq(product.price)
                expect(response.body.description).to.eq(product.description)
                expect(response.body.category.id).to.eq(product.categoryId)
            })
        })
    })

    it('Updating an Existing Product', function () {
    
     const product = this.productPut.update

     cy.getProductId().then((ProductId) => {
        cy.putProduct(ProductId, product.body)
            .then(response => {
                expect(response.status).to.eq(200)
                expect(response.body.title).to.eq(product.body.title)
                expect(response.body.price).to.eq(product.body.price)
            })
        })
    })

    it('Deleting a Product', function () {

        cy.getProductId().then((ProductId) => {

            cy.deleteProduct(ProductId)
                .then(response => {
                    expect(response.status).to.eq(200)
                })
            cy.wait(5000)
              .log("Executed Successfully!")
        })

    })


})