import React from 'react';
// import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, useForm, Link } from '@inertiajs/react';
import AsyncSelect from 'react-select/async';
import Header from '../../Layouts/Header';

export default function Dashboards() {

    const { data, setData, post, errors } = useForm({
        title: "",
        description: "",
        user_id: null,
        admin_id: null,
    });

    function handleSubmit(e) {
        e.preventDefault();
        post(route("tasks.store"));
    }

    function loadUsers(searchTerm) {
        if (searchTerm.length >= 3) {
            return axios.get(route('users.index') + `?search=${searchTerm}`)
                .then(res => { return res.data });
        }
    }

    function loadAdmins(searchTerm) {
        if (searchTerm.length >= 2) {
            return axios.get(route('admins.index') + `?search=${searchTerm}`)
                .then(res => { return res.data });
        }
    }

    return (
        <Header>

        <div className="py-12">
            <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                    <div className="p-6 bg-white border-b border-gray-200">

                        <div className="flex items-center justify-between mb-6">
                            <Link
                                className="px-6 py-2 text-white bg-blue-500 rounded-md focus:outline-none"
                                href={route("tasks.index")}
                            >
                                Back
                            </Link>
                        </div>

                        <form name="createForm" onSubmit={handleSubmit}>
                            <div className="flex flex-col">
                                <div className="mb-4">
                                    <label className="">Title</label>
                                    <input
                                        type="text"
                                        className="w-full px-4 py-2 border"
                                        label="Title"
                                        name="title"
                                        value={data.title}
                                        onChange={(e) =>
                                            setData("title", e.target.value)
                                        }
                                    />
                                    <span className="text-red-600">
                                        {errors.title}
                                    </span>
                                </div>
                                <div className="mb-0">
                                    <label className="">Description</label>
                                    <textarea
                                        type="text"
                                        className="w-full rounded border"
                                        label="description"
                                        name="description"
                                        errors={errors.body}
                                        value={data.body}
                                        onChange={(e) =>
                                            setData("description", e.target.value)
                                        }
                                    />
                                    <span className="text-red-600">
                                        {errors.description}
                                    </span>
                                </div>
                                <div className="mb-0">
                                    <label className="">User</label>

                                    <AsyncSelect
                                        name="user_id"
                                        loadOptions={loadUsers}
                                        getOptionLabel={option => option.name}
                                        getOptionValue={option => option.id}
                                        onChange={(value) =>
                                            setData("user_id", value.id)
                                        }
                                        placeholder="Search with minimum 3 characters"
                                    />

                                    <span className="text-red-600">
                                        {errors.user_id}
                                    </span>
                                </div>

                                <div className="mb-0">
                                    <label className="">Admin</label>

                                    <AsyncSelect
                                        name="user_id"
                                        loadOptions={loadAdmins}
                                        getOptionLabel={option => option.name}
                                        getOptionValue={option => option.id}
                                        onChange={(value) =>
                                            setData("admin_id", value.id)
                                        }
                                        placeholder="Search with minimum 2 characters"
                                    />

                                    <span className="text-red-600">
                                        {errors.admin_id}
                                    </span>
                                </div>

                            </div>
                            <div className="mt-4">
                                <button
                                    type="submit"
                                    className="px-6 py-2 font-bold text-white bg-green-500 rounded"
                                >
                                    Save
                                </button>
                            </div>
                        </form>

                    </div>
                </div>
            </div>
        </div>
        </Header>
    );
}
