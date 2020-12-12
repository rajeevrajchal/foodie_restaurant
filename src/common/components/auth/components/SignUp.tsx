import React, {ChangeEvent,FormEvent, useState} from 'react';
import {useDispatch} from 'react-redux'
import {userSignUp} from '../../../../store/actions'
import {ValidateForm, ValidateInput} from "../../../../helper/validateForm";
import SignRule from '../rule/SignRule'

import DataLoading from '../../../partials/dataLoading'

interface SignUpStateInterface {
    name: string,
    email: string,
    password: string
}

const SignUp: React.FC = () => {
    const [loading, setIsLoading] = useState<boolean>(false)
    const [values, setValues] = useState<SignUpStateInterface>({
        name: '',
        email: '',
        password: ''
    })
    const [errors, setErrors] = useState<any>('')
    const dispatch = useDispatch()


    const handleSubmit = async (e:FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setIsLoading(true)
        setErrors(ValidateForm(values, SignRule))
        if (Object.keys(errors).length === 0) {
            setIsLoading(false)
        } else {
            await dispatch(userSignUp(values))
            setIsLoading(false)
        }
    }
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
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

    return (
        <div className="signin">
            <form action="" onSubmit={(e) => handleSubmit(e)}>
                <div className="input-group">
                    <div className="input-box">
                        <input
                            type="text"
                            name="name"
                            placeholder="your sweet name."
                            onBlur={(e: React.ChangeEvent<HTMLInputElement>) => {
                                handleBlur(e)
                            }}
                            onChange={(e:ChangeEvent<HTMLInputElement>) => handleChange(e)}
                        />
                    </div>
                    {
                        errors.name && errors.name.map((error: string, index: number) => (
                            <div className={"error-text"} key={index}>{error}</div>
                        ))
                    }
                </div>
                <div className="input-group">
                    <div className="input-box">
                        <input
                            type="text"
                            name="email"
                            placeholder="your email. "
                            onBlur={(e: React.ChangeEvent<HTMLInputElement>) => {
                                handleBlur(e)
                            }}
                            onChange={(e:ChangeEvent<HTMLInputElement>) => handleChange(e)}
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
                        <div className="icons">
                            <i className="material-icons">remove_red_eye</i>
                        </div>
                        <div className="flex-1">
                            <input
                                type="text"
                                name="password"
                                placeholder="******"
                                onBlur={(e: React.ChangeEvent<HTMLInputElement>) => {
                                    handleBlur(e)
                                }}
                                onChange={(e:ChangeEvent<HTMLInputElement>) => handleChange(e)}
                            />
                        </div>
                    </div>
                    {
                        errors.password && errors.password.map((error: string, index: number) => (
                            <div className={"error-text"} key={index}>{error}</div>
                        ))
                    }
                </div>
                <button className="btn primary" type="submit">
                    {
                        loading ? <DataLoading/> : "Sign Up"
                    }
                </button>
            </form>
        </div>
    );
};

export default SignUp;