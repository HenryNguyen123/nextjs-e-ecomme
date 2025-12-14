import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import axios from '../../../configs/axios.config'

interface DataType {
    password: string,
    key: string,
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

export const handelResetPassword = createAsyncThunk<DataResponse, DataType>(
  'reset-password/reset-password',
  async (data) => {
    const response =  await axios.put<DataResponse>(process.env.NEXT_PUBLIC_RESET_PASSWORD_URL ?? '', {resetPassword: data.password, key: data.key})
    return response.data
  }
)

const initialState: DataState = {
  data: null,
  isLoading: false,
  isError: false
}

export const resetPasswordSlice = createSlice({
  name: 'resetPassword',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder
    .addCase(handelResetPassword.pending, (state) => {
        state.isLoading = true
        state.isError = false
    })
    .addCase(handelResetPassword.fulfilled, (state, action: PayloadAction<DataResponse>) => {
      console.log('payload check reset password: ', action.payload)
        state.data = action.payload ? action.payload : null
        state.isLoading = false
        state.isError = false
    })
    .addCase(handelResetPassword.rejected, (state) => {
        state.isLoading = false
        state.isError = true
    })
  },
})

// Action creators are generated for each case reducer function

export default resetPasswordSlice.reducer