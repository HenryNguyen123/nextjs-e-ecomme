import { configureStore } from '@reduxjs/toolkit'
import accountReduce from '../slices/account/account.slice'
import loginReduce from '../slices/auth/login.slice'
import logoutReduce from '../slices/auth/logout.slice'
import sendkMailForgotPasswordReduce from '../slices/forget-password/mailForgetPassword.slice'
import resetPasswordReduce from '../slices/forget-password/resetPassword.slice'
import loginOauth2Reduce from '../slices/auth/oauth2.slice'
import getMeAccountReduce from '../slices/auth/me.slice'

export const store = configureStore({
  reducer: {
    
    //authentication
    //login
    login: loginReduce,
    //logout
    logout: logoutReduce,
    //check mail forget password
    mailForgetPassword: sendkMailForgotPasswordReduce,
    //reset password
    resetPassword: resetPasswordReduce,
    //login by Oauth2
    oauth2: loginOauth2Reduce,
    // get me
    getMe: getMeAccountReduce,

    //account
    account: accountReduce,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch