<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $count = 10000;

        $usersChunks = User::factory()->count($count)->make()->chunk(1000)->toArray();
        foreach ($usersChunks as $chunk)
        {
            DB::table('users')->insert($chunk);
        }
    }
}
