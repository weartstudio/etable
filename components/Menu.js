import Link from 'next/link'
import { useRouter } from "next/router";

export default function Menu() {
  const router = useRouter();
	return(  
    <nav className='navbar navbar-dark bg-dark sticky-top'>
      <div className="container-fluid">
        <Link href="/">
          <a className="navbar-brand">
            eTable
            {router.pathname == "/" ? 
              <span className="badge bg-primary ms-2">foglalások</span> 
            : ""}
          </a>
        </Link>
        <Link href="/book/new">
          <a className='btn btn-primary'>
            <i className="bi bi-plus-circle me-2"></i> 
            Új foglalás
          </a>
        </Link>
      </div>
    </nav>
	)
}
