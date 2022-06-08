<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Border;

class SearchController extends Controller
{
    public function call(Request $request)
    {
        //var_dump($request["genre"]);
        $genre = $request["genre"];
        $not_isekai = $request["notIsekai"];
        header("Access-Control-Allow-Origin: *");  //CORS
        
        $url= 'https://api.syosetu.com/novelapi/api/?lim=20&genre=' . $genre . '&nottensei=' . $not_isekai . '&nottenni=' . $not_isekai . '&order=weekly&out=json';
        // ストリームコンテキストのオプションを作成
        $options = array(
            // HTTPコンテキストオプションをセット
            'http' => array(
                'method' => 'GET',
                'header' => 'User-Agent: *',
                            //'Content-type: application/json; charset=UTF-8' //JSON形式で表示
            )
        );
            
        // ストリームコンテキストの作成
        $context = stream_context_create($options);
        $raw_data = file_get_contents($url, false,$context);
        $raw_decode_data = json_decode($raw_data, true);
        //先頭のallcountを削除してforeachを使えるようにする
        $allcount = array_shift($raw_decode_data);

        //DBからborder値を取る処理

        //tensei_or_tenniはtinyint(boolean)型なので型を合わせる
        $not_isekai = (boolean)$not_isekai;
        $isekai = !$not_isekai;
        $border = Border::where("genre", $genre)
            ->where("tensei_or_tenni", $isekai)->first();
        //return $raw_decode_data;
        return array($raw_decode_data, $border);
    }
}
