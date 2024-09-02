import { Entity, Column, PrimaryGeneratedColumn } from "typeorm"

@Entity("adventureworks_products")
export class Product {
  @PrimaryGeneratedColumn({ name: "ProductKey", type: "int" })
  ProductKey?: number

  @Column({ name: "ProductSubcategoryKey", type: "int", nullable: true })
  ProductSubcategoryKey?: number

  @Column({ name: "ProductSKU", type: "varchar", length: 50, nullable: true })
  ProductSKU?: string

  @Column({ name: "ProductName", type: "varchar", length: 50, nullable: true })
  ProductName?: string

  @Column({ name: "ModelName", type: "varchar", length: 50, nullable: true })
  ModelName?: string

  @Column({
    name: "ProductDescription",
    type: "varchar",
    length: 256,
    nullable: true,
  })
  ProductDescription?: string

  @Column({ name: "ProductColor", type: "varchar", length: 50, nullable: true })
  ProductColor?: string

  @Column({ name: "ProductSize", type: "varchar", length: 50, nullable: true })
  ProductSize?: string

  @Column({ name: "ProductStyle", type: "varchar", length: 50, nullable: true })
  ProductStyle?: string

  @Column({
    name: "ProductCost",
    type: "numeric",
    precision: 10,
    scale: 2,
    nullable: true,
  })
  ProductCost?: number

  @Column({
    name: "ProductPrice",
    type: "numeric",
    precision: 10,
    scale: 2,
    nullable: true,
  })
  ProductPrice?: number
}
