<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use App\Models\Border;

class SetBorder extends Command
{
	/**
	 * The name and signature of the console command.
	 *
	 * @var string
	 */
	protected $signature = 'set:border';

	/**
	 * The console command description.
	 *
	 * @var string
	 */
	protected $description = 'なろう小説APIを叩いて、その日の平均スコア（border）を算出してbordersテーブルに保存する';

	/**
	 * Create a new command instance.
	 *
	 * @return void
	 */
	public function __construct()
	{
		parent::__construct();
	}

	/**
	 * Execute the console command.
	 *
	 * @return mixed
	 */
	public function handle()
	{
		$border = new Border();
		$border -> dropBorder();
		$results = $border -> calcBorder("weekly", 101, 1);
		$border -> setBorder($results);
		$results = $border -> calcBorder("weekly", 101, 0);
		$border -> setBorder($results);
		$results = $border -> calcBorder("weekly", 102, 1);
		$border -> setBorder($results);
		$results = $border -> calcBorder("weekly", 102, 0);
		$border -> setBorder($results);
		$results = $border -> calcBorder("weekly", 201, 1);
		$border -> setBorder($results);
		$results = $border -> calcBorder("weekly", 201, 0);
		$border -> setBorder($results);
		$results = $border -> calcBorder("weekly", 202, 1);
		$border -> setBorder($results);
		$results = $border -> calcBorder("weekly", 202, 0);
		$border -> setBorder($results);
		$results = $border -> calcBorder("weekly", 301, 1);
		$border -> setBorder($results);
		$results = $border -> calcBorder("weekly", 301, 0);
		$border -> setBorder($results);
		$results = $border -> calcBorder("weekly", 302, 1);
		$border -> setBorder($results);
		$results = $border -> calcBorder("weekly", 302, 0);
		$border -> setBorder($results);
		$results = $border -> calcBorder("weekly", 303, 1);
		$border -> setBorder($results);
		$results = $border -> calcBorder("weekly", 303, 0);
		$border -> setBorder($results);
		$results = $border -> calcBorder("weekly", 304, 1);
		$border -> setBorder($results);
		$results = $border -> calcBorder("weekly", 304, 0);
		$border -> setBorder($results);
		$results = $border -> calcBorder("weekly", 305, 1);
		$border -> setBorder($results);
		$results = $border -> calcBorder("weekly", 305, 0);
		$border -> setBorder($results);
		$results = $border -> calcBorder("weekly", 306, 1);
		$border -> setBorder($results);
		$results = $border -> calcBorder("weekly", 306, 0);
		$border -> setBorder($results);
		$results = $border -> calcBorder("weekly", 307, 1);
		$border -> setBorder($results);
		$results = $border -> calcBorder("weekly", 307, 0);
		$border -> setBorder($results);
		$results = $border -> calcBorder("weekly", 401, 1);
		$border -> setBorder($results);
		$results = $border -> calcBorder("weekly", 401, 0);
		$border -> setBorder($results);
		$results = $border -> calcBorder("weekly", 402, 1);
		$border -> setBorder($results);
		$results = $border -> calcBorder("weekly", 402, 0);
		$border -> setBorder($results);
		$results = $border -> calcBorder("weekly", 403, 1);
		$border -> setBorder($results);
		$results = $border -> calcBorder("weekly", 403, 0);
		$border -> setBorder($results);
		$results = $border -> calcBorder("weekly", 404, 1);
		$border -> setBorder($results);
		$results = $border -> calcBorder("weekly", 404, 0);
		$border -> setBorder($results);
		$results = $border -> calcBorder("weekly", 9901, 1);
		$border -> setBorder($results);
		$results = $border -> calcBorder("weekly", 9901, 0);
		$border -> setBorder($results);
		$results = $border -> calcBorder("weekly", 9902, 1);
		$border -> setBorder($results);
		$results = $border -> calcBorder("weekly", 9902, 0);
		$border -> setBorder($results);
		$results = $border -> calcBorder("weekly", 9903, 1);
		$border -> setBorder($results);
		$results = $border -> calcBorder("weekly", 9903, 0);
		$border -> setBorder($results);
		$results = $border -> calcBorder("weekly", 9904, 1);
		$border -> setBorder($results);
		$results = $border -> calcBorder("weekly", 9904, 0);
		$border -> setBorder($results);
		$results = $border -> calcBorder("weekly", 9999, 1);
		$border -> setBorder($results);
		$results = $border -> calcBorder("weekly", 9999, 0);
		$border -> setBorder($results);
		$results = $border -> calcBorder("weekly", 9801, 1);
		$border -> setBorder($results);
		$results = $border -> calcBorder("weekly", 9801, 0);
		$border -> setBorder($results);

 		$results = $border -> calcBorder("weeklypoint", 101, 1);
		$border -> setBorder($results);
		$results = $border -> calcBorder("weeklypoint", 101, 0);
		$border -> setBorder($results);
		$results = $border -> calcBorder("weeklypoint", 102, 1);
		$border -> setBorder($results);
		$results = $border -> calcBorder("weeklypoint", 102, 0);
		$border -> setBorder($results);
		$results = $border -> calcBorder("weeklypoint", 201, 1);
		$border -> setBorder($results);
		$results = $border -> calcBorder("weeklypoint", 201, 0);
		$border -> setBorder($results);
		$results = $border -> calcBorder("weeklypoint", 202, 1);
		$border -> setBorder($results);
		$results = $border -> calcBorder("weeklypoint", 202, 0);
		$border -> setBorder($results);
		$results = $border -> calcBorder("weeklypoint", 301, 1);
		$border -> setBorder($results);
		$results = $border -> calcBorder("weeklypoint", 301, 0);
		$border -> setBorder($results);
		$results = $border -> calcBorder("weeklypoint", 302, 1);
		$border -> setBorder($results);
		$results = $border -> calcBorder("weeklypoint", 302, 0);
		$border -> setBorder($results);
		$results = $border -> calcBorder("weeklypoint", 303, 1);
		$border -> setBorder($results);
		$results = $border -> calcBorder("weeklypoint", 303, 0);
		$border -> setBorder($results);
		$results = $border -> calcBorder("weeklypoint", 304, 1);
		$border -> setBorder($results);
		$results = $border -> calcBorder("weeklypoint", 304, 0);
		$border -> setBorder($results);
		$results = $border -> calcBorder("weeklypoint", 305, 1);
		$border -> setBorder($results);
		$results = $border -> calcBorder("weeklypoint", 305, 0);
		$border -> setBorder($results);
		$results = $border -> calcBorder("weeklypoint", 306, 1);
		$border -> setBorder($results);
		$results = $border -> calcBorder("weeklypoint", 306, 0);
		$border -> setBorder($results);
		$results = $border -> calcBorder("weeklypoint", 307, 1);
		$border -> setBorder($results);
		$results = $border -> calcBorder("weeklypoint", 307, 0);
		$border -> setBorder($results);
		$results = $border -> calcBorder("weeklypoint", 401, 1);
		$border -> setBorder($results);
		$results = $border -> calcBorder("weeklypoint", 401, 0);
		$border -> setBorder($results);
		$results = $border -> calcBorder("weeklypoint", 402, 1);
		$border -> setBorder($results);
		$results = $border -> calcBorder("weeklypoint", 402, 0);
		$border -> setBorder($results);
		$results = $border -> calcBorder("weeklypoint", 403, 1);
		$border -> setBorder($results);
		$results = $border -> calcBorder("weeklypoint", 403, 0);
		$border -> setBorder($results);
		$results = $border -> calcBorder("weeklypoint", 404, 1);
		$border -> setBorder($results);
		$results = $border -> calcBorder("weeklypoint", 404, 0);
		$border -> setBorder($results);
		$results = $border -> calcBorder("weeklypoint", 9901, 1);
		$border -> setBorder($results);
		$results = $border -> calcBorder("weeklypoint", 9901, 0);
		$border -> setBorder($results);
		$results = $border -> calcBorder("weeklypoint", 9902, 1);
		$border -> setBorder($results);
		$results = $border -> calcBorder("weeklypoint", 9902, 0);
		$border -> setBorder($results);
		$results = $border -> calcBorder("weeklypoint", 9903, 1);
		$border -> setBorder($results);
		$results = $border -> calcBorder("weeklypoint", 9903, 0);
		$border -> setBorder($results);
		$results = $border -> calcBorder("weeklypoint", 9904, 1);
		$border -> setBorder($results);
		$results = $border -> calcBorder("weeklypoint", 9904, 0);
		$border -> setBorder($results);
		$results = $border -> calcBorder("weeklypoint", 9999, 1);
		$border -> setBorder($results);
		$results = $border -> calcBorder("weeklypoint", 9999, 0);
		$border -> setBorder($results);
		$results = $border -> calcBorder("weeklypoint", 9801, 1);
		$border -> setBorder($results);
		$results = $border -> calcBorder("weeklypoint", 9801, 0);
		$border -> setBorder($results);
	}

}
