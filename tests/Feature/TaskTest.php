<?php

namespace Tests\Feature;

use App\Models\Admin;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class TaskTest extends TestCase
{
    use RefreshDatabase;

    /**
     * A basic test example.
     */
    public function test_index_route(): void
    {
        $response = $this->get(route('tasks.index'));

        $response->assertStatus(200);
    }

    public function test_create_task_will_fail_due_to_validation_error()
    {
        $user = User::factory()->create();
        $admin = Admin::factory()->create();

        $response = $this->post(route('tasks.store'), [
            'title' => 'test',
            'description' => 'Lorem Ipsum', // must be more than 20 character
            'user_id'=>$user->id,
            'admin_id'=>$admin->id,
        ]);
        $response->assertSessionHasErrors('description');

        $this->assertDatabaseMissing('tasks', [
            'user_id' => $user->id,
            'admin_id' => $admin->id,
        ]);
    }

    public function test_create_task_will_success()
    {
        $user = User::factory()->create();
        $admin = Admin::factory()->create();

        $response = $this->post(route('tasks.store'), [
            'title' => 'test',
            'description' => 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
            'user_id'=>$user->id,
            'admin_id'=>$admin->id,
        ]);

        $response->assertRedirect(route('tasks.index'));

        $this->assertDatabaseHas('tasks', [
            'title' => 'test',
            'user_id' => $user->id,
            'admin_id' => $admin->id,
        ]);

        $this->assertDatabaseHas('statistics', [
            'user_id' => $user->id,
            'task_count' => 1
        ]);
    }
}
