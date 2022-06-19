<?php

namespace App\Jobs;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldBeUnique;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;

use App\Models\Novel;

class SortNovel implements ShouldQueue
{
	use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;
	private $point;
	/**
	 * Create a new job instance.
	 *
	 * @return void
	 */
	public function __construct($novels)
	{
		$length = count($novels);
		$index = 0;
		$sort_list = [];
		foreach($novels as $novel) {
			$key = (string)$index;
			$sort_list += [$key => $novel["global_point"]];
			$index += 1;
		}
		arsort($sort_list);
		//logger($sort_list);
		$sort_json = json_encode($sort_list);
		$this -> point = $sort_json;
	}

	/**
	 * Execute the job.
	 *
	 * @return void
	 */
	public function handle()
	{
		$novel = new Novel();
		$novel -> item = "Pt";
		$novel -> index_list = $this -> point;
		/* '{"name" : "ポテパン1", "occupation" : "プログラマー"}'; */
		$novel -> save();
	}
}
