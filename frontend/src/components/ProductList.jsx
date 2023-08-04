import React from 'react'
import { Link } from "react-router-dom";

const ProductList = () => {
  return (
    <div className='flex flex-col mt-5'>
        <div className='w-full'>
            <Link to="/add" className='bg-green-500 hover:bg-green-700 border border-slate-500 text-white font-bold py-2 px-4 rounded-lg' >Add New</Link>
            <div className='relative shadow rounded-lg mt-3'>
                <table className='w-full text-sm text-left text-gray-500'>
                    <thead className='text-xs text-gray-700 uppercase bg-gray-100'>
                        <tr>
                            <th className='py-3 px-1 text-center'>No</th>
                            <th className='py-3 px-6'>Product Name</th>
                            <th className='py-3 px-6'>Price</th>
                            <th className='py-3 px-1 text-center'>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className='bg-white border-b'>
                            <th className='py-3 px-1 text-center'>1</th>
                            <th className='py-3 px-6 font-medium text-gray-900'>Product 1</th>
                            <th className='py-3 px-6'>435</th>
                            <th className='py-3 px-1 text-center'>
                                <Link to={`/edit/`} className='font-medium bg-blue-400 hover:bg-blue-500 px-3 py-1 rounded text-white mr-1' >Edit</Link>
                                <button className='font-medium bg-red-400 hover:bg-red-500 px-3 py-1 rounded text-white' >Edit</button>
                            </th>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

    </div>
  )
}

export default ProductList