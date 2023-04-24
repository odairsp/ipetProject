<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('avaliations', function (Blueprint $table) {
            $table->id();
            $table->integer('Qntd');
            $table->string('Description')->nullable();
            $table->foreignId('Loja_id');
            $table->foreignId('Usuario_id');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('avaliations');
    }
};
