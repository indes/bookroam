<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Book;
use Illuminate\Support\Facades\DB;


class BookController extends Controller
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
        // dd($request);
        $bookname = $request["bookTitle"];
        $getRes = DB::table('book')->where('book_name', $bookname)->first();
        if($getRes){
            DB::table('user_book')->insert([
                ['user_id' => $request['userId'], 'book_id' => $getRes->book_id, 'status' => 0]                
            ]);
            return 1;
        }else{
            DB::table('book')->insert([
                [
                'book_number' => $request['bookId'], 
                'book_name' => $request['bookTitle'], 
                'book_author' => $request['bookAuthor'],
                'book_press' => $request['bookPress']
                ]
            ]);
            $getRes = DB::table('book')->where('book_name', $bookname)->first();
            DB::table('user_book')->insert([
                ['user_id' => $request['userId'], 'book_id' => $getRes->book_id, 'status' => 0]
            ]);

            
        }
        return 1;
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
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

    public function sharedPeople($id)
    {
        //
        $users = [];
        $userid = DB::table('user_book')->where('book_id', $id)->get();
        foreach($userid as $u){
            array_push($users, DB::table("user")->where("user_id", $u->user_id)->get());
            // print($u->user_id);
            // $users.append(DB::table("user")->where("user_id", $u->user_id)->get());
        }
        return response()->json($users);
    }
    public function recommend($id)
    {
        $bookData = DB::table('book')->where('book_id', $id)->first();
        // dd($bookData);
        $category = $bookData->book_classify_two;
        $author = $bookData->book_author;

        $booklist = [];
        array_push($booklist, DB::table("book")->where("book_classify_two", $category)->first());
        array_push($booklist, DB::table("book")->where("book_author", $author)->first());
        array_push($booklist, DB::table("book")->where("book_classify_one", $bookData->book_classify_one)->first());
    
        return response()->json($booklist);
    }

    public function borrow(Request $request){

        $contact = $request["contact"];
        $content = $request["content"];
        $userId = $request["userId"];
        $fuserId = $request["fuserId"];
        $bookId = $request['bookId'];
        $id = DB::table('borrow')->insert(
            ['borrow_user_id' => $userId, "borrow_book_id" => $bookId, "borrow_status"=> 1]
        );
        return response()->json($id);
    }


}
