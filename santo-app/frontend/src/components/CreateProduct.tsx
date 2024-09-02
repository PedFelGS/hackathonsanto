import { useState } from "react"
import { CreateProductDTO } from "../types/CreateProductDTO"
import { Product } from "../types/Products"
import { createProduct } from "../services/productService"
import "./CreateProduct.css"

export default function CreateProduct() {
  const [product, setProduct] = useState<CreateProductDTO>({
    ProductSubcategoryKey: 0,
    ProductSKU: "",
    ProductName: "",
    ModelName: "",
    ProductDescription: "",
    ProductColor: "",
    ProductSize: "",
    ProductStyle: "",
    ProductCost: 0,
    ProductPrice: 0,
  })

  const [createdProduct, setCreatedProduct] = useState<Product | null>(null)
  const [error, setError] = useState<string>("")

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
      const newProduct = await createProduct(product)
      setCreatedProduct(newProduct)
      setError("")
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message)
      } else {
        setError("Ocorreu um erro desconhecido ao criar o produto")
      }
    }
  }

  return (
    <div className="create-product-card">
      <header className="card-header">
        <h1>Criar Novo Produto</h1>
        <p>Preencha os detalhes do seu novo produto.</p>
      </header>
      <div className="card-content">
        <form onSubmit={handleSubmit} className="product-form">
          <div className="container-line">
            <div className="form-group input-Subcategoria">
              <div className="content-form">
                <label htmlFor="ProductSubcategoryKey">Subcategoria</label>
                <input
                  id="ProductSubcategoryKey"
                  name="ProductSubcategoryKey"
                  type="number"
                  placeholder="Insira o código da subcategoria"
                  value={product.ProductSubcategoryKey}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="form-group input-CodigoSKU">
              <div className="content-form">
                <label htmlFor="ProductSKU">SKU</label>
                <input
                  id="ProductSKU"
                  name="ProductSKU"
                  type="text"
                  placeholder="Insira o código do produto"
                  value={product.ProductSKU}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
          <div className="container-line">
            <div className="form-group input-NomeProduto">
              <div className="content-form">
                <label htmlFor="ProductName">Nome do Produto</label>
                <input
                  id="ProductName"
                  name="ProductName"
                  type="text"
                  placeholder="Insira o nome do produto"
                  value={product.ProductName}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="form-group input-NomeModelo">
              <div className="content-form">
                <label htmlFor="ModelName">Modelo</label>
                <input
                  id="ModelName"
                  name="ModelName"
                  type="text"
                  placeholder="Insira o modelo do produto"
                  value={product.ModelName}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
          <div className="container-line">
            <div className="form-group input-Descricao">
              <div className="content-form">
                <label htmlFor="ProductDescription">Descrição</label>
                <textarea
                  id="ProductDescription"
                  name="ProductDescription"
                  placeholder="Descreva detalhadamente o produto"
                  value={product.ProductDescription}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
          <div className="container-line">
            <div className="form-group input-Cor">
              <div className="content-form">
                <label htmlFor="ProductColor">Cor</label>
                <input
                  id="ProductColor"
                  name="ProductColor"
                  type="text"
                  placeholder="Insira a cor do produto"
                  value={product.ProductColor}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="form-group input-TamanhoProduto">
              <div className="content-form">
                <label htmlFor="ProductSize">Tamanho</label>
                <input
                  id="ProductSize"
                  name="ProductSize"
                  type="text"
                  placeholder="Insira o tamanho do produto"
                  value={product.ProductSize}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
          <div className="container-block">
            <div className="form-group input-Estilo">
              <div className="content-form">
                <label htmlFor="ProductStyle">Estilo</label>
                <input
                  id="ProductStyle"
                  name="ProductStyle"
                  type="text"
                  placeholder="Insira o estilo do produto"
                  value={product.ProductStyle}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
          <div className="container-line">
            <div className="form-group input-Custo">
              <div className="content-form">
                <label htmlFor="ProductCost">Custo</label>
                <input
                  id="ProductCost"
                  name="ProductCost"
                  type="number"
                  placeholder="Insira o custo do produto"
                  value={product.ProductCost}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="form-group input-Preco">
              <div className="content-form">
                <label htmlFor="ProductPrice">Preço</label>
                <input
                  id="ProductPrice"
                  name="ProductPrice"
                  type="number"
                  placeholder="Insira o preço do produto"
                  value={product.ProductPrice}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
          <button type="submit" className="submit-button">
            Criar Produto
          </button>
        </form>
        {error && <p className="error-message">{error}</p>}
        {createdProduct && (
          <div className="created-product">
            <h2>Produto Criado:</h2>
            <p>
              <strong>SKU:</strong> {createdProduct.ProductSKU}
            </p>
            <p>
              <strong>Nome:</strong> {createdProduct.ProductName}
            </p>
            <p>
              <strong>Descrição:</strong> {createdProduct.ProductDescription}
            </p>
            <p>
              <strong>Cor:</strong> {createdProduct.ProductColor}
            </p>
            <p>
              <strong>Tamanho:</strong> {createdProduct.ProductSize}
            </p>
            <p>
              <strong>Estilo:</strong> {createdProduct.ProductStyle}
            </p>
            <p>
              <strong>Custo:</strong> {createdProduct.ProductCost}
            </p>
            <p>
              <strong>Preço:</strong> {createdProduct.ProductPrice}
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
