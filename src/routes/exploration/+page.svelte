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

  <!-- NEW: GGF Connection Section -->
  <div class="ggf-connection-section mb-12">
    <div class="bg-gradient-to-r from-slate-800/50 to-blue-900/30 backdrop-blur-sm rounded-xl p-8 border border-blue-500/30">
      <div class="flex items-start gap-6">
        <div class="flex-shrink-0">
          <div class="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
            <svg class="w-8 h-8 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
        </div>
        
        <div class="flex-1">
          <h3 class="text-2xl font-semibold mb-3 text-blue-100">
            {$t(`exploration.${activeTab}.ggfConnection.title`)}
          </h3>
          <p class="text-blue-200 mb-4 text-lg">
            {$t(`exploration.${activeTab}.ggfConnection.intro`)}
          </p>
          <p class="text-slate-300 mb-6">
            {$t(`exploration.${activeTab}.ggfConnection.description`)}
          </p>
          
          <!-- Mission/Aspect Cards -->
          <div class="grid md:grid-cols-1 lg:grid-cols-3 gap-4 mb-6">
            {#each $t(`exploration.${activeTab}.ggfConnection.${activeTab === 'outer' ? 'missions' : 'aspects'}`) as item}
              <div class="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <h4 class="font-semibold mb-2 text-blue-100">{item.title}</h4>
                <p class="text-sm text-slate-300 mb-2">{item.description}</p>
                <p class="text-xs text-blue-200 italic">{item.connection}</p>
              </div>
            {/each}
          </div>
          
          <div class="flex flex-col sm:flex-row gap-4 items-start">
            <a 
              href="{$t(`exploration.${activeTab}.ggfConnection.ctaUrl`)}"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-lg transition-all text-white font-semibold"
            >
              {$t(`exploration.${activeTab}.ggfConnection.cta`)}
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
            <p class="text-sm text-slate-400 italic self-center">
              {$t(`exploration.${activeTab}.ggfConnection.subtitle`)}
            </p>
          </div>
        </div>
      </div>
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
      class="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 z-50"
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

<style>
  .ggf-connection-section {
    position: relative;
  }
  
  .ggf-connection-section::before {
    content: '';
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    background: linear-gradient(45deg, #3b82f6, #8b5cf6, #06b6d4, #3b82f6);
    border-radius: 0.75rem;
    z-index: -1;
    opacity: 0.3;
    animation: borderGlow 3s ease-in-out infinite alternate;
  }
  
  @keyframes borderGlow {
    0% { opacity: 0.3; }
    100% { opacity: 0.6; }
  }
  
  @media (max-width: 768px) {
    .ggf-connection-section .grid {
      grid-template-columns: 1fr;
    }
  }
</style>
