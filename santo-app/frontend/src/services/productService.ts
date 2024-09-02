import axios, { AxiosError } from "axios"
import { Product } from "../types/Products"
import { CreateProductDTO } from "../types/CreateProductDTO"
const API_BASE_URL = "http://localhost:8080"

export const fetchProducts = async (page: number, limit: number) => {
  try {
    const response = await axios.get<{
      products: Product[]
      total: number
    }>(`${API_BASE_URL}/products?page=${page}&limit=${limit}&order=ASC`)
    return response.data
  } catch (err) {
    const error = err as AxiosError<{ error: string }>
    if (error.response) {
      throw new Error(
        `Erro ${error.response.status}: ${error.response.data.error}`
      )
    } else if (error.request) {
      throw new Error("Erro de conexão com o servidor")
    } else {
      throw new Error("Erro ao buscar produtos")
    }
  }
}

export const createProduct = async (product: CreateProductDTO) => {
  try {
    const response = await axios.post<Product>(
      `${API_BASE_URL}/products`,
      product
    )
    return response.data
  } catch (err) {
    const error = err as AxiosError<{ error: string }>
    if (error.response) {
      throw new Error(
        `Erro ${error.response.status}: ${error.response.data.error}`
      )
    } else if (error.request) {
      throw new Error("Erro de conexão com o servidor")
    } else {
      throw new Error("Erro ao criar o produto")
    }
  }
}

export const deleteProduct = async (id: number) => {
  try {
    await axios.delete(`${API_BASE_URL}/products/${id}`)
  } catch (err) {
    const error = err as AxiosError<{ error: string }>
    if (error.response) {
      throw new Error(
        `Erro ${error.response.status}: ${error.response.data.error}`
      )
    } else if (error.request) {
      throw new Error("Erro de conexão com o servidor")
    } else {
      throw new Error("Erro ao excluir produto")
    }
  }
}
