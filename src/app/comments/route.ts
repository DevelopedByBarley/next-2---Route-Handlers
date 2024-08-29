import { NextRequest } from 'next/server';
import { comments } from './data'

export async function GET(req: NextRequest) {
    const searchParams = req.nextUrl.searchParams;
    console.log(searchParams);
    const query = searchParams.get('query');
    const filteredComments = query ? comments.filter(comment => comment.text.includes(query)) : comments;
    return Response.json(filteredComments)
}

export async function POST(request: Request) {
    const comment = await request.json();

    const newComment = {
        id: comments.length + 1,
        text: comment.text
    }
    comments.push(newComment);
    return new Response(JSON.stringify(newComment), {
        headers: {"Content-Types": "application/json"}, status: 201
    });
}