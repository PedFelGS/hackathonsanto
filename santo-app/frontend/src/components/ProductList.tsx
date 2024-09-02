import { useState, useEffect } from "react"
import { fetchProducts, deleteProduct } from "../services/productService"
import { Product } from "../types/Products"
import "./ProductList.css"

export default function ProductList() {
  const [products, setProducts] = useState<Product[]>([])
  const [totalProducts, setTotalProducts] = useState<number>(0)
  const [currentPage, setCurrentPage] = useState<number>(1)
  const [error, setError] = useState<string>("")
  const [loading, setLoading] = useState<boolean>(false)

  const pageSize = 10

  const loadProducts = async (page: number) => {
    setLoading(true)
    try {
      const data = await fetchProducts(page, pageSize)
      setProducts(data.products)
      setTotalProducts(data.total)
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message)
      } else {
        setError("Ocorreu um erro desconhecido ao buscar produtos")
      }
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    loadProducts(currentPage)
  }, [currentPage])

  const handlePageChange = (newPage: number) => {
    if (newPage > 0 && newPage <= Math.ceil(totalProducts / pageSize)) {
      setCurrentPage(newPage)
    }
  }

  const handleDelete = async (productKey: number) => {
    if (window.confirm("Você tem certeza que deseja excluir este produto?")) {
      try {
        await deleteProduct(productKey)

        loadProducts(currentPage)
      } catch (err: unknown) {
        if (err instanceof Error) {
          setError(err.message)
        } else {
          setError("Ocorreu um erro desconhecido ao excluir o produto")
        }
      }
    }
  }

  const totalPages = Math.ceil(totalProducts / pageSize)

  return (
    <div className="product-list">
      <header className="list-header">
        <h1>Produtos Recentemente Cadastrados</h1>
        <p>(Atualize a página após a criação kkk)</p>
      </header>
      {loading && <p className="loading-message">Carregando produtos...</p>}
      {error && <p className="error-message">{error}</p>}
      <table className="product-table">
        <thead>
          <tr>
            <th>SKU</th>
            <th>Nome</th>
            <th>Descrição</th>
            <th>Cor</th>
            <th>Tamanho</th>
            <th>Estilo</th>
            <th>Custo</th>
            <th>Preço</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {products.length > 0 ? (
            products.map((product) => (
              <tr key={product.ProductKey}>
                <td>{product.ProductSKU}</td>
                <td>{product.ProductName}</td>
                <td>{product.ProductDescription}</td>
                <td>{product.ProductColor}</td>
                <td>{product.ProductSize}</td>
                <td>{product.ProductStyle}</td>
                <td>${product.ProductCost.toFixed(2)}</td>
                <td>${product.ProductPrice.toFixed(2)}</td>
                <td>
                  <button className="btnPUT">Atualizar</button>
                  <button onClick={() => handleDelete(product.ProductKey)}>
                    Excluir
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={9}>Nenhum produto encontrado</td>
            </tr>
          )}
        </tbody>
      </table>
      <div className="pagination">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Anterior
        </button>
        {[...Array(totalPages)].map((_, index) => (
          <button
            key={index + 1}
            onClick={() => handlePageChange(index + 1)}
            className={index + 1 === currentPage ? "active" : ""}
          >
            {index + 1}
          </button>
        ))}
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Próximo
        </button>
      </div>
    </div>
  )
}
