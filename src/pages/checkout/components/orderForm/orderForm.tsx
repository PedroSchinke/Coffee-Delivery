import { CreditCard, CurrencyDollar, MapPinLine, Money } from "phosphor-react";
import { ErrorMessage, OrderContainer, OrderForm, PaymentButton, PaymentForm } from "./styles";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useContext, useEffect } from "react";
import { Context, OrderType } from "../../../../contexts/context";
import * as zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { db } from "../../../../services/api";
import { toast } from "react-toastify";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import uuid from "react-uuid";

const schema = zod.object({
    CEP: zod.string().min(9, 'Insira um CEP no formato 00000-000').max(9, 'Insira um CEP no formato 00000-000'),
    Rua: zod.string().min(1, 'É preciso digitar uma rua'),
    Número: zod.number({invalid_type_error: 'Esse campo deve conter apenas números'}).min(1, 'É preciso digitar o número da rua'),
    Complemento: zod.string(),
    Cidade: zod.string(),
    Estado: zod.string(),
    Bairro: zod.string()
})

export type FormInfosProps = zod.infer<typeof schema>

export function Infos() {

    const { 
        register, 
        handleSubmit, 
        watch, 
        setValue, 
        formState: { errors } 
    } = useForm<FormInfosProps>({
        mode: 'all',
        criteriaMode: 'all',
        resolver: zodResolver(schema)
    })

    const cep = watch('CEP')
    const isCepValid = /^[0-9]{5}-[0-9]{3}$/.test(cep)

    useEffect(() => {

        const getCepInfo = async () => {

            let newEstadoValue = ''
            let newCidadeValue = ''
            let newRuaValue = ''
            let newBairroValue = ''

            if (isCepValid) {
                const resp = await db.get(`/${cep}/json`);

                newEstadoValue = resp.data.uf
                newCidadeValue = resp.data.localidade
                newRuaValue = resp.data.logradouro
                newBairroValue = resp.data.bairro            
            }
                setValue("Estado", newEstadoValue)
                setValue("Cidade", newCidadeValue)
                setValue("Rua", newRuaValue)
                setValue("Bairro", newBairroValue)
            } 
            
        getCepInfo()

    }, [ cep, isCepValid, setValue ])

    const { 
        addOrderInfos, 
        cartItems, 
        choosePaymentPreference, 
        paymentPreference,
        completeOrder
    } = useContext(Context)

    const navigate = useNavigate()

    function getOrderData() {

        const totalPrice = cartItems.reduce(
            (total, currentValue) => total = total + currentValue.price!, 0
        )

        const orderItems = cartItems

        const newOrderData: OrderType = {
            orderItems,
            paymentPreference,
            totalPrice,
            date: format(new Date(), 'dd/MM/yyyy', { locale: ptBR }),
            id: uuid()
        }
        
        completeOrder(newOrderData)
    }

    const handleCompleteOrder = (data: FormInfosProps) => {

        if (cartItems!.length === 0) {

            toast.error('É preciso adicionar ao menos um item ao carrinho')

        } else if (paymentPreference.payment_preference === '') {

            toast.error('É preciso escolher uma forma de pagamento')

        } else {

            addOrderInfos(data)
            getOrderData()
            navigate('/success')
            toast.success('Seu pedido foi realizado com sucesso!')
        }
    }

    watch()

    function handleChooseCreditCard(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {

        event.preventDefault()

        const paymentPreferenceValue = (document.getElementById('creditCardButton') as HTMLInputElement).value
        choosePaymentPreference(paymentPreferenceValue)
    }

    function handleChooseDebitCard(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {

        event.preventDefault()

        const paymentPreferenceValue = (document.getElementById('debitCardButton') as HTMLInputElement).value
        choosePaymentPreference(paymentPreferenceValue)
    }

    function handleChooseMoney(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {

        event.preventDefault()

        const paymentPreferenceValue = (document.getElementById('money') as HTMLInputElement).value
        choosePaymentPreference(paymentPreferenceValue)
    }

    return (

        <OrderContainer>

            <span className="infoLabel">Complete seu pedido</span>

            <OrderForm 
                onSubmit={handleSubmit(handleCompleteOrder)}
                id="orderForm">
                
                <div className="adressForm">

                    <label>
                        <div className="mapPinIcon"><MapPinLine size={24}/></div>
                        <div className="adressLabel">
                            <h2>Endereço de entrega</h2>
                            <span>Informe o endereço onde deseja receber seu pedido</span>
                        </div>
                    </label>

                    <div className="inputs">

                        <div className="CEP_Rua">

                            <div className="CEP">

                                <input className="CEP_input"
                                    type="text"
                                    id="CEP" 
                                    placeholder="CEP"
                                    {...register('CEP')}
                                />

                                {errors.CEP && <ErrorMessage>{errors.CEP.message}</ErrorMessage>}

                            </div>

                            <div className="Rua">

                                <input className="Rua_input"
                                    type="text"
                                    id="Rua"
                                    placeholder='Rua'
                                    {...register('Rua')}
                                />

                                {errors.Rua && <ErrorMessage>{errors.Rua.message}</ErrorMessage>}

                            </div>

                        </div>

                        <div className="Número_Complemento_Bairro">

                            <div className="Número">

                                <input className="Número_input"
                                    type="text"
                                    id="Número"
                                    placeholder='Número'
                                    {...register('Número', {valueAsNumber: true})}
                                />

                                {errors.Número && <ErrorMessage>{errors.Número.message}</ErrorMessage>}

                            </div>


                            <input className="Complemento_input"
                                type="text"
                                id="Complemento"
                                placeholder='Complemento' 
                                {...register('Complemento')}
                            />

                            <input className="Bairro_input"
                                type="text"
                                id="Bairro"
                                placeholder='Bairro'
                                {...register('Bairro')}
                            />

                        </div>

                        <div className="Cidade_UF">

                            <input className="Cidade_input"
                                type="text"
                                id="cidade"
                                placeholder='Cidade'
                                {...register('Cidade')}
                            />

                            <input className="UF_input"
                                type="text"
                                id="estado"
                                placeholder='UF'
                                {...register('Estado')}
                            />

                        </div>

                    </div>

                </div>

                <PaymentForm>

                    <label>
                        <div className="dollarSign"><CurrencyDollar size={24}/></div>
                        <div className="paymentLabel">
                            <h2>Pagamento</h2>
                            <span>O pagamento é feito na entrega. Escolha a forma que deseja pagar</span>
                        </div>
                    </label>

                    <div className="paymentButtonsContainer">

                        <PaymentButton
                            id='creditCardButton'
                            value={'Cartão de Crédito'}
                            onClick={handleChooseCreditCard}
                        >
                            <div className="paymentButtonIcon">
                                <CreditCard size={16}/>
                            </div>CARTÃO DE CRÉDITO
                        </PaymentButton>

                        <PaymentButton
                            id='debitCardButton'
                            value={'Cartão de Débito'}
                            onClick={handleChooseDebitCard}
                        > 
                            <div className="paymentButtonIcon">
                                <CreditCard size={16}/>
                            </div>CARTÃO DE DÉBITO
                        </PaymentButton>

                        <PaymentButton 
                            id='money'
                            value={'Dinheiro'}
                            onClick={handleChooseMoney}
                        >
                            <div className="paymentButtonIcon">
                                <Money size={16}/>
                            </div>DINHEIRO
                        </PaymentButton>
                        
                    </div>
                    
                </PaymentForm>

            </OrderForm>

        </OrderContainer>
    )
}