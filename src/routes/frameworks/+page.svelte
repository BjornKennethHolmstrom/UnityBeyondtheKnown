<!-- src/routes/frameworks/+page.svelte -->
<script>
  import { t } from 'svelte-i18n';
  import { base } from '$app/paths';
  import ShareButtons from '$lib/components/ShareButtons.svelte';

  let selectedCluster = null;
  let isModalOpen = false;

  // Tier 0: Constitutional Foundation  
  const tier0 = { id: 'constitutional', tier: 0, icon: '🌍', gradient: 'from-blue-600 to-indigo-600' };

  // Tier 1: Operating Systems
  const tier1Clusters = [
    { id: 'golden-triangle', icon: '⚖️', gradient: 'from-blue-500 to-purple-500' },
    { id: 'data-os', icon: '📊', gradient: 'from-cyan-500 to-blue-500' },
    { id: 'technology-os', icon: '🤖', gradient: 'from-purple-500 to-pink-500' },
    { id: 'justice-os', icon: '⚖️', gradient: 'from-amber-500 to-orange-500' }
  ];

  // Tier 2: Specialized Applications
  const tier2Clusters = [
    { id: 'economic-systems', icon: '💚', gradient: 'from-green-500 to-teal-500' },
    { id: 'property-stewardship', icon: '🔥', gradient: 'from-orange-500 to-red-500' },
    { id: 'infrastructure', icon: '🔌', gradient: 'from-blue-400 to-cyan-400' },
    { id: 'human-flourishing', icon: '🌱', gradient: 'from-green-400 to-lime-400' }
  ];

  function openCluster(clusterId) {
    selectedCluster = clusterId;
    isModalOpen = true;
  }

  function closeModal() {
    isModalOpen = false;
    setTimeout(() => selectedCluster = null, 300);
  }
</script>

<svelte:head>
  <title>{$t('frameworks.meta.title')} - Unity Beyond the Known</title>
  <meta name="description" content={$t('frameworks.meta.description')} />
</svelte:head>

