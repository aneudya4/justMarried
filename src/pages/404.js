import React from 'react'
import SEO from '../components/SEO'
import Layout from '../components/Layout'
import { Link } from 'gatsby'
export default function NotFound() {
    return (
        <Layout>
            <SEO />
            <section className='not-found'>
                <h1>404</h1>
                <p>Page not found</p>
                <Link className='btn btn-primary' to='/'>Home</Link>
            </section>

        </Layout>
    )
}
