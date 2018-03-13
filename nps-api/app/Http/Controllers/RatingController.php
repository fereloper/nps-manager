<?php

namespace App\Http\Controllers;

use App\Http\Requests\RatingRequest;
use App\Rating;


class RatingController extends Controller
{
    /**
     * Store a newly created resource in storage.
     *
     * @param  App\Http\Requests\RatingRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(RatingRequest $request)
    {
        $data = $request->all();
    
        $rating = Rating::create($data);
        
        if($rating) {
            
            return response()->json(['error' => false, 'data' => $rating]);
            
        }
    
        return response()->json([['error' => true, 'data' => 'There was an error to save your rating. Please try again.']]);
    }
}
