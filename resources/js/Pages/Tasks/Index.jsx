import React from 'react';
// import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { router } from "@inertiajs/core";
import { Head, usePage, Link } from '@inertiajs/react';
import Pagination from '@/Components/Pagination';
import Header from '../../Layouts/Header';

export default function Index() {
    const { tasks } = usePage().props
  
   
    return (
        <Header>
  
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 bg-white border-b border-gray-200">
  
                            <div className="flex items-center justify-between mb-6">
                                <Link
                                    className="px-6 py-2 text-white bg-green-500 rounded-md focus:outline-none"
                                    href={ route("tasks.create") }
                                >
                                    Create Task
                                </Link>
                            </div>
  
                            <table className="table-fixed w-full">
                                <thead>
                                    <tr className="bg-gray-100">
                                        <th className="px-4 py-2 w-20">No.</th>
                                        <th className="px-4 py-2">Title</th>
                                        <th className="px-4 py-2">Description</th>
                                        <th className="px-4 py-2">User</th>
                                        <th className="px-4 py-2">Admin</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {tasks.data.map(({ id, title, description, user, admin }) => (
                                        <tr key={id}>
                                            <td className="border px-4 py-2">{ id }</td>
                                            <td className="border px-4 py-2">{ title }</td>
                                            <td className="border px-4 py-2">{ description }</td>
                                            <td className="border px-4 py-2">{ user.name }</td>
                                            <td className="border px-4 py-2">{ admin.name }</td>
                                        </tr>
                                    ))}
  
                                    {tasks.data.length === 0 && (
                                        <tr>
                                            <td
                                                className="px-6 py-4 border-t"
                                                colSpan="4"
                                            >
                                                No tasks found.
                                            </td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                            <Pagination class="mt-6" links={tasks.links} />

                        </div>
                    </div>
                </div>
            </div>
          </Header>
    );
}