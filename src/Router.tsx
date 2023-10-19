import { Routes, Route } from 'react-router-dom'
import { DefaultLayout } from './layouts/defaultLayout'
import { Home } from './pages/home/home'
import { Checkout } from './pages/checkout/checkout'
import { Success } from './pages/success/success'
import { OrderHistory } from './pages/orderHistory/orderHistory'

export function Router() {

    return (

        <Routes>

            <Route path='/' element={<DefaultLayout />}>
                
                <Route path='/' element={<Home />}/>
                <Route path='/checkout' element={<Checkout />}/>
                <Route path='/success' element={<Success />}/>
                <Route path='/history' element={<OrderHistory />}/>
                
            </Route> 

        </Routes>
    )
}