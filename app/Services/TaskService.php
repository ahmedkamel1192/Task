<?php

namespace App\Services;

use App\Events\TaskCreated;
use App\Models\Task;

class TaskService 
{
    public function store($data)
    {
        Task::Create($data);
        TaskCreated::dispatch($data['user_id']);
    }
}