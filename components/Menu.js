import Link from 'next/link'

export default function Menu() {
	return(
    <nav className='navbar navbar-dark bg-dark stick-top'>
      <div className="container-fluid">
        <Link href="/">
          <a className="navbar-brand">eTable</a>
        </Link>
        <Link href="/uj-foglalas">
          <a className='btn btn-primary'>
            <i className="bi bi-plus-circle me-2"></i> 
            Új foglalás
          </a>
        </Link>
      </div>
    </nav>
	)
}
