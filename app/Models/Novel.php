<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Novel extends Model
{
	use HasFactory;
	
	protected $fillable = [
	"item",
	"index_list",
  ];
  public $timestamps = false;

}
