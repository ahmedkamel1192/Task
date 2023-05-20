<?php

namespace App\Listeners;

use App\Events\TaskCreated;
use App\Models\Statistics;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Support\Facades\DB;

class UpdateStatistics implements ShouldQueue
{

    use InteractsWithQueue;
    /**
     * Create the event listener.
     */
    public function __construct()
    {
        //
    }

    /**
     * Handle the event.
     */
    public function handle(TaskCreated $event): void
    {
        Statistics::updateOrCreate(
            ['user_id' => $event->userId],
            ['task_count' => DB::raw('task_count + 1')]
        );
    }
}
