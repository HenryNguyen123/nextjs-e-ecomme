import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import axios from '../../../configs/axios.config'

interface DataType {
    email: string,
}

interface DataResponse{
    EM: string
    EC: number
    DT:  null
}

export interface DataState {
    data: DataResponse | null
    isLoading: boolean
    isError: boolean
}

export const sendMailForgotPassword = createAsyncThunk<DataResponse, DataType>(
  'reset-password/check-mail',
  async (data) => {
    const response =  await axios.post<DataResponse>(process.env.NEXT_PUBLIC_CHECK_MAIL_FORGOT_PASSWORD_URL ?? "", {email: data.email})
    return response.data
  }
)

const initialState: DataState = {
  data: null,
  isLoading: false,
  isError: false
}

export const sendMailForgotPasswordSlice = createSlice({
  name: 'mailForgetPassword',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder
    .addCase(sendMailForgotPassword.pending, (state) => {
        state.isLoading = true
        state.isError = false
    })
    .addCase(sendMailForgotPassword.fulfilled, (state, action: PayloadAction<DataResponse>) => {
      console.log('payload check mail forget password: ', action.payload)
        state.data = action.payload ? action.payload : null
        state.isLoading = false
        state.isError = false
    })
    .addCase(sendMailForgotPassword.rejected, (state) => {
        state.isLoading = false
        state.isError = true
    })
  },
})

// Action creators are generated for each case reducer function

export default sendMailForgotPasswordSlice.reducer