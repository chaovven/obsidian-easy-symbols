import * as esbuild from 'esbuild';
import { appendFile, readFile, readdir } from 'node:fs/promises';

async function dependencyNotices(inputs) {
  const directories = [...new Set(inputs.flatMap(path => {
    const match = /^(.*node_modules\/(?:@[^/]+\/)?[^/]+)\//.exec(path);
    return match ? [match[1]] : [];
  }))].sort();
  const notices = [];
  for (const directory of directories) {
    const pkg = JSON.parse(await readFile(`${directory}/package.json`, 'utf8'));
    const filename = (await readdir(directory)).find(name => /^licen[cs]e(?:\.|$)/i.test(name));
    let text;
    if (filename) {
      text = await readFile(`${directory}/${filename}`, 'utf8');
    } else if (pkg.name === 'format' && pkg.licenses?.some(license => license.type === 'MIT')) {
      // format 0.2.2 declares MIT in package.json, with attribution in its README.
      const readme = await readFile(`${directory}/Readme.md`, 'utf8');
      const copyright = readme.match(/^Copyright[^\n]*/m)?.[0];
      if (!copyright) throw new Error(`Missing copyright notice: ${pkg.name}`);
      const projectLicense = await readFile('LICENSE', 'utf8');
      text = `${copyright}\n\n${projectLicense.slice(projectLicense.indexOf('Permission is hereby granted'))}`;
    } else {
      throw new Error(`Missing dependency license: ${pkg.name}`);
    }
    notices.push(`${pkg.name}@${pkg.version}\n\n${text.trim()}`);
  }
  return notices.join('\n\n--------------------\n\n');
}

const options = {
  entryPoints: ['src/main.ts'], bundle: true, platform: 'browser', target: 'es2020',
  format: 'cjs', outfile: 'main.js', sourcemap: false,
  external: ['obsidian', '@codemirror/state', '@codemirror/view', '@codemirror/language', '@lezer/common', '@lezer/highlight'],
  minify: !process.argv.includes('--watch'),
  metafile: true,
  plugins: [{
    name: 'release-checks',
    setup(build) {
      build.onEnd(async result => {
        if (result.errors.length || !result.metafile) return;
        const inputs = Object.keys(result.metafile.inputs);
        const forbidden = inputs.filter(path => /node_modules\/(?:@codemirror|@lezer)\//.test(path));
        if (forbidden.length) throw new Error(`Host dependencies bundled: ${forbidden.join(', ')}`);
        const notices = await dependencyNotices(inputs);
        // Keep notices inside main.js so every installed plugin receives them.
        await appendFile('main.js', `\n/*! Third-party licenses\n\n${notices.replaceAll('*/', '* /')}\n*/\n`);
      });
    },
  }],
};
if (process.argv.includes('--watch')) await (await esbuild.context(options)).watch();
else await esbuild.build(options);
