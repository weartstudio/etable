
import React from 'react'
import ReserveCard from '../components/ReserveCard'
import fetch from 'isomorphic-unfetch';


const Index = ({ books }) => {
  return(
    <>
      <div className='row row-cols-1 row-cols-md-2 g-4'>
        {books.map(book => {
          return <ReserveCard key={book._id} book={book} />
        })}
      </div>
    </>
  )
} 

export async function getServerSideProps() {
  const res = await fetch(`${process.env.MY_SITE_URI}/api/books`);
  const { data } = await res.json();

  return { props: { books: data } }
}

export default Index
