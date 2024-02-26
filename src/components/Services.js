import React from 'react';
// icons
import { BsArrowUpRight } from 'react-icons/bs'
// motion
import { motion } from 'framer-motion';
// variants
import {fadeIn} from '../variants'

// services data
const services = [
  
  
  
  {
    name: 'Herramientas',
    description:
     'Atornilladoras, Amoladoras, Pistolas de Calor, Sierras y Artículos para las diferentes herramientas (Discos, Llaves, Mechas, Puntas).',
    link: '/catalogo',
  },
  {
    name: 'Maquinarias',
    description:
     'Compresores de distintos HP, Soldadoras Inverter, Rotopercutores.',
    link: '/catalogo',
  },
  {
    name: 'Seguridad',
    description:
     'Máscaras, Antiparras y Lentes para soldar, Guantes de Tela y Cuero, Mamelucos.',
    link: '/catalogo',
  }
  
]

const Services = () => {
  return (
  <section className='section' id='services'>
    <div className='container mx-auto'>
      <div className='flex flex-col lg:flex-row'>
        {/* text & image */}
        <motion.div 
          variants={fadeIn('right', 0.3)}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: false, amount: 0.3 }}
          className='flex-1 
          mix-blend-lighten mb-12 lg:mb-0  text-center lg:text-start'
        >
          <h2 className='h2 font-bold text-blue-400 my-4'>Productos</h2>
          <h3 className='h3 lg:max-w-[455px] lg:mb-10'>
            Proveemos<a href='/transporte' className='font-bold menuNav text-sky-200'> Herramientas</a>,   
            <a href='/actividades' className='font-bold menuNav text-sky-200'> Compresores</a>, 
            <a href='/actividades' className='font-bold menuNav text-sky-200'> Soldadoras</a> y todo lo que 
            necesites para mejorar, suplementar y garantizar la seguridad en la producción de tu industria.
             
          </h3>
          <a href='/catalogo'>
            <button className='btn btn-outline'>Ver mas</button>
          </a>
          
        </motion.div>
        {/* services */}
        <motion.div
          variants={fadeIn('left', 0.5)}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: false, amount: 0.3 }}
          className='flex-1'
        >
          {/* service list */}
          <div>
            {services.map((service, index) => {
              // destructure service
              const { name, description, link } = service;
              return (
                <div 
                  className='border-b border-white/20 h-[146px] 
                  mb-[38px] flex' 
                  key={index}
                >
                  <div className='max-w-[476px]'>
                    <a href={link}>
                      <h4 className='text-gradient text-[2rem] tracking-wider w-min font-primary 
                      font-bold mb-6 uppercase'>
                        {name}
                      </h4>
                    </a>
                    
                    <p className='font-secondary leading-tight'>
                      {description}
                    </p>
                  </div>
                  <div className='flex flex-col flex-1 items-end'>
                    <a 
                      href={link} 
                      className='btn w-9 h-9 mb-[42px] flex justify-center items-center'
                    >
                      <BsArrowUpRight />
                    </a>
                    <a href={link} className='text-gradient font-bold text-sm'>
                      Ver Más
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  </section>
  );
};

export default Services;
