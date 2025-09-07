import React, { useEffect, useState } from 'react'
import BlogCards from './BlogCards';
import Pagination from './Pagination';
import CategorySelection from './CategorySelection';
import SideBar from './SideBar';

function BlogPage() {

    const[blogs,setBlogs]=useState([]);
    const[currentPage,setCurrentPage]=useState(1);
    const pageSize=12;//number of blogs per page
    const[selectedCategory,setSelectedCategory]=useState(null);
    const[activeCategory,setActiveCategory]=useState(null);

    useEffect(function(){
        async function fetchdata() {
            let url=`http://localhost:9000/users?page=${currentPage}&limit=${pageSize}`;

            // filter by category
            if(selectedCategory)
            {
                url+=`&category=${selectedCategory}`
            }
            const res=await fetch(url);
            const data=await res.json();
            console.log(data);
            
            setBlogs(data);
            
        }

        fetchdata();
    },[currentPage,pageSize,selectedCategory])

    //page changing button
    function handlePageChange(pageNumber)
    {
        setCurrentPage(pageNumber);
    }

    function handleCategoryChange(category){
        setSelectedCategory(category)
        setCurrentPage(1);
        setActiveCategory(category);
    }


    return (
        <div>
            {/* category section*/ }
            <div>
                <CategorySelection onSelectCategory={handleCategoryChange} selectedCategory={selectedCategory} activeCategory={activeCategory}/>
            </div>
            {/* blog */}
            <div className='flex flex-col lg:flex-row gap-12'>
                <BlogCards blogs={blogs} currentPage={currentPage} selectedCategory={selectedCategory} pageSize={pageSize} />

                {/* sideBar  component*/}

                <div>
                    <SideBar/>
                </div>
            </div>
            {/* pagination section */}
            <div>
                <Pagination onPageChange={handlePageChange} currentPage={currentPage} blogs={blogs} pageSize={pageSize}/>
            </div>
        </div>
    )
}

export default BlogPage
