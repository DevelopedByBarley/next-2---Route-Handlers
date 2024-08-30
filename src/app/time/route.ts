
/**
 * Buildelés során fontos!
 * 
 * Cache viselkedés a force-dynamic esetén:
Nincs cache: A force-dynamic beállítás arra utasítja a Next.js-t,
 hogy ne cache-elje az oldal vagy API végpont eredményét. 
 Ez azt jelenti, hogy minden egyes alkalommal, amikor 
 egy felhasználó lekéri az oldalt vagy az API végpontot, 
 a Next.js újra és újra futtatja a kódot, és a legfrissebb adatokat adja vissza. 
 Így biztosítod, hogy minden kéréskor friss adatokat kapjanak a felhasználók.

Mindig dinamikus generálás: Még ha a Next.js úgy is gondolná, hogy az oldal vagy az API végpont statikusan generálható, a force-dynamic beállítás kényszeríti a dinamikus feldolgozást, tehát semmilyen statikus vagy cache-elt verziót nem használ.

Cache viselkedés más beállításokkal:
force-static: Ha ezt használod, a Next.js statikusan generálja az oldalt vagy végpontot, és a cache-elt verziót szolgálja ki minden egyes kérésnél.

revalidate: Ezt beállítva megadhatod, hogy egy oldal mennyi ideig maradjon cache-elve, mielőtt újra generálódna. Például ha revalidate: 10 van beállítva, akkor az oldal vagy végpont 10 másodpercig lesz cache-elve, majd újra generálódik.
 */

export const dynamic = 'force-dynamic';

export async function GET() {
    return Response.json({
        time: new Date().toLocaleTimeString()
    });
}