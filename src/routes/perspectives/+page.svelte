<!-- src/routes/perspectives/+page.svelte -->
<script>
  import { t } from 'svelte-i18n';
  import { onMount } from 'svelte';

  let selectedArea = null;
  let isTransitionVisible = false;

  // Areas are now just IDs, all content comes from translations
  const areas = [
    'military',
    'legal',
    'pharma',
    'intelligence',
    'consumption'
  ];

  const showTransition = (areaId) => {
    selectedArea = areaId;
    isTransitionVisible = true;
  };
</script>

<div class="max-w-6xl mx-auto px-4 py-12">
  <h1 class="text-4xl md:text-5xl font-light mb-8">
    {$t('perspectives.title')}
  </h1>

  <p class="text-xl text-slate-300 mb-12 max-w-3xl">
    {$t('perspectives.description')}
  </p>

  <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
    {#each areas as areaId}
      <div 
        class="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 hover:bg-slate-700/50 transition-colors cursor-pointer relative overflow-hidden group"
        on:click={() => showTransition(areaId)}
      >
        <div class="absolute right-0 top-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
          {#if areaId === 'military'}
            <svg class="w-16 h-16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L16 4m0 13V4m0 0L10 7" />
            </svg>
          {:else if areaId === 'legal'}
            <svg class="w-16 h-16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
            </svg>
          {:else if areaId === 'pharma'}
            <svg class="w-16 h-16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
            </svg>
          {:else if areaId === 'intelligence'}
            <svg class="w-16 h-16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          {:else if areaId === 'consumption'}
            <svg class="w-16 h-16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
          {/if}
        </div>
        <h2 class="text-2xl mb-4">{$t(`perspectives.areas.${areaId}.title`)}</h2>
        <p class="text-slate-300 mb-4">{$t(`perspectives.areas.${areaId}.description`)}</p>
        <div class="text-2xl font-light">
          {$t(`perspectives.areas.${areaId}.spending.amount`)}
          {$t(`perspectives.areas.${areaId}.spending.unit`)}
        </div>
      </div>
    {/each}
  </div>

  {#if selectedArea && isTransitionVisible}
    <div 
      class="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
      on:click={() => isTransitionVisible = false}
    >
      <div 
        class="bg-slate-800 rounded-lg p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
        on:click|stopPropagation
      >
        <h2 class="text-3xl mb-6">
          {$t(`perspectives.areas.${selectedArea}.title`)} → 
          {$t('perspectives.exploration')}
        </h2>
        
        <div class="space-y-6">
          {#each $t(`perspectives.areas.${selectedArea}.redirections`) as redirection}
            <div class="bg-slate-700/50 rounded-lg p-4">
              <div class="flex justify-between items-start mb-2">
                <h3 class="text-xl">{redirection.to}</h3>
                <span class="text-lg">
                  {redirection.amount}
                  {$t(`perspectives.areas.${selectedArea}.spending.unit`)}
                </span>
              </div>
              <p class="text-slate-300">{redirection.description}</p>
            </div>
          {/each}
        </div>

        <div class="mt-8 text-slate-300">
          <h3 class="text-xl mb-4">{$t('perspectives.impact')}</h3>
          <p>{$t(`perspectives.areas.${selectedArea}.impact`)}</p>
        </div>

        <button 
          class="mt-8 px-6 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors"
          on:click={() => isTransitionVisible = false}
        >
          {$t('perspectives.close')}
        </button>
      </div>
    </div>
  {/if}
</div>
