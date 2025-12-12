import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import axios from '../../../configs/axios.config'

interface UserData {
  email: string,
  userName: string,
  password: string,
  firstName: string,
  lastName: string,
  avatar?: File | null,
  age?: number | string ,
}

interface UserResponse {
  EM: string
  EC: number
  DT: {user: UserData[]} | null
}


export interface UsersState {
  data: UserResponse | null
  user: {user: UserData[]} | null
  isLoading: boolean
  isError: boolean
}

// First, create the thunk
export const fetchRegister = createAsyncThunk<UserResponse, UserData>(
  'auth/register',
  async (data) => {
    const formData = new FormData()
    formData.append('firstName', data.firstName)
    formData.append('lastName', data.lastName)
    formData.append('email', data.email)
    formData.append('userName', data.userName)
    formData.append('password', data.password)
    if (data.age) formData.append('age', String(data.age))
    if (data.avatar  instanceof File) formData.append('avatar', data.avatar)
    const response =  await axios.post<UserResponse>(process.env.VITE_CREATE_USER_URL ?? '',formData, {
                      headers: { "Content-Type": "multipart/form-data" }
                    })
    return response.data
  }
)

const initialState: UsersState = {
  data: null,
  user:  null,
  isLoading: false,
  isError: false
}


export const registerSlice = createSlice({
  name: 'register',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder
    .addCase(fetchRegister.pending, (state) => {
        state.isLoading = true
        state.isError = false
    })
    .addCase(fetchRegister.fulfilled, (state, action: PayloadAction<UserResponse>) => {
      console.log('payload create user: ', action.payload)
        state.data = action.payload ? action.payload : null
        state.user = action.payload?.DT ? action.payload.DT : null
        state.isLoading = false
        state.isError = false
    })
    .addCase(fetchRegister.rejected, (state) => {
        state.isLoading = false
        state.isError = true
    })
  },
})

// Action creators are generated for each case reducer function

export default registerSlice.reducer