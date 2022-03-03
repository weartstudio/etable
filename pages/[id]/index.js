import fetch from 'isomorphic-unfetch';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Text from '../../components/low-level/Text';


const Book = ({ book }) => {
    const router = useRouter();
		const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        if (isDeleting) {
					deleteThis();
        }
    }, [isDeleting])


		const deleteThis = async (id) => {
			try {
					const deleted = await fetch(`/api/books/${id}`, {
							method: "Delete"
					});
					router.push("/");
			} catch (error) {
					console.log(error)
			}
		}

		const handleDelete = async (id) => {
			setIsDeleting(true);
			deleteThis(id)
		}


    return (
        <div className="container">
            {isDeleting
                ? <div className="spinner-border" role="status"></div>
                :
                <form className='card card-body col-lg-10 mx-auto'>

									<h1 className='card-title h3 mb-4'>Foglalás adatai</h1>

									<h6>Alapadatok</h6>
									<div className="row mb-4">

										<div className="col-8">
											<div className="input-group">
												<span className="input-group-text bi bi-person"></span>
												<input value={book.name} type="text" className="form-control" />
											</div>
										</div>

										<div className="col input-group">
											<span className="input-group-text bi bi-people"></span>
											<input value={book.people} type="number" className="form-control" />
										</div>

									</div>

									<h6>Időpont</h6>
									<div className="row mb-4">

										<div className="col input-group">
											<span className="input-group-text bi bi-calendar-check"></span>
											<input value={book.date} type="date" className="form-control" />
										</div>

										<div className="col input-group">
											<span className="input-group-text bi bi-alarm"></span>
											<input value={book.time} type="text" className="form-control" />
										</div>

									</div>

									<h6>Elérhetőségek</h6>
									<div className="input-group mb-3">
										<span className="input-group-text bi bi-telephone"></span>
										<input value={book.tel} type="text" className="form-control" />
									</div>

									<div className="input-group mb-3">
										<span className="input-group-text bi bi-envelope"></span>
										<input value={book.email} type="text" className="form-control" />
									</div>

									<h6>Megjegyzés</h6>
									<div className="input-group mb-3">
										<span className="input-group-text bi bi-sticky"></span>
										<textarea value={book.note} type="text" className="form-control"></textarea>
									</div>
	
									<div className="d-flex justify-content-between mt-4">
										<button 
											className='btn btn-outline-danger col-auto' 
											onClick={ () => handleDelete(book._id) }
										>
											<i className="bi bi-trash me-2"></i>
											Foglalás törlése
										</button>
										<button 
											className='btn btn-primary col-auto' 
										>
											<i className="bi bi-pen me-2"></i>
											Foglalás módosítás
										</button>
									</div>
                </form>
            }
        </div>
    )
}

Book.getInitialProps = async ({ query: { id } }) => {
    const res = await fetch(`${process.env.MY_SITE_URI}/api/books/${id}`);
    const { data } = await res.json();

    return { book: data }
}

export default Book;