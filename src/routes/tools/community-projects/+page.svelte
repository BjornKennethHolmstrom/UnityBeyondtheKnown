<!-- src/routes/tools/community-projects/+page.svelte -->
<script>
  import { t } from 'svelte-i18n';
  import { locale } from 'svelte-i18n';
  import { base } from '$app/paths';
  import ShareButtons from '$lib/components/ShareButtons.svelte';
  import CommunicationToolkit from '$lib/components/CommunicationToolkit.svelte';
  import ImplementationRoadmap from '$lib/components/ImplementationRoadmap.svelte';

  let activeSection = 'overview';
  let showPreview = false;

  const sections = [
    { id: 'overview', title: $t('communityProjects.nav.overview'), icon: '🌱' },
    { id: 'communication', title: $t('communityProjects.nav.communication'), icon: '🗣️' },
    { id: 'implementation', title: $t('communityProjects.nav.roadmap'), icon: '📋' },
    { id: 'resources', title: $t('communityProjects.nav.resources'), icon: '📚' }
  ];

  function downloadBlueprint() {
    const currentLocale = $locale || 'en';
    const pdfUrl = `${base}/downloads/food-forest-blueprint/${currentLocale}/food-forest-blueprint-${currentLocale}.pdf`;
    
    // Create download link
    const a = document.createElement('a');
    a.href = pdfUrl;
    a.download = `food-forest-blueprint-${currentLocale}.pdf`;
    a.target = '_blank';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  }
</script>

<svelte:head>
  <title>{$t('communityProjects.title')} - Unity Beyond the Known</title>
  <meta name="description" content={$t('communityProjects.subtitle')} />
</svelte:head>

