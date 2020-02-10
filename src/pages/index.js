import React from 'react';
import './styles.css';
import BtnWhatsapp from '../components/BtnWhatsapp';
import Logo from '../components/Logo';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import selo from '../assets/selo.jpg';
import img from '../assets/quadro.jpg';
import Helmet from 'react-helmet';

import { graphql, useStaticQuery } from 'gatsby';

const Header = ({ children }) => {
  return (
    <div className='p-4 bg-indigo-800 sm:flex justify-between items-center'>
      {children}
    </div>
  )
}

const Index = () => {
  const {site} = useStaticQuery(graphql`
    query MyQuery {
  site {
      siteMetadata {
        title
      }
    }
  }
  `)
  const selos = [1,2,3,4]
  const projetos = [1,2,3,4]
  return (
    <div>
      <Helmet>
        <title>{site.siteMetadata.title}</title>
      </Helmet>
      <Header>
        <Logo />
        <div>
          <BtnWhatsapp />
        </div>
      </Header>
      <Hero />
      <div className='flex flex-col items-center sm:flex-row justify-around'>
        {
          selos.map(() => {
            return <img src={selo} className='my-4' />
          })
        }
      </div>
      <div>
        <h2 className='px-8 py-2 text-2xl font-bold'>Projetos de móveis planejados</h2>
        <div className='flex flex-wrap bg-gray-200'>
        {projetos.map(() => {
          return(
              <div className='max-w-xl'>
                <div className='m-3 rounded shadow-lg'>
                  <img src={img} alt='Projeto 1' />
                  <div className='px-6 py-4'>
                    <p className='font-bold text-xl mb-2'>Projeto</p>
                    <p>Descrição</p>
                  </div>
                </div>
              </div>
            )
          })
        }
        </div>
      </div>

      <Footer />
    </div>


  )
}

export default Index