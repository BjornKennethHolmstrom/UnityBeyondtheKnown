<!-- src/routes/experiments/+page.svelte -->
<script>
  import { t } from 'svelte-i18n';
  import { onMount } from 'svelte';

  let activeExperiment = null;
  let userResponses = {};
  let reflectionInput = '';

  onMount(() => {
    // Load saved reflections from localStorage
    const savedResponses = localStorage.getItem('unityBeyondKnown_reflections');
    if (savedResponses) {
      userResponses = JSON.parse(savedResponses);
    }
  });

  const openExperiment = (id) => {
    activeExperiment = id;
    if (!userResponses[id]) {
      userResponses[id] = {};
    }
    // Load existing reflection into input if it exists
    reflectionInput = userResponses[id].reflection || '';
  };

  const saveReflection = () => {
    if (activeExperiment && reflectionInput.trim()) {
      userResponses[activeExperiment].reflection = reflectionInput;
      // Save to localStorage
      localStorage.setItem('unityBeyondKnown_reflections', JSON.stringify(userResponses));
    }
  };
</script>

<div class="max-w-6xl mx-auto px-4 py-12">
  <h1 class="text-4xl md:text-5xl font-light mb-8">
    {$t('experiments.title')}
  </h1>

  <p class="text-xl text-slate-300 mb-12 max-w-3xl">
    {$t('experiments.description')}
  </p>

  <!-- Thought Experiments Grid -->
  <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
    {#each $t('experiments.items') as experiment}
      <div 
        class="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 hover:bg-slate-700/50 transition-colors cursor-pointer group relative overflow-hidden"
        on:click={() => openExperiment(experiment.id)}
      >
        <!-- Background Icon -->
        <div class="absolute right-4 top-4 opacity-10 group-hover:opacity-20 transition-opacity">
          {#if experiment.type === 'personal'}
            <svg class="w-16 h-16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          {:else if experiment.type === 'community'}
            <svg class="w-16 h-16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          {:else}
            <svg class="w-16 h-16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          {/if}
        </div>

        <h2 class="text-2xl mb-4">{experiment.title}</h2>
        <p class="text-slate-300">{experiment.summary}</p>
        
        {#if userResponses[experiment.id]?.reflection}
          <div class="mt-4 text-sm text-blue-400">
            {$t('experiments.reflected')} ✓
          </div>
        {/if}
      </div>
    {/each}
  </div>

  <!-- Active Experiment Modal -->
  {#if activeExperiment}
    <div 
      class="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 z-50"
      on:click={() => activeExperiment = null}
    >
      <div 
        class="bg-slate-800 rounded-lg p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
        on:click|stopPropagation
      >
        {#if $t('experiments.items').find(e => e.id === activeExperiment)}
          {@const experiment = $t('experiments.items').find(e => e.id === activeExperiment)}
          <h2 class="text-3xl mb-6">{experiment.title}</h2>

          <div class="space-y-6">
            {#each experiment.content as section}
              <div class="bg-slate-700/50 rounded-lg p-4">
                <h3 class="text-xl mb-3">{section.title}</h3>
                <p class="text-slate-300">{section.text}</p>
              </div>
            {/each}

            <!-- Reflection Section -->
            <div class="mt-8">
              <h3 class="text-xl mb-4">{$t('experiments.reflection.title')}</h3>
              <p class="text-slate-300 mb-4">{$t('experiments.reflection.prompt')}</p>
              
              <textarea
                class="w-full bg-slate-900/50 rounded-lg p-4 text-slate-300 resize-none mb-4"
                rows="4"
                placeholder={$t('experiments.reflection.placeholder')}
                bind:value={reflectionInput}
              ></textarea>

              <button 
                class="px-6 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors"
                on:click={saveReflection}
              >
                {$t('experiments.reflection.save')}
              </button>
            </div>
          </div>

          <button 
            class="mt-8 px-6 py-2 bg-slate-700 hover:bg-slate-600 rounded-lg transition-colors"
            on:click={() => activeExperiment = null}
          >
            {$t('experiments.close')}
          </button>
        {/if}
      </div>
    </div>
  {/if}
</div>
