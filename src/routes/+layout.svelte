<!-- src/routes/+layout.svelte -->
<script>
  import '../app.css';
  import { base } from '$app/paths';
  import { page } from '$app/stores';
  import '$lib/i18n';
  import { locale, t, waitLocale } from 'svelte-i18n';
  import LanguageSelector from '$lib/components/LanguageSelector.svelte';

  let isMenuOpen = false;
  let localeLoaded = false;

  const toggleMenu = () => isMenuOpen = !isMenuOpen;

  // Wait for locale to be loaded before showing content
  waitLocale().then(() => {
    localeLoaded = true;
  });
</script>

{#if localeLoaded}
  <div class="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 text-white">
    <header class="fixed w-full bg-slate-900/80 backdrop-blur-sm z-50">
      <nav class="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <a href="{base}/" class="flex items-center gap-3 text-2xl font-light tracking-wider">
          <!-- Logo -->
          <img 
            src="{base}/favicon-32.png" 
            alt="Unity Beyond the Known" 
            class="w-8 h-8"
            loading="eager"
          />
          <span class="hidden sm:inline">Unity Beyond the Known</span>
          <span class="sm:hidden">UBTK</span>
        </a>

        <!-- Desktop Navigation -->
        <div class="hidden md:flex items-center space-x-8">
          <a href="{base}/perspectives" class="hover:text-blue-400 transition-colors">
            {$t('nav.perspectives')}
          </a>
          <a href="{base}/exploration" class="hover:text-blue-400 transition-colors">
            {$t('nav.exploration')}
          </a>
          <a href="{base}/experiments" class="hover:text-blue-400 transition-colors">
            {$t('nav.experiments')}
          </a>
          <!-- The Frameworks Link -->
          <a 
            href="https://www.globalgovernanceframeworks.org?ref=ubtk" 
            target="_blank"
            rel="noopener noreferrer"
            class="hover:text-blue-400 transition-colors flex items-center gap-1"
          >
            {$t('nav.frameworks')}
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
          <LanguageSelector />
        </div>

        <!-- Mobile Menu Button -->
        <button 
          class="md:hidden p-2"
          on:click={toggleMenu}
          aria-label="Toggle menu"
        >
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {#if isMenuOpen}
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            {:else}
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            {/if}
          </svg>
        </button>
      </nav>

      <!-- Mobile Navigation -->
      {#if isMenuOpen}
        <div class="md:hidden bg-slate-800 py-4">
          <div class="flex flex-col space-y-4 px-4">
            <a 
              href="{base}/perspectives" 
              class="hover:text-blue-400 transition-colors"
              on:click={() => isMenuOpen = false}
            >
              {$t('nav.perspectives')}
            </a>
            <a 
              href="{base}/exploration" 
              class="hover:text-blue-400 transition-colors"
              on:click={() => isMenuOpen = false}
            >
              {$t('nav.exploration')}
            </a>
            <a 
              href="{base}/experiments" 
              class="hover:text-blue-400 transition-colors"
              on:click={() => isMenuOpen = false}
            >
              {$t('nav.experiments')}
            </a>
            <!-- The Frameworks Link for Mobile -->
            <a 
              href="https://www.globalgovernanceframeworks.org?ref=ubtk" 
              target="_blank"
              rel="noopener noreferrer"
              class="hover:text-blue-400 transition-colors flex items-center gap-1"
              on:click={() => isMenuOpen = false}
            >
              {$t('nav.frameworks')}
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
            <div class="flex space-x-2">
              <LanguageSelector />
            </div>
          </div>
        </div>
      {/if}
    </header>

    <main class="pt-20">
      <slot />
    </main>

    <footer class="bg-slate-900 mt-20 py-8">
      <div class="max-w-6xl mx-auto px-4 text-center text-slate-400">
        <div class="flex items-center justify-center gap-2 mb-4">
          <img 
            src="{base}/favicon-32.png" 
            alt="Unity Beyond the Known" 
            class="w-6 h-6 opacity-60"
          />
          <span class="text-lg">Unity Beyond the Known</span>
        </div>
        <p>{$t('footer.text')}</p>
      </div>
    </footer>
  </div>
{:else}
  <div class="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 text-white flex items-center justify-center">
    <div class="animate-pulse flex items-center gap-2">
      <img 
        src="{base}/favicon-32.png" 
        alt="Loading" 
        class="w-8 h-8 logo-pulse"
      />
      <span>Loading...</span>
    </div>
  </div>
{/if}
