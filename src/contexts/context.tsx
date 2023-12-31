import { ReactNode, createContext, useState, useReducer, useEffect } from "react";
import { FormInfosProps } from "../pages/checkout/components/orderForm/orderForm";
import uuid from "react-uuid";
import { toast } from "react-toastify";

export interface CartItemType {
    id: string,
    image: string | undefined,
    title: string | null,
    price: number | null,
    tag?: string,
    description?: string
}

export interface PaymentPrefrenceProps {
    payment_preference: string
}

export interface OrderType {
    orderItems: CartItemType[],
    paymentPreference: PaymentPrefrenceProps,
    totalPrice: number,
    date: string,
    id: string
}

type Actions = {
    type: 'ADD_ITEM_TO_CART',
    payload: CartItemType
} | {
    type: 'REMOVE_ITEM_FROM_CART',
    payload: string
} | {
    type: 'COMPLETE_ORDER',
    payload: OrderType
}

interface ContextType {
    cartItems: CartItemType[]
    orderInfos: FormInfosProps | null
    setOrderInfos: (value: FormInfosProps | null) => void
    addOrderInfos: (data: FormInfosProps) => void
    choosePaymentPreference: (data: string) => void
    paymentPreference: PaymentPrefrenceProps
    setPaymentPreference: (data: PaymentPrefrenceProps) => void
    completeOrder: (newOrderData: OrderType) => void
    orders: OrderType[]
    addItemToCart: (coffee: CartItemType) => void
    removeItemFromCart: (coffeeid: string) => void
}

export const Context = createContext({} as ContextType)

interface ContextProviderProps {
    children: ReactNode
}

export function ContextProvider({ children }: ContextProviderProps) {

    const reducer = (state: any, action: Actions) => {

        if (action.type === 'ADD_ITEM_TO_CART') {
            const newCartItems: CartItemType[] = [
                ...state.cartItems, 
                { 
                    image: action.payload.image,
                    title: action.payload.title,
                    price: action.payload.price,
                    id: uuid(),
                }
            ]

            return {
                cartItems: newCartItems,
                orders: state.orders
            }
        }

        if (action.type === 'REMOVE_ITEM_FROM_CART') {
            const cartWithoutDeletedOne: CartItemType[] = state.cartItems.filter((cartItem: CartItemType) => {
                return cartItem.id !== action.payload
            })

            return {
                cartItems: cartWithoutDeletedOne,
                orders: state.orders
            }
        }

        if (action.type === 'COMPLETE_ORDER') {
            const newOrdersList: OrderType[] = [
                ...state.orders,
                {
                    orderItems: action.payload.orderItems,
                    paymentPreference: action.payload.paymentPreference,
                    totalPrice: action.payload.totalPrice,
                    date: action.payload.date,
                    id: action.payload.id
                }
            ]

            return {
                orders: newOrdersList,
                cartItems: []
            }
        }

        return state
    }

    const [ orderState, dispatch ] = useReducer(reducer, {
        cartItems: [],
        orders: []
    }, 
    (initialState) => {
        const storedStateAsJSON = localStorage.getItem(
            '@coffee-delivery:orders-1.0.0'
        )

        if (storedStateAsJSON) {
            return JSON.parse(storedStateAsJSON)
        }

        return initialState
    })

    useEffect(() => {
        const stateJSON = JSON.stringify(orderState)

        localStorage.setItem('@coffee-delivery:orders-1.0.0', stateJSON)
    }, [orderState])

    const addItemToCart = (coffee: CartItemType) => {
        dispatch({
            type: 'ADD_ITEM_TO_CART',
            payload: {
                ...coffee,
            }
        })

        toast.success('Produto adicionado ao carrinho')
    }

    const removeItemFromCart = (coffeeid: string) => {
        dispatch({
            type: 'REMOVE_ITEM_FROM_CART', 
            payload: coffeeid
        })

        toast.success('Produto removido do carrinho')
    }

    const completeOrder = (newOrderData: OrderType) => {
        dispatch({
            type: 'COMPLETE_ORDER',
            payload: {
                ...newOrderData
            }
        })
    }

    const [ orderInfos, setOrderInfos ] = useState<FormInfosProps | null>({
        CEP: '',
        Rua: '',
        Número: 0,
        Complemento: '',
        Cidade: '',
        Estado: '',
        Bairro: ''
    })

    const [ paymentPreference, setPaymentPreference ] = useState({
        payment_preference: ''
    })

    function addOrderInfos(data: FormInfosProps) {

        setOrderInfos(data)
    }

    function choosePaymentPreference(data: string) {

        const valueOfPaymentPreference = {payment_preference: data}
        setPaymentPreference(valueOfPaymentPreference)
    }

    const { cartItems, orders } = orderState

    return (

        <Context.Provider value={{
            cartItems,
            orderInfos,
            setOrderInfos,
            addOrderInfos,
            choosePaymentPreference,
            paymentPreference,
            setPaymentPreference,
            completeOrder,
            orders,
            addItemToCart,
            removeItemFromCart,
        }}>
            {children}
        </Context.Provider>
    )
}