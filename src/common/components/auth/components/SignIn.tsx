import React, {ChangeEvent, FormEvent, useState} from 'react';
import {useDispatch} from 'react-redux'
import {userSignIn} from '../../../../store/actions'

import {ValidateForm, ValidateInput} from "../../../../helper/validateForm";
import SignRule from '../rule/SignInRules'

import BtnLoading from '../../../partials/btnloading'


interface SignUpStateInterface {
    name: string,
    email: string,
    password: string
}

const SignIn: React.FC = () => {
    const [loading, setIsLoading] = useState<boolean>(false)
    const [isShow, setIsShow] = useState<boolean>(false)
    const dispatch = useDispatch()

    const [values, setValues] = useState<SignUpStateInterface>({
        name: '',
        email: '',
        password: ''
    })
    const [errors, setErrors] = useState<any>('')

    const handleChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    const handleBlur = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.persist()
        const ee = ValidateInput(e.target.name, e.target.value, SignRule)
        setErrors({
            ...errors,
            [e.target.name]: ee
        })
    }

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setIsLoading(true)
        setErrors(ValidateForm(values, SignRule))
        if (Object.keys(errors).length === 0) {
            setIsLoading(false)
        } else {
            await dispatch(userSignIn(values))
            setIsLoading(false)
        }
    }

    return (
        <div className="signin form-card">
            <form action="" onSubmit={(e) => handleSubmit(e)}>
               <div className="form-content">
                   <div className="input-group">
                       <div className="input-box">
                           <input
                               type="text"
                               name="email"
                               placeholder="your email. "
                               onChange={(e) => handleChange(e)}
                           />
                       </div>
                       {
                           errors.email && errors.email.map((error: string, index: number) => (
                               <div className={"error-text"} key={index}>{error}</div>
                           ))
                       }
                   </div>
                   <div className="input-group">
                       <div className="input-box flex item-center align-center ">
                           <div className="icons pointer" onClick={() => {setIsShow(!isShow)}}>
                               <i className="material-icons">
                                   {
                                       isShow ? 'visibility_off' : 'visibility'
                                   }
                               </i>
                           </div>
                           <div className="flex-1">
                               <input
                                   type={isShow ? 'text' : 'password'}
                                   name="password"
                                   placeholder="******"
                                   onChange={(e) => handleChange(e)}
                               />
                           </div>
                       </div>
                       {
                           errors.password && errors.password.map((error: string, index: number) => (
                               <div className={"error-text"} key={index}>{error}</div>
                           ))
                       }
                   </div>
               </div>

                <div className="form-button flex justify-between align-center item-center">
                    <div className="sub-title mt-sm pl-md pointer">
                        Forget Password ?
                    </div>
                    <button className="form-button-item" >
                        {
                            loading && <BtnLoading/>
                        }
                        Login
                    </button>
                </div>
            </form>
        </div>
    );
};

export default SignIn;