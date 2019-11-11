import React from 'react'
import { Link } from 'react-router-dom'
import { Columns, Column } from 'react-flex-columns'
import { Heading, Quantity } from 'workshop'
import ProductImage from '../../../ui/ProductImage'
import ShoppingCartButton from '../../../ui/ShoppingCartButton'
import { useShoppingCartState } from '../../../state/ShoppingCartState'
import './BrowseProductItem.scss'

function BrowseProductItem({
  productId,
  name,
  imagePath,
  year = 'unknown',
  condition = 'n/a',
  brand = 'n/a',
  category = 'n/a',
}) {
  // Cart
  const { addToCart, getQuantity } = useShoppingCartState()
  const quantity = getQuantity(productId)

  return (
    <Columns gutters className="browse-product-item">
      <Column>
        <ProductImage src={imagePath} name={name} />
      </Column>
      <Column flex className="spacing-small">
        <Heading as="h1" size={3}>
          {name} ({year})
        </Heading>
        <div className="text-small horizontal-spacing">
          <span>Brand: {brand}</span>
          <span>Category: {category}</span>
          <span>Condition: {condition}</span>
        </div>
        <div>
          <Link to={`/products/${productId}`}>More Info</Link>
        </div>
      </Column>
      <Column className="spacing-small">
        <ShoppingCartButton productId={productId} />
        {quantity > 0 && (
          <div className="align-right">
            <Quantity onChange={q => addToCart(productId, q)} quantity={quantity} />
          </div>
        )}
      </Column>
    </Columns>
  )
}

export default BrowseProductItem
