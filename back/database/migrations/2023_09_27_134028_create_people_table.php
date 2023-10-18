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
        Schema::create('people', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('surname');
            $table->string('email');
            $table->string('image')->nullable();
            $table->string('phone');
            $table->string('address');
            $table->string('city');
            $table->enum('region', ["Andalucía", "Aragón", "Asturias", "Baleares", "Canarias", "Cantabria", "Castilla y León", "Castilla-La Mancha", "Cataluña", "Comunidad de Madrid", "Comunidad Valenciana", "Extremadura", "Galicia", "La Rioja", "Murcia", "Navarra", "País Vasco", "Ceuta" , "Melilla"]);
            $table->enum('dataprotection', ['sí', 'no']);
            $table->date('birthdate');
            $table->enum('gender', ['mujer', 'hombre', 'no binario', 'fluido', 'otros']);
            $table->string('dni');
            $table->unsignedBigInteger('id_status');
            $table->foreign('id_status')->references('id')->on('statuses');
            $table->unsignedBigInteger('id_bootcamp')->default(1);
            $table->foreign('id_bootcamp')->references('id')->on('bootcamps');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('people');
    }
};