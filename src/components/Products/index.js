import React from 'react'
import {
    ProductContainer,
    ProductHead,
    ProductWrapper,
    ProductCard,
    ProductImg,
    ProductInfo,
    ProductTitle,
    ProductDesc,
    ProductPrice,
    ProductButton
} from './ProductStyle'

const Products = ({heading , data}) => {
    return (
        <ProductContainer>
            <ProductHead>{heading}</ProductHead>
            <ProductWrapper>
                {data.map( (product , index) => {
                    return(
                        <ProductCard key={index}>
                            <ProductImg src={product.img} alt={product.alt} />
                            <ProductInfo>
                                <ProductTitle>{product.name}</ProductTitle>
                                <ProductDesc>{product.desc}</ProductDesc>
                                <ProductPrice>{product.price}</ProductPrice>
                                <ProductButton>{product.button}</ProductButton>
                            </ProductInfo>
                            
                        </ProductCard>
                    )
                })}
            </ProductWrapper>
            
        </ProductContainer>
    )
}

export default Products
