import React, { useEffect, useState } from 'react'
import { FaClock, FaUser } from 'react-icons/fa6';
import { useParams} from 'react-router-dom'
import SideBar from '../components/SideBar';

function SingleBlog() {

    const {id}=useParams();
    const [finaldata,setFinaldata]=useState(null);
    
    useEffect(function(){
        async function fetchData() {
            try {
              const res = await fetch(`http://localhost:9000/users/${id}`); // Corrected URL template literal
              const data = await res.json();
              console.log(data);
              
              setFinaldata(data); // Store the data in state
            } catch (error) {
              console.error('Error fetching data:', error);
            }
          }

          fetchData();
    },[id])

    if (!finaldata) {
        return ; // Handle loading state
      }
    const{title,image,category,author,published_date,reading_time,content}=finaldata;
    
    return (
        <div>
            <div className="py-24 bg-black text-center text-white px-4">
                <h1 className="text-5xl lg:text-7xl leading-snug font-bold mb-5">Single Blog Page</h1>
            </div>
            {/* Blog Details */}
            <div className='max-w-7xl mx-auto my-12 flex flex-col md:flex-row gap-12'>
                <div className='lg:w-3/4 mx-auto'>
                <div>
                    <img src={image} className='w-full mx-auto rounded' />
                </div>
                <h2 className='text-3xl mt-8 font-bold mb-4 text-blue-500 cursor-pointer'>{title}</h2>
                <p className='mb-3 text-gray-600'>
                   <FaUser className='inline-flex items-center mr-2'/> {author} | <FaClock className='inline-flex items-center mr-2'/>{published_date}</p>
                   <p className='mb-3 text-gray-600'>
                   <FaClock className='inline-flex items-center mr-2'/> {reading_time}</p>
                   <p className='text-base text-gray-500 mb-6'>{content}</p>
                   <div className='text-base text-gray-500'>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta aperiam magni aspernatur officia? Optio doloribus voluptatem consectetur vitae in sint ea neque earum fugiat corporis. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum amet aperiam illo, exercitationem temporibus beatae. Impedit at maiores exercitationem. Maiores deleniti provident fuga quasi labore.</p>
                    <br/>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga aspernatur, optio fugit, accusamus ullam natus eligendi repellendus impedit est dolores, odit ducimus inventore cum laborum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, nemo ea architecto mollitia sed nulla autem consequatur tempore optio. Ab enim consequatur tempora similique maiores?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, iure nam. Earum libero magni, laborum accusantium quis nihil officiis, unde laboriosam delectus quae, at officia? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam ab reprehenderit officiis impedit deserunt magnam aspernatur dolore sit, assumenda, voluptate animi eos neque, rem voluptatum.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta aperiam magni aspernatur officia? Optio doloribus voluptatem consectetur vitae in sint ea neque earum fugiat corporis. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum amet aperiam illo, exercitationem temporibus beatae. Impedit at maiores exercitationem. Maiores deleniti provident fuga quasi labore.</p>
                    <br/>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga aspernatur, optio fugit, accusamus ullam natus eligendi repellendus impedit est dolores, odit ducimus inventore cum laborum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, nemo ea architecto mollitia sed nulla autem consequatur tempore optio. Ab enim consequatur tempora similique maiores?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, iure nam. Earum libero magni, laborum accusantium quis nihil officiis, unde laboriosam delectus quae, at officia? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam ab reprehenderit officiis impedit deserunt magnam aspernatur dolore sit, assumenda, voluptate animi eos neque, rem voluptatum.</p><br/>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta aperiam magni aspernatur officia? Optio doloribus voluptatem consectetur vitae in sint ea neque earum fugiat corporis. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum amet aperiam illo, exercitationem temporibus beatae. Impedit at maiores exercitationem. Maiores deleniti provident fuga quasi labore.</p>
                    <br/>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga aspernatur, optio fugit, accusamus ullam natus eligendi repellendus impedit est dolores, odit ducimus inventore cum laborum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, nemo ea architecto mollitia sed nulla autem consequatur tempore optio. Ab enim consequatur tempora similique maiores?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, iure nam. Earum libero magni, laborum accusantium quis nihil officiis, unde laboriosam delectus quae, at officia? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam ab reprehenderit officiis impedit deserunt magnam aspernatur dolore sit, assumenda, voluptate animi eos neque, rem voluptatum.</p>
                   </div>
                </div>      
                <div className='lg:w-3/4 mx-auto'>
                    <SideBar/>
                </div>         
            </div>
        </div>
    )
}

export default SingleBlog
