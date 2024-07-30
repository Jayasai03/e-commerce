import React from 'react'
import {Row, Col} from 'react-bootstrap'
import { Link, useParams } from 'react-router-dom'
import Product from '../components/Product'
import { useGetProductsQuery } from '../slices/productsApiSlice'
import Loader from '../components/Loader'
import Message from '../components/Message'
import Paginate from '../components/Paginate'
import ProductCarousel from '../components/ProductCarousel'
import Meta from '../components/Meta'

const HomeScreen = () => {
  const { pageNumber, keyword, type } = useParams();
  const { data, isLoading, error } = useGetProductsQuery({keyword, type, pageNumber});
  return (
    <>
        <h1>Our Top Rated Products</h1>
        {!keyword ? <ProductCarousel/> : (<Link to='/' className='btn btn-light mb-4'>Go Back</Link>)}
        {isLoading ? (
          <Loader/>
        ):error ? (<Message variant = 'danger'>{error?.data?.message || error.error}</Message>) : (
          <>
            <Meta />
            <h1>Latest Products</h1>
            <Row>
                {data.products.map((product)  => (
                    <Col key = {product.id} sm={12} md={6} lg={4} xl={3}>
                        < Product product = {product} />
                    </Col>
                ))}
            </Row> 
            <Paginate pages={data.pages} page={data.page} keyword = {keyword ? keyword: ''}  type = {type ? type: ''}/>
          </>)}
    </>
  )
}

export default HomeScreen
