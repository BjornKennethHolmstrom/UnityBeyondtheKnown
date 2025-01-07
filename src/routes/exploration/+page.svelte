<!-- src/routes/exploration/+page.svelte -->
<script>
  import { t } from 'svelte-i18n';
  let activeTab = 'outer';
  let selectedResource = null;
  
  const setActiveTab = (tab) => {
    activeTab = tab;
    selectedResource = null;
  };
  
  const showResource = (resource) => {
    selectedResource = resource;
  };
</script>

<div class="max-w-6xl mx-auto px-4 py-12">
  <h1 class="text-4xl md:text-5xl font-light mb-8">
    {$t('exploration.title')}
  </h1>

  <p class="text-xl text-slate-300 mb-12 max-w-3xl">
    {$t('exploration.description')}
  </p>

  <!-- Tab Navigation -->
  <div class="flex space-x-4 mb-12">
    <button
      class="px-6 py-3 rounded-lg transition-colors {activeTab === 'outer' ? 'bg-blue-600' : 'bg-slate-700 hover:bg-slate-600'}"
      on:click={() => setActiveTab('outer')}
    >
      <div class="flex items-center space-x-2">
        <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <circle cx="12" cy="12" r="10" stroke-width="1.5"/>
          <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10" stroke-width="1.5"/>
          <path d="M2 12h20" stroke-width="1.5"/>
        </svg>
        <span>{$t('exploration.tabs.outer')}</span>
      </div>
    </button>
    
    <button
      class="px-6 py-3 rounded-lg transition-colors {activeTab === 'inner' ? 'bg-blue-600' : 'bg-slate-700 hover:bg-slate-600'}"
      on:click={() => setActiveTab('inner')}
    >
      <div class="flex items-center space-x-2">
        <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path d="M12 2a7 7 0 017 7c0 2.38-1.19 4.47-3 5.74V17a2 2 0 01-2 2h-4a2 2 0 01-2-2v-2.26C6.19 13.47 5 11.38 5 9a7 7 0 017-7z" stroke-width="1.5"/>
          <path d="M10 17v4M14 17v4" stroke-width="1.5"/>
        </svg>
        <span>{$t('exploration.tabs.inner')}</span>
      </div>
    </button>
  </div>

  <!-- Content Sections -->
  <div class="grid md:grid-cols-2 gap-8 mb-12">
    <div>
      <h2 class="text-3xl mb-6">
        {$t(`exploration.${activeTab}.overview.title`)}
      </h2>
      <p class="text-slate-300 mb-8">
        {$t(`exploration.${activeTab}.overview.description`)}
      </p>
    </div>
    
    <div class="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6">
      <h3 class="text-2xl mb-4">
        {$t(`exploration.${activeTab}.overview.keyPoints.title`)}
      </h3>
      <ul class="space-y-4">
        {#each $t(`exploration.${activeTab}.overview.keyPoints.items`) as point}
          <li class="flex items-start space-x-3">
            <svg class="w-6 h-6 mt-1 text-blue-400" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span class="text-slate-300">{point}</span>
          </li>
        {/each}
      </ul>
    </div>
  </div>

  <!-- Resources Grid -->
  <h2 class="text-3xl mb-8">{$t(`exploration.${activeTab}.resources.title`)}</h2>
  
  <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
    {#each $t(`exploration.${activeTab}.resources.items`) as resource}
      <div
        class="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 hover:bg-slate-700/50 transition-colors cursor-pointer"
        on:click={() => showResource(resource)}
      >
        <h3 class="text-xl font-medium mb-3">{resource.title}</h3>
        <p class="text-slate-300 mb-4">{resource.summary}</p>
        <div class="text-blue-400">{$t('exploration.learnMore')} →</div>
      </div>
    {/each}
  </div>

  <!-- Resource Modal -->
  {#if selectedResource}
    <div 
      class="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
      on:click={() => selectedResource = null}
    >
      <div 
        class="bg-slate-800 rounded-lg p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
        on:click|stopPropagation
      >
        <h2 class="text-3xl mb-6">{selectedResource.title}</h2>
        <div class="prose prose-invert">
          {#each selectedResource.content as paragraph}
            <p class="text-slate-300 mb-4">{paragraph}</p>
          {/each}
          
          {#if selectedResource.links}
            <div class="mt-8">
              <h3 class="text-xl mb-4">{$t('exploration.resources.links')}</h3>
              <ul class="space-y-2">
                {#each selectedResource.links as link}
                  <li>
                    <a 
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      class="text-blue-400 hover:underline"
                    >
                      {link.text}
                    </a>
                  </li>
                {/each}
              </ul>
            </div>
          {/if}
        </div>

        <button 
          class="mt-8 px-6 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors"
          on:click={() => selectedResource = null}
        >
          {$t('exploration.close')}
        </button>
      </div>
    </div>
  {/if}
</div>
