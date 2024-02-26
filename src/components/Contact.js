import React from 'react';
// motion
import { motion } from 'framer-motion';
// variants
import { fadeIn } from '../variants';
import { FaInstagram, FaWhatsapp, FaRegClock } from 'react-icons/fa';
import { ImLocation } from 'react-icons/im';
import { AiOutlineMail } from 'react-icons/ai';

const Contact = () => {
  return (
    <section className='py-16 lg:section' id='contact'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row'>
          {/* text */}
          <motion.div 
            variants={fadeIn('right', 0.3)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className='flex items-center mx-auto text-center lg:text-start'
          >
            <div>
              <h2 className='text-gradient font-bold text-[45px] lg:text-[86px] leading-none mb-8'>
                Contacto
              </h2>
              <a target='_blank' rel='noreferrer' href='https://www.wa.link/quekoy'>
                <p className='flex menuNav'>
                  <FaWhatsapp className='my-auto mx-1'/> 11-5165-5081
                </p>
              </a>
              <a href='mailto:ventas@ferreteriadivano.com'>
                <p className='flex menuNav'>
                  <AiOutlineMail className='my-auto mx-1'/> ventas@ferreteriadivano.com
                </p>
              </a>
              <a target='_blank' rel='noreferrer' href='https://maps.app.goo.gl/L58UuF4Te1e5ozq49'>
                <p className='flex menuNav'>
                  <ImLocation className='my-auto mx-1'/> Cnel. Thorne 831
                </p>
              </a>
              <a target='_blank' rel='noreferrer' href='https://maps.app.goo.gl/L58UuF4Te1e5ozq49'>
                <p className='flex menuNav'>
                  <FaRegClock className='my-2 mx-1'/> <div className='text-justify'>Lun a Vie: 8hs a 12hs - 14:30 a 18hs <br/> Sábados: 8hs a 12:30hs</div>
                </p>
              </a>

              
              {/* socials */}
              <motion.div 
                variants={fadeIn('up', 0.7)} 
                initial="hidden" 
                whileInView={'show'} 
                viewport={{once: false, amount: 0.7}}
                className='flex-1 flex text-[20px] gap-x-6 my-6 max-w-max mx-auto lg:mx-2'
              >
                <a target='_blank' rel='noreferrer' href='https://www.wa.link/quekoy'>
                    <div className='rounded-full icolink shadow-lg shadow-grey-400 p-6 hover:scale-110 ease-in duration-300'>
                        <FaWhatsapp/>
                    </div>
                </a>
                <a target='_blank' rel='noreferrer' href='https://www.instagram.com/ferreteriadivano/'>
                    <div className='rounded-full icolink shadow-lg shadow-grey-400 p-6 hover:scale-110 ease-in duration-300'>
                        <FaInstagram/>
                    </div>
                </a>    
                <a target='_blank' rel='noreferrer' href='https://maps.app.goo.gl/L58UuF4Te1e5ozq49'>
                    <div className='rounded-full icolink shadow-lg shadow-grey-400 p-6 hover:scale-110 ease-in duration-300'>
                        <ImLocation/>
                    </div>
                </a>
              </motion.div>
            </div>
          </motion.div>
          {/* form */}
          <div className='flex hover:scale-100 ease-in duration-300 md:h-[60vh] md:w-[60vw] mx-auto md:px-2'>

            
            
            <motion.iframe 
              variants={fadeIn('up', 0.7)} 
              initial="hidden" 
              whileInView={'show'} 
              viewport={{once: false, amount: 0.7}}
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d410.0776701186856!2d-58.499149776485865!3d-34.68950459999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcc92d1155c1db%3A0x6d685744be067489!2sFerreter%C3%ADa%20Industrial%20Divano!5e0!3m2!1ses-419!2sar!4v1707240803923!5m2!1ses-419!2sar" 
              className='relative flex-shrink-0 w-full rounded-xl'
              allowfullscreen="" 
              loading="lazy" 
              referrerpolicy="no-referrer-when-downgrade"
            ></motion.iframe>

          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Contact;
