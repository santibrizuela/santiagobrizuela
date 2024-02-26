import React from 'react';
// motion
import { motion } from 'framer-motion';
//variant
import { fadeIn } from '../variants';

const About = () => {
  return (
    <section className='section' id='about'>
      <div className='container mx-auto'>
        <div className='flex flex-col gap-y-10 lg:flex-row lg:items-center
        lg:gap-x-20 lg:gap-y-0 h-screen'>
          {/* img */}
          <motion.div
            variants={fadeIn('right', 0.3)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1 bg-about bg-contain bg-no-repeat 
              h-[640px] bg-top'
            >
          </motion.div>
          {/* text */}
          <motion.div 
            
            variants={fadeIn('left', 0.5)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1 text-center lg:text-start'
          >
            <h2 className='h2 mb-1 text-blue-600 font-bold'>Divano</h2>
            <h3 className='font-bold text-xl text-sky-200 mb-2'>Ferreteria Industrial</h3>
            <p className='mb-6'>
            ¡Nosotros lo tenemos! Llevamos más de medio siglo ofreciendo asesoría a nuestros 
            clientes, abasteciendo industrias y empresas nacionales con flujos contínuos 
            de producción. Podemos decir que nuestra trayectoria respalda que seamos 
            ubicados como proveedores líderes y garantiza el excelente servicio de venta 
            y post-venta que ofrecemos en Ferretería Divano.
            </p>
            
            <div className='flex gap-x-8 items-center'>
              <a href='#contact'>
                  <button className='btn btn-lg btn-outline'>
                      Contactanos
                  </button>              
              </a>
              <a href='/catalogo' className='font-bold menuNav text-sky-200'>
                Catálogo
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
