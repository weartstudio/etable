import React from 'react'

const PageTitle = ({ title }) => {
	return (
		<div className='text-center rounded text-white bg-primary shadow py-4 mb-5'>
        <h1>{ title }</h1>
		</div>
	)
}

export default PageTitle