<div class="min-h-screen bg-gradient-to-br from-green-900 via-slate-900 to-blue-900">
  <div class="max-w-6xl mx-auto px-4 py-12">
    
    <!-- Header -->
    <div class="text-center mb-12">
      <h1 class="text-4xl md:text-5xl font-light mb-6 text-white">
        {$t('communityProjects.title')}
      </h1>
      <p class="text-xl text-green-200 max-w-3xl mx-auto leading-relaxed mb-8">
        {$t('communityProjects.subtitle')}
      </p>
      <p class="text-lg text-slate-300 max-w-2xl mx-auto">
        {$t('communityProjects.intro')}
      </p>
    </div>

    <!-- Navigation Tabs -->
    <div class="flex flex-wrap justify-center mb-8 gap-2">
      {#each sections as section}
        <button
          class="px-4 py-2 rounded-lg transition-all {activeSection === section.id 
            ? 'bg-green-600 text-white' 
            : 'bg-slate-800/50 text-slate-300 hover:bg-slate-700/50'}"
          on:click={() => activeSection = section.id}
        >
          {section.icon} {section.title}
        </button>
      {/each}
    </div>

    <!-- Content Sections -->
    <div class="bg-slate-800/30 backdrop-blur-sm rounded-2xl border border-slate-700/50">
      
      {#if activeSection === 'overview'}
        <!-- Overview Section -->
        <div class="p-8">
          <div class="grid lg:grid-cols-2 gap-12 mb-12">
            <!-- Food Forest Blueprint -->
            <div class="bg-gradient-to-br from-green-800/30 to-blue-800/30 rounded-xl p-8 border border-green-700/30">
              <h2 class="text-3xl mb-4 text-white">{$t('communityProjects.foodForest.title')}</h2>
              <p class="text-lg text-green-200 mb-6">{$t('communityProjects.foodForest.description')}</p>
              
              <div class="mb-6">
                <h3 class="text-lg font-medium mb-3 text-white">{$t('communityProjects.foodForest.whatsIncluded')}</h3>
                <div class="grid gap-2">
                  {#each $t('communityProjects.foodForest.features') as feature}
                    <div class="flex items-center gap-3 text-slate-300">
                      <div class="w-2 h-2 bg-green-400 rounded-full"></div>
                      {feature}
                    </div>
                  {/each}
                </div>
              </div>

              <div class="flex gap-3 flex-wrap">
                <button 
                  on:click={downloadBlueprint}
                  class="px-6 py-3 bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 rounded-lg text-white font-medium transition-all flex items-center gap-2"
                >
                  {$t('communityProjects.foodForest.downloadButton')}
                </button>
                <button 
                  on:click={() => showPreview = true}
                  class="px-6 py-3 bg-slate-700 hover:bg-slate-600 rounded-lg text-white transition-all"
                >
                  {$t('communityProjects.foodForest.previewButton')}
                </button>
              </div>
            </div>

            <!-- Visual/Illustration Space -->
            <div class="bg-slate-800/50 rounded-xl p-8 border border-slate-600/50 flex items-center justify-center">
              <div class="text-center">
                <div class="text-6xl mb-4">🌳🍎🥕🌻</div>
                <p class="text-slate-300 text-lg">{$t('communityProjects.visual.before')}</p>
                <div class="mt-6 text-4xl">⬇️</div>
                <div class="mt-4 text-5xl">🤝🏡🌱</div>
                <p class="text-slate-300 mt-4">{$t('communityProjects.visual.after')}</p>
              </div>
            </div>
          </div>

          <!-- Coming Soon Projects -->
          <div class="mb-8">
            <h3 class="text-2xl mb-6 text-center text-white">{$t('communityProjects.comingSoon.title')}</h3>
            <div class="grid md:grid-cols-3 gap-6">
              {#each $t('communityProjects.comingSoon.projects') as project}
                <div class="bg-slate-700/30 rounded-lg p-6 border border-slate-600/50">
                  <h4 class="text-lg font-medium mb-2 text-white">{project.title}</h4>
                  <p class="text-slate-300 mb-3">{project.description}</p>
                  <p class="text-sm text-blue-400">{$t('communityProjects.comingSoon.eta')}: {project.eta}</p>
                </div>
              {/each}
            </div>
          </div>
        </div>

      {:else if activeSection === 'communication'}
        <CommunicationToolkit />

      {:else if activeSection === 'implementation'}
        <ImplementationRoadmap />

      {:else if activeSection === 'resources'}
        <!-- Resources Section -->
        <div class="p-8">
          <h2 class="text-3xl mb-8 text-center text-white">{$t('communityProjects.resources.title')}</h2>
          <div class="grid md:grid-cols-2 gap-6">
            {#each $t('communityProjects.resources.items') as resource}
              <div class="bg-slate-700/30 rounded-lg p-6 border border-slate-600/50">
                <h3 class="text-xl mb-3 text-white">{resource.title}</h3>
                <p class="text-slate-300">{resource.description}</p>
                <div class="mt-4 text-sm text-blue-400">{$t('communityProjects.resources.availabilityNote')}</div>
              </div>
            {/each}
          </div>
        </div>
      {/if}
    </div>

    <!-- Call to Action -->
    <div class="text-center mt-12 bg-gradient-to-r from-green-800/20 to-blue-800/20 rounded-2xl p-8 border border-green-700/30">
      <h2 class="text-3xl mb-4 text-white">{$t('communityProjects.getStarted.title')}</h2>
      <p class="text-xl text-green-200 mb-8 max-w-2xl mx-auto">
        {$t('communityProjects.getStarted.description')}
      </p>
      
      <div class="flex gap-4 justify-center flex-wrap mb-8">
        <button 
          on:click={downloadBlueprint}
          class="px-8 py-4 bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 rounded-lg text-white font-medium transition-all text-lg"
        >
          {$t('communityProjects.getStarted.cta')}
        </button>
        <a 
          href="{base}/tools/curiosity-cards"
          class="px-8 py-4 bg-slate-700 hover:bg-slate-600 rounded-lg text-white transition-all text-lg"
        >
          {$t('communityProjects.getStarted.secondary')}
        </a>
      </div>

      <!-- Share Section -->
      <div>
        <p class="text-green-200 mb-4">{$t('communityProjects.share.description')}</p>
        <ShareButtons 
          title={$t('communityProjects.share.title')}
          description={$t('communityProjects.share.shareDescription')}
          hashtags={$t('communityProjects.share.hashtags')}
          size="medium"
        />
      </div>
    </div>

    <!-- Back to Tools -->
    <div class="text-center mt-8">
      <a 
        href="{base}/tools"
        class="inline-flex items-center gap-2 px-6 py-3 bg-slate-800/50 hover:bg-slate-700/50 backdrop-blur-sm rounded-lg text-green-200 hover:text-white transition-colors border border-slate-600/50"
      >
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
        </svg>
        {$t('communityProjects.nav.backToTools')}
      </a>
    </div>
  </div>
</div>

<!-- Preview Modal -->
{#if showPreview}
  <div class="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 z-50">
    <div class="bg-slate-800 rounded-2xl p-8 max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-slate-600">
      <div class="flex justify-between items-center mb-6">
        <h3 class="text-2xl text-white">{$t('communityProjects.preview.title')}</h3>
        <button 
          on:click={() => showPreview = false}
          class="text-slate-400 hover:text-white"
        >
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      
      <div class="prose prose-slate prose-invert max-w-none">
        <h4>{$t('communityProjects.preview.sampleTitle')}</h4>
        <p>{$t('communityProjects.preview.sampleIntro')}</p>
        
        <h5>{$t('communityProjects.preview.bridgeApproach')}</h5>
        <ul>
          <li><strong>{$t('communityProjects.preview.conservatives')}</strong> {$t('communityProjects.preview.conservativesDesc')}</li>
          <li><strong>{$t('communityProjects.preview.progressives')}</strong> {$t('communityProjects.preview.progressivesDesc')}</li>
          <li><strong>{$t('communityProjects.preview.officials')}</strong> {$t('communityProjects.preview.officialsDesc')}</li>
        </ul>
        
        <p class="text-slate-300">{$t('communityProjects.preview.fullContent')}</p>
        
        <div class="mt-6">
          <button 
            on:click={downloadBlueprint}
            class="px-6 py-3 bg-green-600 hover:bg-green-700 rounded-lg text-white transition-all"
          >
            {$t('communityProjects.preview.downloadComplete')}
          </button>
        </div>
      </div>
    </div>
  </div>
{/if}
