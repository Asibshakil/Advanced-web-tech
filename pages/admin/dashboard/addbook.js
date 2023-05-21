import { useForm } from 'react-hook-form';
import axios from "axios"
import { useState } from "react"
import MyLayout from "@/pages/component/layout"
import { useRouter } from 'next/router'
import SessionCheck from '../../component/sessioncheck'
import AdminDrawer from '../../component/admindrawer'
import Footer from "../../../pages/component/footer"

export default function AddBook() {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm();
    const validateFile = (value) => {
        const file = value[0];
        const allowedtypes = ["image/jpg", "image/png"];

        if (!allowedtypes.includes(file.type)) {
            return false;
        }
    }
    const [success, setSuccess] = useState('')
    const onSubmit = async (data) => {
        console.log(data);
        const formData = new FormData();
        formData.append('id', data.id);
        formData.append('name', data.name);
        formData.append('author', data.author);
        formData.append('category', data.category);
        formData.append('price', data.price);
        console.log(formData);
        try {
            const response = await axios.post("http://localhost:3000/admin/book/insertbook/",
                formData, {
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            });


            setSuccess('Book add successfully');
            reset();

        }
        catch (error) {
            console.log(error.response.data.message);

            setSuccess('Book add unsuccessfull ' + error.response.data.message);

        }


    };

    return (
        <>
            <SessionCheck />
            <MyLayout title="Add Book" />
            <AdminDrawer />
            <div class="pt-44 sm:ml-64">
                <section class="bg-gray-50 dark:bg-gray-900">
                    <div class="flex flex-col items-center justify-center px-auto mx-auto md:h-screen lg:py-0">

                        <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                            <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                                <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                                    Add Book
                                </h1>
                                <p id="filled_success_help" class="mt-2 text-xs text-green-600 dark:text-green-400"><span class="font-medium"> {success}</span></p>

                                <form onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data" class="space-y-4 md:space-y-6" action="#">
                                    <div>
                                        <label for="id" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">ID</label>
                                        <input type="text" id="ID" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="id" required=""
                                            {...register('id', { required: true })}
                                        />
                                        {errors.id &&
                                            <p id="outlined_error_help" class="mt-2 text-xs text-red-600 dark:text-red-400"><span class="font-medium">ID is required</span></p>
                                        }
                                    </div>
                                    <div>
                                        <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
                                        <input type="text" id="name" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name" required=""
                                            {...register('name', { required: true })}
                                        />
                                        {errors.name &&
                                            <p id="outlined_error_help" class="mt-2 text-xs text-red-600 dark:text-red-400"><span class="font-medium">Name is required</span></p>
                                        }
                                    </div>
                                    <div>

                                        <label for="author" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Author</label>
                                        <textarea id="author" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Author name here...." {...register('author', { required: true })} />
                                    </div>

                                    <div>

                                        <label for="category" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Category</label>
                                        <textarea id="category" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Category name here...." {...register('category', { required: true })} />
                                    </div>
                                    <div>

                                        <label for="price" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Price</label>
                                        <textarea id="price" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Price of this book...." {...register('price', { required: true })} />
                                    </div>

                                    <button type="submit" class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Submit</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>

            </div>
            <Footer />
        </>
    );
}