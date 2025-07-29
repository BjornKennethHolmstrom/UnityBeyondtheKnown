<!-- src/lib/components/LanguageSelector.svelte -->
<script>
  import { locale, t } from 'svelte-i18n';
  import { onMount } from 'svelte';

  let isOpen = false;
  let languages = [
    { code: 'en', name: 'English', nativeName: 'English' },
    { code: 'sv', name: 'Swedish', nativeName: 'Svenska' },
    { code: 'ru', name: 'Russian', nativeName: 'Русский' },
    { code: 'zh', name: 'Chinese', nativeName: '中文' }
  ];

  const toggleDropdown = () => {
    isOpen = !isOpen;
  };

  const selectLanguage = (langCode) => {
    locale.set(langCode);
    isOpen = false;
  };

  // Close dropdown when clicking outside
  let dropdownRef;
  const handleClickOutside = (event) => {
    if (dropdownRef && !dropdownRef.contains(event.target)) {
      isOpen = false;
    }
  };

  onMount(() => {
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  });
</script>

<div class="relative" bind:this={dropdownRef}>
  <button
    on:click={toggleDropdown}
    class="flex items-center space-x-2 px-4 py-2 bg-slate-700 hover:bg-slate-600 rounded-lg transition-colors"
  >
    <span>{languages.find(l => l.code === $locale)?.nativeName || 'Language'}</span>
    <svg
      class="w-4 h-4 transition-transform {isOpen ? 'rotate-180' : ''}"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
    >
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
    </svg>
  </button>

  {#if isOpen}
    <div
      class="absolute right-0 sm:right-0 mt-2 py-2 w-48 bg-slate-800 rounded-lg shadow-xl z-50 transform -translate-x-full sm:translate-x-0"
    >
      {#each languages as language}
        <button
          class="w-full text-left px-4 py-2 hover:bg-slate-700 transition-colors {$locale === language.code ? 'text-blue-400' : ''}"
          on:click={() => selectLanguage(language.code)}
        >
          <div>{language.nativeName}</div>
          <div class="text-sm text-slate-400">{language.name}</div>
        </button>
      {/each}
    </div>
  {/if}
</div>
