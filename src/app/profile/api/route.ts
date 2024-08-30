
import { headers, cookies } from "next/headers";
import { type NextRequest } from "next/server";

export async function GET(req: NextRequest) {
    const headers_1 = new Headers(req.headers);
    const headers_2 = headers();

    console.log(headers_1.get("Authorization"));
    console.log(headers_2.get("Authorization"));


    cookies().set('resultsPerPage', "20");
    const theme = req.cookies.get('theme');

    console.log(theme);
    console.log(cookies().get('resultsPerPage'));


    return new Response("<h1>Profile data</h1>", {
        headers: {
            'Content-Type': 'text/html',
            'Set-Cookie': 'theme=dark'
        }
    });
}