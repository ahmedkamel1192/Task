import { useState } from 'react';
import { Link } from '@inertiajs/react';
import NavLink from '../Components/NavLink';

export default function Header({children }) {

    return (
        <div className="min-h-screen bg-gray-100">
            <nav className="bg-white border-b border-gray-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-16">
                        <div className="flex">
                            <div className="shrink-0 flex items-center">
                              <h1>Task Managment</h1>
                            </div>

                            <div className="space-x-8 sm:-my-px sm:ml-10 sm:flex">
                                <NavLink href={route('tasks.index')} active={route().current('tasks.index')}>
                                    Tasks
                                </NavLink>
                            </div>

                            <div className="space-x-8 sm:-my-px sm:ml-10 sm:flex">
                                <NavLink href={route('statistics.index')} active={route().current('statistics.index')}>
                                    Statistics
                                </NavLink>
                            </div>
                        </div>

                    </div>
                </div>
            </nav>

            <main>{children}</main>
        </div>
    );
}
