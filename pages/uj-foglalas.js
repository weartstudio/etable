import { useState,useEffect } from 'react'
import fetch from 'isomorphic-unfetch';
import { useRouter } from 'next/router';
import PageTitle from "../components/PageTitle";
import { Card, Row, Col, Form, Spinner, FloatingLabel, Button, Collapse } from "react-bootstrap";
import { Formik } from 'formik';

export default function NewBook() {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  const createBook = async (values) => {
    try {
        const res = await fetch(`${process.env.SITE_URI}/api/books`, {
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
          ? <Spinner animation="border" />
          :
            <Form className='col-lg-10 mx-auto' onSubmit={handleSubmit}>
              <Card className="shadow-sm">
                <Card.Body>

                    <h5>Adatok</h5>
                    <Row  md={2} className='g-4 mb-5'>

                      <Col>
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
                      </Col>

                      <Col>
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
                      </Col>

                      <Col>
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
                      </Col>

                      <Col>
                        <FloatingLabel label="Email">
                          <Form.Control 
                            type='text' 
                            placeholder='emailcím'
                            name="email"
                            value={values.email}
                            onChange={handleChange}
                          />
                        </FloatingLabel>
                      </Col>

                    </Row>


                    <h5>Időpont választás</h5>
                    <Row className='mb-5'>

                      <Col>
                        <FloatingLabel label="Dátum">
                          <Form.Control 
                            type='date' 
                            name='when'
                            value={values.when}
                            onChange={handleChange}
                          />
                        </FloatingLabel>
                      </Col>

                      <Col>
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
                      </Col>

                    </Row>



                    <Collapse in={open}>
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
                    </Collapse>

                    <Row className='mt-4 justify-content-between'>

                      <Col md={3}>
                        <Button
                          onClick={() => setOpen(!open)}
                          variant="light"
                          className='w-100'
                        >
                          { !open ? "+ Megjezés hozzáadása" : "Mégse" }
                        </Button>
                      </Col>

                      <Col md={3}>
                        <Button
                          as="input"
                          type="submit"
                          value="Foglalás elküldése"
                          className='w-100'
                        />
                      </Col>

                    </Row>
          
                </Card.Body>
              </Card>
            </Form>
        )}
        </Formik>
    </>
  )
}
