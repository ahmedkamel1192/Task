import React from 'react';
import Header from '@/Layouts/Header';
import { router } from "@inertiajs/core";
import { Head, usePage, Link } from '@inertiajs/react';

export default function Index() {
    const { statistics } = usePage().props
  
   
    return (
    
            <Header>
  
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 bg-white border-b border-gray-200">
                            <table className="table-fixed w-full">
                                <thead>
                                    <tr className="bg-gray-100">
                                        <th className="px-4 py-2">User</th>
                                        <th className="px-4 py-2">Tasks count</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {statistics.map(({id, user, task_count}) => (
                                        <tr key={id}>
                                        
                                            <td className="border px-4 py-2 text-center">{ user.name }</td>
                                            <td className="border px-4 py-2 text-center">{ task_count }</td>
                                        </tr>
                                    ))}
  
                                    {statistics.length === 0 && (
                                        <tr>
                                            <td
                                                className="px-6 py-4 border-t"
                                                colSpan="4"
                                            >
                                                No contacts found.
                                            </td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>

                        </div>
                    </div>
                </div>
            </div>
          </Header>
    );
}
