import fs from 'fs';
import https from 'https';

async function download(url: string, outPath: string) {
    console.log(`Fetching ${url}...`);
    const res = await fetch(url);
    const html = await res.text();
    const match = html.match(/property="og:image"\s+content="([^"]+)"/i);
    
    if (match && match[1]) {
        let imgUrl = match[1].replace(/&amp;/g, '&');
        console.log(`Downloading URL to ${outPath}...`);
        await new Promise<void>((resolve, reject) => {
            https.get(imgUrl, (response) => {
                if (response.statusCode && response.statusCode >= 300 && response.statusCode < 400 && response.headers.location) {
                    https.get(response.headers.location, (resRedir) => {
                        const file = fs.createWriteStream(outPath);
                        resRedir.pipe(file);
                        file.on('finish', () => { file.close(); resolve(); });
                    }).on('error', reject);
                    return;
                }
                const file = fs.createWriteStream(outPath);
                response.pipe(file);
                file.on('finish', () => { file.close(); resolve(); });
            }).on('error', (err) => reject(err));
        });
        console.log(`Successfully saved ${outPath}`);
    } else {
        console.log(`Could not find image for ${url}`);
        const fallbackMatch = html.match(/https:\/\/chatgpt\.com\/backend-api\/estuary\/public_content\/enc\/[a-zA-Z0-9=]+/g);
        if (fallbackMatch && fallbackMatch.length > 0) {
            const imgUrl = fallbackMatch[0];
            console.log(`Using fallback URL for ${outPath}...`);
            await new Promise<void>((resolve, reject) => {
                https.get(imgUrl, (response) => {
                    if (response.statusCode && response.statusCode >= 300 && response.statusCode < 400 && response.headers.location) {
                        https.get(response.headers.location, (resRedir) => {
                            const file = fs.createWriteStream(outPath);
                            resRedir.pipe(file);
                            file.on('finish', () => { file.close(); resolve(); });
                        }).on('error', reject);
                        return;
                    }
                    const file = fs.createWriteStream(outPath);
                    response.pipe(file);
                    file.on('finish', () => { file.close(); resolve(); });
                }).on('error', (err) => reject(err));
            });
            console.log(`Successfully saved ${outPath} via fallback`);
        } else {
            console.log('No fallback found either.');
        }
    }
}

async function main() {
    await download('https://chatgpt.com/s/m_69eb264465188191920a46f4063458fa', 'public/logo.png');
}

main().catch(console.error);
