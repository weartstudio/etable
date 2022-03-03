
import React from 'react'
import ReserveCard from '../components/ReserveCard'
import PageTitle from '../components/PageTitle'
import { Row, Col } from 'react-bootstrap'
import fetch from 'isomorphic-unfetch';


const Index = ({ books }) => {
  return(
    <>
      <PageTitle title="Foglalások" />
      <Row md={2} className='g-4'>
        {/* {items} */}
        {books.map(book => {
          return <ReserveCard 
            key={book._id} 
            book={book} 
          />
        })}
      </Row>
    </>
  )
} 

Index.getInitialProps = async () => {
  const res = await fetch(`${process.env.MY_SITE_URI}/api/books`);
  const { data } = await res.json();

  return { props: { books: data } }
}

export default Index
