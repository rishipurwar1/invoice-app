import { combineReducers } from 'redux'

import invoices from './invoices'

export default combineReducers({
    invoices: invoices
})