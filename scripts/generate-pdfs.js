#!/usr/bin/env node

import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
import { marked } from 'marked';
import puppeteer from 'puppeteer';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const languages = ['en', 'sv', 'ru', 'zh'];
const blueprintTypes = ['food-forest-blueprint'];

async function generatePDF(markdownContent, outputPath, language) {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  
  // Convert markdown to HTML
  const htmlContent = marked(markdownContent);
  
  // CSS for beautiful PDF styling
  const css = `
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700&display=swap');
      
      body {
        font-family: 'Inter', sans-serif;
        line-height: 1.6;
        color: #1a202c;
        max-width: 800px;
        margin: 0 auto;
        padding: 40px;
        background: white;
      }
      
      h1 {
        color: #2d5a27;
        font-size: 2.5em;
        font-weight: 300;
        border-bottom: 3px solid #48bb78;
        padding-bottom: 10px;
        margin-bottom: 30px;
      }
      
      h2 {
        color: #2d5a27;
        font-size: 1.8em;
        font-weight: 600;
        margin-top: 40px;
        margin-bottom: 20px;
        border-left: 4px solid #48bb78;
        padding-left: 20px;
      }
      
      h3 {
        color: #2b6cb0;
        font-size: 1.4em;
        font-weight: 600;
        margin-top: 30px;
        margin-bottom: 15px;
      }
      
      h4 {
        color: #4a5568;
        font-size: 1.2em;
        font-weight: 600;
        margin-top: 25px;
        margin-bottom: 10px;
      }
      
      p {
        margin-bottom: 15px;
        text-align: justify;
      }
      
      ul, ol {
        margin-bottom: 20px;
        padding-left: 30px;
      }
      
      li {
        margin-bottom: 8px;
      }
      
      strong {
        color: #2d3748;
        font-weight: 600;
      }
      
      em {
        color: #4a5568;
        font-style: italic;
      }
      
      blockquote {
        border-left: 4px solid #e2e8f0;
        padding-left: 20px;
        margin: 20px 0;
        font-style: italic;
        color: #4a5568;
      }
      
      code {
        background-color: #f7fafc;
        padding: 2px 6px;
        border-radius: 4px;
        font-family: 'Courier New', monospace;
        font-size: 0.9em;
      }
      
      table {
        width: 100%;
        border-collapse: collapse;
        margin: 20px 0;
      }
      
      th, td {
        border: 1px solid #e2e8f0;
        padding: 12px;
        text-align: left;
      }
      
      th {
        background-color: #f7fafc;
        font-weight: 600;
        color: #2d3748;
      }
      
      .page-break {
        page-break-before: always;
      }
      
      .text-center {
        text-align: center;
      }
      
      .text-small {
        font-size: 0.9em;
        color: #718096;
      }
      
      .highlight-box {
        background-color: #f0fff4;
        border: 2px solid #9ae6b4;
        border-radius: 8px;
        padding: 20px;
        margin: 20px 0;
      }
      
      .tip-box {
        background-color: #fffaf0;
        border-left: 4px solid #ed8936;
        padding: 15px 20px;
        margin: 15px 0;
      }
      
      @media print {
        body { margin: 0; }
        .page-break { page-break-before: always; }
      }
    </style>
  `;
  
  const fullHtml = `
    <!DOCTYPE html>
    <html lang="${language}">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Food Forest Blueprint</title>
      ${css}
    </head>
    <body>
      ${htmlContent}
    </body>
    </html>
  `;
  
  await page.setContent(fullHtml, { waitUntil: 'networkidle0' });
  
  await page.pdf({
    path: outputPath,
    format: 'A4',
    printBackground: true,
    margin: {
      top: '20mm',
      right: '15mm',
      bottom: '20mm',
      left: '15mm'
    }
  });
  
  await browser.close();
  console.log(`✅ Generated PDF: ${outputPath}`);
}

async function loadTranslations(language) {
  try {
    const translationPath = path.join(__dirname, `../src/lib/i18n/locales/${language}.json`);
    const content = await fs.readFile(translationPath, 'utf8');
    return JSON.parse(content);
  } catch (error) {
    console.warn(`⚠️  Could not load translations for ${language}, using English as fallback`);
    const englishPath = path.join(__dirname, '../src/lib/i18n/locales/en.json');
    const content = await fs.readFile(englishPath, 'utf8');
    return JSON.parse(content);
  }
}

async function generateMarkdownFromTranslations(language, translations) {
  // This function would generate the markdown content using the translation keys
  // For now, we'll use template files, but this could be dynamically generated
  
  const templatePath = path.join(__dirname, `../src/content/blueprints/food-forest-blueprint-${language}.md`);
  
  try {
    return await fs.readFile(templatePath, 'utf8');
  } catch (error) {
    // Fallback to English template
    const englishTemplatePath = path.join(__dirname, '../src/content/blueprints/food-forest-blueprint-en.md');
    return await fs.readFile(englishTemplatePath, 'utf8');
  }
}

async function ensureDirectoryExists(dirPath) {
  try {
    await fs.access(dirPath);
  } catch {
    await fs.mkdir(dirPath, { recursive: true });
    console.log(`📁 Created directory: ${dirPath}`);
  }
}

async function generateAllPDFs() {
  console.log('🚀 Starting PDF generation...\n');
  
  for (const blueprintType of blueprintTypes) {
    for (const language of languages) {
      try {
        // Load translations
        const translations = await loadTranslations(language);
        
        // Generate markdown content
        const markdownContent = await generateMarkdownFromTranslations(language, translations);
        
        // Ensure output directory exists
        const outputDir = path.join(__dirname, `../static/downloads/${blueprintType}/${language}`);
        await ensureDirectoryExists(outputDir);
        
        // Generate PDF
        const outputPath = path.join(outputDir, `${blueprintType}-${language}.pdf`);
        await generatePDF(markdownContent, outputPath, language);
        
      } catch (error) {
        console.error(`❌ Error generating PDF for ${blueprintType} in ${language}:`, error.message);
      }
    }
  }
  
  console.log('\n🎉 PDF generation complete!');
  console.log('\nGenerated files:');
  
  for (const blueprintType of blueprintTypes) {
    for (const language of languages) {
      const filePath = `static/downloads/${blueprintType}/${language}/${blueprintType}-${language}.pdf`;
      console.log(`   📄 ${filePath}`);
    }
  }
}

// Run the script
if (import.meta.url === `file://${process.argv[1]}`) {
  generateAllPDFs().catch(console.error);
}

export { generateAllPDFs, generatePDF };
