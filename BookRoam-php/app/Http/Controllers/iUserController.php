<?php

namespace App\Http\Controllers;

use App\iUser;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class iUserController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        // $res = [
        //     // "user" => iUser::where("user_id", "=", $id),
        //     "user" => iUser::find($id),
        //     // "forum" => DB::table('forum')->where('forum_user_id', $id)->get(),
        //     // "history" => DB::table('borrow_record')->where('borrow_record_user_id', $id)->get()
        // ];
        return response()->json(iUser::find($id));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
    public function find(Request $request)
    {
        //

        $userName = $request["nickName"];
        $avatarUrl = $request["avatarUrl"];
        $user = DB::table('user')->where('user_username', $userName)->first();
        if ($user) {
            return response()->json($user->user_id);
        } else {
            $id = DB::table('user')->insertGetId(
                ['user_username' => $userName, "user_avatarUrl" => $avatarUrl]
            );
            $user = DB::table('user')->where('user_username', $userName)->first();
            return response()->json($user->user_id);
        }

        // return 1;
    }

    public function shareHistory($id){
        $list = DB::table('user_book')->where('user_id', $id)->get();
        
        $bookList = [];
        foreach($list as $e){
            array_push($bookList, DB::table("book")->where("book_id", $e->book_id)->first());
        }

        return response()->json($bookList);
    }
}
