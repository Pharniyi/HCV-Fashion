import React, {useEffect, useState} from 'react'
//import {products} from '../src/assets'
import {Link} from 'react-router-dom'

const ProductPage = () => {
  //const {productId} = useParams();
  const product =products.find((item) => item._id ===id)
  const [image, setImage] =useState(null)
  const [size, setSize] = useState(null)

  useEffect(() => {
    if (product){
      setImage(product.image[0])
    }
  },[product])
  return (
    product && (
    <div>
      <div>
        {product.image.map((item,index)=> (
          <div key={index}>
            <img onClick={ () => setImage(item)} src={item} alt={'productimage'} className="object-cover aspect-square" />
          </div>
        ))}
      </div>

      <div>
        <img src={image} alt="productimage" />
      </div>
    </div>

    {/*product info*/}
    <div>
      <h3>{product.name}</h3>
      <div>
        <div>
          <TbStarFilled/>
          <TbStarFilled/>
          <TbStarFilled/>
          <TbStarHalfFilled/>
        </div>
        <p>(22)</p>
      </div>
      <div>
        <h3>{currency} {product.price}.00</h3>
        <h4>{currency} {product.price}.00</h4>
      </div>
      <p className="max-w-[555px]">{product.description}</p>
      <div>
        <div>
          {[...product.sizes].sort((a,b) => {
            const order= ['S', 'M', 'L', 'XL']
          })}
        </div>
      </div>
    </div>
    )
  )
}

export default ProductPage