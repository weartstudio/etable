
import React from 'react'
import ReserveCard from '../components/ReserveCard'
import PageTitle from '../components/PageTitle'
import fetch from 'isomorphic-unfetch';


const Index = ({ books }) => {
  return(
    <>
      <PageTitle title="Foglalások" />
      <div className='row g-4'>
        {/* {items} */}
        {books.map(book => {
          return <ReserveCard 
            key={book._id} 
            book={book} 
          />
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
