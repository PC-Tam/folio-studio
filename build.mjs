import {build} from 'esbuild';
await build({entryPoints:['app.jsx'],bundle:true,format:'esm',outdir:'.',jsx:'automatic',minify:true,legalComments:'linked',define:{'process.env.NODE_ENV':'"production"'}});
