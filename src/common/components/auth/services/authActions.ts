import * as actionType from './authTypes'
import {Dispatch} from "redux";
import {auth, db} from "../../../../plugins/firebase"

const authSuccess = (user) => {
    return {
        type: actionType.AUTH_SUCCESS,
        user_detail: user
    };
};


export const userSignUp = (user_data: any) => async (dispatch: Dispatch) => {
    await auth.createUserWithEmailAndPassword(user_data.email, user_data.password).then(
        res => {
            res.user.updateProfile({
                displayName: user_data.name
            }).then(
                res => {
                    console.log(res)
                }
            ).catch(err => {
                console.log(err)
            })
        }
    ).catch(err => {
        console.log(err)
    })
}

export const userSignIn = (user_data: any) => async (dispatch: Dispatch) => {
    await auth.signInWithEmailAndPassword(user_data.email, user_data.password).then(
        user => {
            dispatch(authSuccess(user.user))
        }
    ).catch(err => console.log(err))
}