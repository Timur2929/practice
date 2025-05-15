<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\User;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // Create admin user
        User::create([
            'name' => 'Admin',
            'email' => 'admin@blinow.com',
            'password' => Hash::make('password'),
            'email_verified_at' => now(),
        ]);

        // Create some sample users
        User::create([
            'name' => 'Мария Иванова',
            'email' => 'maria@example.com',
            'password' => Hash::make('password'),
            'email_verified_at' => now(),
        ]);

        User::create([
            'name' => 'Иван Петров',
            'email' => 'ivan@example.com',
            'password' => Hash::make('password'),
            'email_verified_at' => now(),
        ]);

        // Create more users with factory
        User::factory(10)->create();
    }
}