<div class="min-h-screen bg-gradient-to-b from-slate-900 via-blue-900 to-slate-900">
  <div class="max-w-6xl mx-auto px-4 py-12">
    
    <!-- Hero Section -->
    <section class="text-center mb-20">
      <div class="mb-8">
        <div class="inline-block px-4 py-2 bg-blue-500/20 rounded-full border border-blue-500/30 mb-6">
          <span class="text-blue-300 text-sm font-medium">{$t('frameworks.hero.badge')}</span>
        </div>
      </div>
      
      <h1 class="text-5xl md:text-6xl font-light mb-8 tracking-wide text-white">
        {$t('frameworks.hero.title')}
      </h1>
      
      <p class="text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed mb-8">
        {$t('frameworks.hero.subtitle')}
      </p>

      <div class="w-32 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-green-500 mx-auto"></div>
    </section>

    <!-- Journey Recap -->
    <section class="mb-20 bg-slate-800/30 rounded-2xl p-8 md:p-12 backdrop-blur-sm border border-slate-700/50">
      <h2 class="text-3xl mb-8 text-center text-white">{$t('frameworks.journey.title')}</h2>
      
      <div class="grid md:grid-cols-4 gap-6 mb-8">
        <div class="text-center">
          <div class="text-4xl mb-3">💭</div>
          <h3 class="font-semibold mb-2 text-white">{$t('frameworks.journey.vision.title')}</h3>
          <p class="text-sm text-slate-300">{$t('frameworks.journey.vision.description')}</p>
        </div>
        <div class="text-center">
          <div class="text-4xl mb-3">🦋</div>
          <h3 class="font-semibold mb-2 text-white">{$t('frameworks.journey.philosophy.title')}</h3>
          <p class="text-sm text-slate-300">{$t('frameworks.journey.philosophy.description')}</p>
        </div>
        <div class="text-center">
          <div class="text-4xl mb-3">🌱</div>
          <h3 class="font-semibold mb-2 text-white">{$t('frameworks.journey.tools.title')}</h3>
          <p class="text-sm text-slate-300">{$t('frameworks.journey.tools.description')}</p>
        </div>
        <div class="text-center">
          <div class="text-4xl mb-3">⚡</div>
          <h3 class="font-semibold mb-2 text-blue-400">{$t('frameworks.journey.frameworks.title')}</h3>
          <p class="text-sm text-blue-300 font-medium">{$t('frameworks.journey.frameworks.description')}</p>
        </div>
      </div>

      <p class="text-center text-slate-300 text-lg">
        {$t('frameworks.journey.conclusion')}
      </p>
    </section>

    <!-- Architecture Tiers -->
    <section class="mb-20">
      <h2 class="text-4xl mb-4 text-center text-white">{$t('frameworks.architecture.title')}</h2>
      <p class="text-center text-slate-300 mb-12 max-w-2xl mx-auto">
        {$t('frameworks.architecture.subtitle')}
      </p>

      <!-- Tier 0: Constitutional Foundation -->
      <div class="mb-12">
        <h3 class="text-2xl mb-6 text-center text-blue-300">{$t('frameworks.tiers.tier0.title')}</h3>
        <button
          on:click={() => openCluster('constitutional')}
          class="w-full group bg-gradient-to-r {tier0.gradient} backdrop-blur-sm rounded-2xl p-8 border border-blue-500/50 
                 hover:border-blue-400 transition-all hover:scale-[1.02] cursor-pointer"
        >
          <div class="flex items-center justify-between">
            <div class="flex items-center gap-6">
              <div class="text-6xl">{tier0.icon}</div>
              <div class="text-left">
                <h4 class="text-2xl font-semibold mb-2 text-white">{$t('frameworks.clusters.constitutional.title')}</h4>
                <p class="text-blue-100">{$t('frameworks.clusters.constitutional.description')}</p>
              </div>
            </div>
            <svg class="w-8 h-8 text-white group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </div>
        </button>
      </div>

      <!-- Tier 1: Operating Systems -->
      <div class="mb-12">
        <h3 class="text-2xl mb-6 text-center text-purple-300">{$t('frameworks.tiers.tier1.title')}</h3>
        <div class="grid md:grid-cols-2 gap-6">
          {#each tier1Clusters as cluster}
            <button
              on:click={() => openCluster(cluster.id)}
              class="group bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 
                     hover:border-slate-600 transition-all hover:scale-105 cursor-pointer text-left"
            >
              <div class="text-5xl mb-4 group-hover:scale-110 transition-transform">{cluster.icon}</div>
              <h4 class="text-xl font-semibold mb-3 text-white">{$t(`frameworks.clusters.${cluster.id}.title`)}</h4>
              <p class="text-slate-300 mb-4">{$t(`frameworks.clusters.${cluster.id}.description`)}</p>
              <div class="text-blue-400 group-hover:text-blue-300 font-medium flex items-center gap-2">
                {$t('frameworks.clusters.explore')}
                <svg class="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </button>
          {/each}
        </div>
      </div>

      <!-- Tier 2: Specialized Applications -->
      <div class="mb-12">
        <h3 class="text-2xl mb-6 text-center text-green-300">{$t('frameworks.tiers.tier2.title')}</h3>
        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {#each tier2Clusters as cluster}
            <button
              on:click={() => openCluster(cluster.id)}
              class="group bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 
                     hover:border-slate-600 transition-all hover:scale-105 cursor-pointer text-left"
            >
              <div class="text-4xl mb-3 group-hover:scale-110 transition-transform">{cluster.icon}</div>
              <h4 class="text-lg font-semibold mb-2 text-white">{$t(`frameworks.clusters.${cluster.id}.title`)}</h4>
              <p class="text-sm text-slate-300 mb-3">{$t(`frameworks.clusters.${cluster.id}.description`)}</p>
              <div class="text-blue-400 text-sm group-hover:text-blue-300 font-medium flex items-center gap-1">
                {$t('frameworks.clusters.explore')}
                <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </button>
          {/each}
        </div>
      </div>
    </section>

    <!-- Interest-Based Pathways -->
    <section class="mb-20 bg-gradient-to-br from-blue-900/30 to-purple-900/30 rounded-2xl p-8 md:p-12 backdrop-blur-sm border border-blue-700/30">
      <h2 class="text-3xl mb-8 text-center text-white">{$t('frameworks.pathways.title')}</h2>
      
      <div class="grid md:grid-cols-2 gap-6">
        {#each $t('frameworks.pathways.items') as pathway}
          <div class="bg-slate-800/50 rounded-xl p-6 border border-slate-600/50">
            <h3 class="text-xl font-semibold mb-3" style="color: {pathway.color}">{pathway.icon} {pathway.title}</h3>
            <p class="text-slate-300 mb-4">{pathway.description}</p>
            
            {#if pathway.links}
              <div class="space-y-3">
                {#each pathway.links as link}
                  <div>
                    <a 
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      class="inline-flex items-center gap-2 font-medium transition-colors"
                      style="color: {pathway.color}"
                    >
                      → {link.linkText}
                      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                    {#if link.hint}
                      <p class="text-sm text-slate-400 mt-1 ml-6">{link.hint}</p>
                    {/if}
                  </div>
                {/each}
              </div>
            {:else}
              <a 
                href={pathway.url}
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex items-center gap-2 font-medium transition-colors"
                style="color: {pathway.color}"
              >
                → {pathway.linkText}
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            {/if}
          </div>
        {/each}
      </div>
    </section>

    <!-- CTA -->
    <section class="text-center bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-green-600/20 rounded-2xl p-8 md:p-12 border border-blue-500/30">
      <h2 class="text-4xl mb-6 text-white">{$t('frameworks.cta.title')}</h2>
      <p class="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
        {$t('frameworks.cta.description')}
      </p>

      <div class="flex flex-col sm:flex-row gap-4 justify-center mb-8">
        <a
          href="https://globalgovernanceframeworks.org"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 
                 hover:from-blue-700 hover:to-purple-700 rounded-lg text-white font-semibold text-lg 
                 transition-all transform hover:scale-105"
        >
          {$t('frameworks.cta.explore')}
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </a>

        <a
          href="{base}/"
          class="inline-flex items-center gap-2 px-8 py-4 bg-slate-700 hover:bg-slate-600 
                 rounded-lg text-white font-medium text-lg transition-all"
        >
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
          </svg>
          {$t('frameworks.cta.back')}
        </a>
      </div>

      <div class="pt-6 border-t border-slate-600">
        <p class="text-slate-400 mb-4">{$t('frameworks.cta.share')}</p>
        <ShareButtons 
          title={$t('frameworks.share.title')}
          description={$t('frameworks.share.description')}
          hashtags={$t('frameworks.share.hashtags')}
          size="medium"
        />
      </div>
    </section>

    <!-- Back navigation -->
    <div class="text-center mt-12">
      <a 
        href="{base}/"
        class="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors"
      >
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
        {$t('frameworks.navigation.returnToUBTK')}
      </a>
    </div>
  </div>
</div>

<!-- Modal for cluster details -->
{#if isModalOpen && selectedCluster}
  <div 
    class="fixed inset-0 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 z-50"
    on:click={closeModal}
  >
    <div 
      class="bg-slate-800 rounded-2xl p-8 max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-slate-600"
      on:click|stopPropagation
    >
      <div class="flex justify-between items-start mb-6">
        <div>
          <h2 class="text-3xl mb-2 text-white">
            {$t(`frameworks.clusters.${selectedCluster}.title`)}
          </h2>
          <p class="text-slate-300">{$t(`frameworks.clusters.${selectedCluster}.description`)}</p>
        </div>
        <button 
          on:click={closeModal}
          class="text-slate-400 hover:text-white transition-colors"
        >
          <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <div class="space-y-6">
        {#each $t(`frameworks.clusters.${selectedCluster}.frameworks`) as framework}
          <div class="bg-slate-700/50 rounded-xl p-6 border border-slate-600/50 hover:border-slate-500 transition-colors">
            <div class="mb-4">
              <div class="text-sm text-slate-400 mb-1">{framework.subtitle}</div>
              <h3 class="text-2xl font-semibold text-white mb-3">{framework.title}</h3>
              <p class="text-slate-300 mb-4">{framework.description}</p>
              
              <div class="bg-slate-800/50 rounded-lg p-4 mb-4 border-l-4 border-blue-500">
                <p class="text-sm text-slate-300 italic">
                  <span class="font-semibold text-blue-400">{$t('frameworks.clusters.whyMatters')}</span> {framework.why}
                </p>
              </div>
            </div>

            <a 
              href={framework.url}
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600
                     hover:opacity-90 rounded-lg text-white font-medium transition-all"
            >
              {$t('frameworks.clusters.exploreFramework')}
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        {/each}
      </div>

      <div class="mt-8 pt-6 border-t border-slate-600 text-center">
        <button 
          on:click={closeModal}
          class="px-6 py-3 bg-slate-700 hover:bg-slate-600 rounded-lg text-white transition-colors"
        >
          {$t('frameworks.clusters.close')}
        </button>
      </div>
    </div>
  </div>
{/if}
