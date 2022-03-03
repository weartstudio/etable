
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
  console.log( process.env.MY_SITE_URI )
  const apiURL = process.env.MY_SITE_URI + '/api/books';
  const res = await fetch(apiURL);
  const { data } = await res.json();

  return { books: data }
}

export default Index
