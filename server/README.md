# Invoice API

## Base URL: [https://invoicesapi.herokuapp.com/api](https://invoicesapi.herokuapp.com/api/)

### Endpoints:
- To GET all the invoices: [/invoices](https://invoicesapi.herokuapp.com/api/invoices)
- To GET a single invoices: [/invoices/:id](https://invoicesapi.herokuapp.com/api/invoices/612e2576367bd99e13c40610)
- To POST a new invoice: [/invoices](https://invoicesapi.herokuapp.com/api/invoices)
- To DELETE a new invoice: [/invoices/:id](https://invoicesapi.herokuapp.com/api/invoices)
- To UPDATE a new invoice: [/invoices/:id](https://invoicesapi.herokuapp.com/api/invoices/)
- Query the invoices using **status** parameter: [/invoices?status=paid](https://invoicesapi.herokuapp.com/api/invoices?status=paid)

> Note: **status** parameter can be any of the following values: [paid](https://invoicesapi.herokuapp.com/api/invoices?status=paid), [pending](https://invoicesapi.herokuapp.com/api/invoices?status=pending) and [draft](https://invoicesapi.herokuapp.com/api/invoices?status=draft)

### Tech Stack:
NodeJs, ExpressJs and MongoDB
