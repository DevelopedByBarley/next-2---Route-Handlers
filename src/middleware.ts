import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
    const response = NextResponse.next();
    const theme = req.cookies.get('theme');

    if (!theme) {
        response.cookies.set('theme', 'lol');
    }

    response.headers.set('custom-header', 'custom-value');

    /* response.cookies.set('theme', 'dark', {
        maxAge: 60 * 60 * 24 * 7, // 7 nap (másodpercekben)
        httpOnly: true, // A cookie csak HTTP-kérésekkel érhető el, nem JavaScript segítségével
        path: '/', // A cookie az egész alkalmazásra érvényes
        secure: process.env.NODE_ENV === 'production', // Csak HTTPS-en keresztül érhető el, ha produkciós környezet
        sameSite: 'lax', // A cookie-t csak az ugyanazon webhelyre történő navigálás során küldi el
    }); */

    return response;
}



export const config = {
    matcher: [ '/', '/profile/:path*'],
};

/**
 * Alútvonalak Kezelése:

A :path* szintaxis lehetővé teszi, hogy a middleware ne csak az adott útvonalat, hanem annak összes alútvonalát is kezelje. Ez segít, ha egy adott útvonal alá eső összes oldalt szeretnél kezelni a middleware segítségével.
Például, ha a middleware-t az /profile útvonalra állítod be matcher: '/profile/:path*', akkor ez a middleware az /profile alatti összes oldalra vonatkozik, például /profile/settings, /profile/edit, stb.
Rugalmas Kiválasztás:

A :path* lehetővé teszi, hogy rugalmasan alkalmazz middleware-t az útvonalak különböző szintjein. Ha nem használnád a :path* szintaxist, akkor a middleware csak a pontosan megadott útvonalra vonatkozna.
 */