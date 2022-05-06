import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className="absolute h-4/5 rounded-t-md w-full top-[600vh]
                    bg-gradient-to-tr from-primary via-black to-secondary">
        <div className="bg-slate-900 bg-opacity-80
                        h-full rounded-t-md grid grid-flow-col">
          <section className='col-span-2 rounded-tl-md backdrop-brightness-150'>
            <div className='row-span-1'>
                <img src='../../../assets/Logo.svg' width={120} className="mx-auto my-16"/>
            </div>
             <Line/>
            <Social/>
          </section>
           <section className='grid grid-flow-row col-span-5 gap-2'>
              <div className="row-span-1">
                <h1 className='text-primary font-audiowide text-[35px] ml-[50%] pt-2
                              text-shadow-md shadow-primary'>
                  {'>_'}PROGRAMMERS_KE</h1>
              </div>
              <div className="row-span-6 grid grid-flow-col gap-3 p-4">
                <section className='row-span-2 grid grid-flow-row gap-3'>
                  <div className='backdrop-blur-md
                               rounded-r-lg drop-shadow-lg
                                row-span-4'>
                    <h1 className='footerheader'>Tutorials</h1>
                     <Line/>
                      <FooterLink>Getting Started</FooterLink>
                      <FooterLink>The Computer Structure</FooterLink>
                      <FooterLink>Computer Programming</FooterLink>
                      <FooterLink>Internet and the Web</FooterLink>
                  </div>
                  <div className='row-span-2'>
                  </div>
                </section>
                <section className='row-span-2 grid grid-flow-row gap-3'>
                  <div className='backdrop-blur-md
                                rounded-r-lg drop-shadow-lg
                                row-span-5'>
                      <h1 className='footerheader'>Tech</h1>
                      <Line/>
                    <div className='flex flex-row'>
                      <div>
                        <FooterLink>Web Development</FooterLink>
                        <FooterLink>Internetworking</FooterLink>
                        <FooterLink>Mobile Development</FooterLink>
                        <FooterLink>Open Source Software</FooterLink>
                        <FooterLink>Android Development</FooterLink>
                      </div>
                      <div>
                        <FooterLink>Cybersecurity</FooterLink>
                        <FooterLink>Windows Development</FooterLink>
                        <FooterLink>Blockchain Development</FooterLink>
                        <FooterLink>Social Media</FooterLink>
                        <FooterLink>Machine Learning and AI</FooterLink>
                        <FooterLink>E-commerce</FooterLink>
                        <FooterLink>Advanced Engineering</FooterLink>
                      </div> 
                    </div>
                  </div>
                </section>
                 <section className='row-span-2 grid grid-flow-row gap-3'>
                  <div className='backdrop-blur-md
                               rounded-r-lg drop-shadow-lg
                                row-span-3'>
                    <h1 className='footerheader'>Community</h1>
                     <Line/>
                      <FooterLink>Our Story</FooterLink>
                      <FooterLink>Work with us</FooterLink>
                      <FooterLink>Feedback Hub</FooterLink>
                      <FooterLink>Contact Support</FooterLink>
                  </div>
                  <div className='backdrop-blur-md
                               rounded-r-lg drop-shadow-lg
                                row-span-6'>
                    <Link to="/online_compiler">   
                      <span className='footerheader flex flex-row group'>Online Compiler
                        <img src='../../../assets/icons/utils/link-svgrepo-com.svg' 
                        className='w-4 mx-1 my-auto opacity-0 group-hover:opacity-100'/>
                      </span>
                    </Link>
                    <Line/>
                  </div>
                </section>
                 <section className='row-span-2 grid grid-flow-row gap-3'>
                  <div className='backdrop-blur-md
                                rounded-r-lg drop-shadow-lg
                                row-span-2'>
                    <h1 className='footerheader'>Resources</h1>
                     <Line/>
                      <FooterLink>The Open Source community</FooterLink>
                      <FooterLink>Design Templates</FooterLink>
                      <FooterLink>Infographics</FooterLink>
                      <FooterLink>Books and PDFs</FooterLink>
                  </div>
                  <div className='backdrop-blur-md
                                 rounded-r-lg drop-shadow-lg
                                row-span-4'>
                    <h1 className='footerheader'>Other Projects</h1>
                     <Line/>
                     <FooterLink>Asteroid</FooterLink>
                     <FooterLink>Artistes_KE</FooterLink>
                  </div>
                </section>
              </div>
               <div className="row-span-3">
                  <hr className='w-4/5 ml-[15%] border-secondary my-3'/>
                  <span className='font-adventpro ml-10 text-white'>
                    See more on how you can contribute to efforts against the war in Ukraine
                  </span>
                  <button className='bg-yellow-500 ml-16 rounded-md p-2 text-sm font-novaflat
                                      hover:bg-blue-700 hover:rounded-lg hover:text-white 
                                      hover:text-shadow-md hover:shadow-white'>
                    Let's Go!
                  </button>
              </div>
          </section>
        </div>
    </div>
  )
}


function Social() {
  return (
      <div className='flex flex-row mx-auto'>
        <img src="../../../assets/icons/no_color/twitternocolor-svgrepo-com.svg" 
        width={24} className='py-3 mx-auto'/>
        <img src="../../../assets/icons/color_/github-svgrepo-com.svg" 
        width={24} className='py-3 mx-auto' />
        <img src="../../../assets/icons/no_color/linkedinnocolor-svgrepo-com.svg" 
        width={24} className='py-3 mx-auto' />
        <img src="../../../assets/icons/no_color/slacknocolor-svgrepo-com.svg" 
        width={24} className='py-3 mx-auto' />
      </div>
  )
}

const Line = () => {
  return (
       <hr className='w-3/4 mx-auto my-3 border-secondary drop-shadow-[0_0_2px_#33ffff]'/>
  )
}

const FooterLink = (props) => {
  return (
    <h1 className='footerlink'>
      {props.children}
    </h1>
  )
}

export default Footer