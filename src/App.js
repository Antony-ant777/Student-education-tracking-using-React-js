import React, { useState } from 'react';
import { BiSolidReport } from "react-icons/bi";
import { FaBook, FaClinicMedical } from "react-icons/fa";
import { HiMiniRectangleGroup } from "react-icons/hi2";
import { IoBookSharp, IoFileTray, IoMailOpen, IoManSharp } from "react-icons/io5";
import { MdAccountCircle, MdSupervisorAccount } from "react-icons/md";
import { RiDiscountPercentFill } from "react-icons/ri";


import royal from './royal.png';

function Studentedutracking() {
    const [one,setOne]=useState(0);
    const [two,setTwo]=useState(0);
    const [three,setThree]=useState(0);

  return (
    <div>
        <div className='leftside'>
            <div>
            <img src={royal} className='logo' /> <br></br>
            <MdSupervisorAccount  className='lefticon'/>
            <li>Student Management</li>
            <IoFileTray className='lefticon' />
            <li>Financial Management</li>
            <RiDiscountPercentFill className='lefticon'/>
            <li>Quality Control</li>
            <HiMiniRectangleGroup className='lefticon' />
            <li>Report Delivery</li>

            <BiSolidReport className='lefticon'/> 
            <li>Attendance</li>
            </div>
             </div>

             <div className='top'>
                <p>Student Management</p>
            </div>

            <div className='lineone'>
                <div className='box'>
                    <div className='boxin' >
                    <div >
                    <MdAccountCircle className='icon' onClick={()=>setOne(one+1)} />
                    </div>
                    <div className='num'>
                        <h3>{one}</h3>
                    </div>
                    </div>
                    <p>Regular Student</p>
                </div>
                <div className='box'>
                    <div className='boxin' >
                    <div >
                    <MdAccountCircle className='icon' onClick={()=>setTwo(two+1)}/>
                    </div>
                    <div className='num'>
                        <h3>{two}</h3>
                    </div>
                    </div>
                    <p>Remaindal Student</p>
                </div>
                <div className='box'>
                    <div className='boxin' >
                    <div >
                    <IoManSharp className='icon' onClick={()=>setThree(three+1)}/>
                    </div>
                    <div className='num'>
                        <h3>{three}</h3>
                    </div>
                    </div>
                    <p>IN Paid Clubs</p>
                </div>
                
            </div>
            <hr></hr>
            <h1>Menu</h1>
            <div className='line2'>
                <div className='one'>
                    <MdAccountCircle className='ic'/>
                    <h4>Regular Enrollment</h4>
                </div>
                <div className='one'>
                    <FaBook  className='ic'/>
                    <h4>Remaindal Enrollment</h4>
                </div>
                <div className='one'>
                    <IoManSharp className='ic'/>
                    <h4>Club Management</h4>
                </div>
            </div>
            <div className='line3'>
                <div className='one'>
                    <IoBookSharp  className='ic'/>
                    <h4>Classroom Management</h4>
                    
                </div>
                <div className='one'>
                    <IoMailOpen  className='ic'/>
                    <h4>SMS/EMAIL</h4>
                </div>
                <div className='one'>
                    <BiSolidReport className='ic'/>
                    <h4>Attendance</h4>
                </div>

            </div>
            <div className='line4'>
                <div className='one'>
                    <FaClinicMedical  className='ic'/>
                    <h4>Clinic</h4>
                </div>
                
            </div>
                

    </div>
  )
}

export default Studentedutracking





