import React from 'react'
import Coursenav from '../coursecomp/Coursenav'
import Coursefooter from '../coursecomp/Coursefooter'
import Coursehero1 from '../coursecomp/Coursehero1'
import Coursemarquee from '../coursecomp/Coursemarquee'
import Coursehero2 from '../coursecomp/Coursehero2'
import Coursecard from '../coursecomp/Coursecard'
import  Courseprocess  from '../coursecomp/Courseprocess'
import Coursetestnomial from '../coursecomp/Coursetestnomial'
function Courses() {
  return (
<>

<Coursenav />
<Coursehero1 />
<Coursemarquee />
<Coursehero2 />
<Coursecard />
<Courseprocess />
<Coursetestnomial />
<Coursefooter />
</>
  )
}

export default Courses