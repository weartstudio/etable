import { useState,useEffect } from 'react'
import fetch from 'isomorphic-unfetch';
import { useRouter } from 'next/router';
import PageTitle from "../components/PageTitle";
import { Form, FloatingLabel, Button } from "react-bootstrap";
import { Formik } from 'formik';

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
        router.push("/");
    } catch (error) {
        console.log(error);
    }
  }


  return (
    <>
      <PageTitle title="Új hozzáadása" />
      <Formik
        initialValues={{ 
          name: '',
          email: '', 
          tel: '',
          people: '',
          date: '',
        }}
        onSubmit={ (values) => createBook(values) }
      >
        {({
          values,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => (
          isSubmitting
          ? <div className="spinner-border" role="status"></div>
          :
            <form className='col-lg-10 mx-auto card card-body shadow-sm' onSubmit={handleSubmit}>

              <h5>Adatok</h5>
              <div className="row row-cols-1 row-cols-md-2 g-4 mb-5">

                <div className="col">
                  <FloatingLabel label="Név">
                    <Form.Control 
                      required
                      placeholder="Minta János" 
                      name="name"
                      value={values.name}
                      onBlur={handleBlur}
                      onChange={handleChange}
                      />
                  </FloatingLabel>
                </div>

                <div className="col">
                  <FloatingLabel label="Hány fő?">
                    <Form.Control 
                    required
                      type='number' 
                      placeholder='2'
                      name="people"
                      value={values.people}
                      onChange={handleChange}
                    />
                  </FloatingLabel>
                </div>

                <div className="col">
                  <FloatingLabel label="Telefon">
                    <Form.Control 
                      required
                      type='text' 
                      placeholder='Telefonszám'
                      name="tel"
                      value={values.tel}
                      onChange={handleChange}
                    />
                  </FloatingLabel>
                </div>

                <div className="col">
                  <FloatingLabel label="Email">
                    <Form.Control 
                      type='text' 
                      placeholder='emailcím'
                      name="email"
                      value={values.email}
                      onChange={handleChange}
                    />
                  </FloatingLabel>
                </div>

              </div>

              <h5>Időpont választás</h5>
              <div className="row row-cols-2 mb-5">

                <div className='col'>
                  <FloatingLabel label="Dátum">
                    <Form.Control 
                      type='date' 
                      name='when'
                      value={values.when}
                      onChange={handleChange}
                    />
                  </FloatingLabel>
                </div>

                <div className='col'>
                  <FloatingLabel label="Időszak">
                    <Form.Select
                      name="idoszak"
                      value={values.idoszak}
                      onChange={handleChange}
                    > 
                      <option value="1">Ebéd - 11:00 - 14:00</option>
                      <option value="2">Délután - 14:00 - 18:00</option>
                      <option value="3">Este - 18:00 - 21:30</option>
                    </Form.Select>
                  </FloatingLabel>
                </div>
              </div>

              <div className={openClass}>
                <FloatingLabel controlId="newNote" label="Megjegyzés">
                  <Form.Control 
                    as="textarea" 
                    placeholder="pl.: Tortát hoznak" 
                    style={{ height: '100px' }} 
                    name="note"
                    value={values.note}
                    onChange={handleChange}
                  />
                </FloatingLabel>
              </div>

              <div className='row mt-4 justify-content-between'>

                <div className='col-auto'>
                  <Button
                    onClick={() => setOpen(!open)}
                    variant="light"
                    className='w-100'
                  >
                    { !open ? "+ Megjezés hozzáadása" : "Mégse" }
                  </Button>
                </div>

                <div className='col-auto'>
                  <Button
                    as="input"
                    type="submit"
                    value="Foglalás elküldése"
                    className='w-100'
                  />
                </div>

              </div>
          

            </form>
        )}
        </Formik>
    </>
  )
}
