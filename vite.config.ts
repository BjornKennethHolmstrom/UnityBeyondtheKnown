import { defineConfig } from 'vitest/config';
import { sveltekit } from '@sveltejs/kit/vite';
import { exec } from 'child_process';
import { promisify } from 'util';

const execAsync = promisify(exec);

// Custom plugin to generate PDFs during build
const pdfGeneratorPlugin = () => {
	return {
		name: 'pdf-generator',
		async buildStart() {
			// Only generate PDFs in production builds
			if (process.env.NODE_ENV === 'production' || process.env.GENERATE_PDFS === 'true') {
				console.log('🚀 Generating PDFs...');
				try {
					await execAsync('node scripts/generate-pdfs.js');
					console.log('✅ PDFs generated successfully');
				} catch (error) {
					console.warn('⚠️  PDF generation failed:', error.message);
					// Don't fail the build if PDF generation fails
				}
			}
		}
	};
};

export default defineConfig({
	plugins: [
		sveltekit(),
		pdfGeneratorPlugin()
	],

	build: {
		rollupOptions: {
			external: (id) => {
				// Don't bundle Node.js specific modules in client code
				if (id === 'puppeteer' || id === 'marked' || id.startsWith('fs')) {
					return true;
				}
				return false;
			}
		}
	},

	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	},

	// Development server configuration
	server: {
		fs: {
			// Allow serving files from static directory
			allow: ['..']
		}
	}
});
