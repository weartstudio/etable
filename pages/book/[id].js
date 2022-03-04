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
					<form className='card col-lg-10 mx-auto'>

						<div className="card-header">
							{book.name}
							<Text tag="badge badge-primary" text={book.date, book.time} />
						</div>

						<div className="card-body">
							<div className="row">

								<div className="col">
									<label className="form-label">Hány főre?</label>
									<p>{book.people}</p>
								</div>

								<div className="col">
									<label className="form-label">Telefon</label>
									<p>{book.tel}</p>
								</div>

								<div className="col">
									<label className="form-label">Email</label>
									<p>{book.email}</p>
								</div>

								<div className="col-12">
									<label className="form-label">Megjegyzés</label>
									<p>{book.note}</p>
								</div>

							</div>

							<button onClick={ () => handleDelete(book._id) } className='btn btn-outline-danger'>
								<i className="bi bi-trash me-2"></i>
								Foglalás törlése
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