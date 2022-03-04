import { useState,useEffect } from 'react'
import fetch from 'isomorphic-unfetch';
import { useRouter } from 'next/router';
import { Formik, Form, Field, ErrorMessage } from 'formik';

export default function NewBook() {
  const [open, setOpen] = useState(false);
  const [openClass, setOpenClass] = useState('');
  const router = useRouter();

  useEffect(() => {
    open ? setOpenClass('d-block') : setOpenClass('d-none')
  }, [open]);

  const createBook = async (values) => {
    try {
        const res = await fetch(`${process.env.MY_SITE_URI}/api/books`, {
            method: 'POST',
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(values)
        })
    } catch (error) {
        console.log(error);
    }
  }


  return (
    <Formik
      initialValues={{ 
        name: '',
        email: '', 
        tel: '',
        people: '',
        when: Date.now,
      }}
      onSubmit={ (values) => createBook(values) }
    >
      {({ isSubmitting }) => (
        <Form className='col-lg-10 mx-auto card'>

          <div className="card-header">
            Új hozzáadása
          </div>

          <div className="card-body">

            <div className="row g-4">

              <div className="col-lg-8">
                <label className='form-label' htmlFor="name">Név</label>
                <Field placeholder="Név" className="form-control" name="name" />
              </div>

              <div className="col-lg-4">
                <label className='form-label' htmlFor="people">Hányan főre?</label>
                <Field type='number' className="form-control" name="people" />
              </div>

              <div className="col-lg">
                <label className='form-label' htmlFor="tel">Telefonszám</label>
                <Field type='text' className="form-control" name="tel" />
              </div>

              <div className="col-lg">
                <label className='form-label' htmlFor="email">E-mail</label>
                <Field type='text' className="form-control" name="email" />
              </div>

              <div className='col-lg'>
                <label className='form-label' htmlFor="date">Dátum</label>
                <Field type='date' className="form-control" name='when'/>
              </div>

              <div className='col-lg'>
                <label className='form-label' htmlFor="idoszak">Időszak</label>
                <Field name="idoszak" className="form-select" component="select"> 
                  <option value="1">Ebéd - 11:00 - 14:00</option>
                  <option value="2">Délután - 14:00 - 18:00</option>
                  <option value="3">Este - 18:00 - 21:30</option>
                </Field>
              </div>

              <div className={`col-12 ${openClass}`}>
                <label className='form-label' htmlFor="note">Megyjegyzés</label>
                <Field component="textarea" className="form-control" style={{ height: '100px' }} name="note" />
              </div>

            </div>


            <div className='row g-4 mt-4 justify-content-between'>

              <div className='col-lg-auto'>
                <a
                  onClick={() => setOpen(!open)}
                  className='btn btn-light'
                >
                  { !open ? "+ Megjezés hozzáadása" : "Mégse" }
                </a>
              </div>

              <div className='col-lg-auto'>
                <button
                  type='submit'
                  className='btn btn-primary'
                  disabled={isSubmitting}
                >
                  Foglalás elküldése
                </button>
              </div>

            </div>
          </div>
      

        </Form>
      )}
    </Formik>
  )
}
