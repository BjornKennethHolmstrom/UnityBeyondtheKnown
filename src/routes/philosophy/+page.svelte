<!-- src/routes/philosophy/+page.svelte -->
<script>
  import { t } from 'svelte-i18n';
  import { base } from '$app/paths';
  import ShareButtons from '$lib/components/ShareButtons.svelte';

  let selectedSection = null;
  let isModalVisible = false;

  const sections = [
    'forest',
    'metamorphosis', 
    'expandingSelf',
    'beyondLeftRight',
    'naturalEvolution'
  ];

  const showSection = (sectionId) => {
    selectedSection = sectionId;
    isModalVisible = true;
  };
</script>

<svelte:head>
  <title>{$t('philosophy.title')} - Unity Beyond the Known</title>
  <meta name="description" content="{$t('philosophy.description')}" />
</svelte:head>

<div class="max-w-6xl mx-auto px-4 py-12">
  <!-- Hero Section -->
  <section class="text-center mb-16">
    <h1 class="text-4xl md:text-6xl font-light mb-8 tracking-wide">
      {$t('philosophy.title')}
    </h1>
    
    <p class="text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed mb-8">
      {$t('philosophy.subtitle')}
    </p>

    <div class="w-24 h-1 bg-gradient-to-r from-blue-500 to-green-500 mx-auto"></div>
  </section>

  <!-- Introduction -->
  <section class="max-w-4xl mx-auto mb-20">
    <div class="bg-slate-800/30 rounded-xl p-8 md:p-12 backdrop-blur-sm border border-slate-700/50">
      <h2 class="text-3xl mb-6 text-center">{$t('philosophy.intro.title')}</h2>
      <p class="text-lg text-slate-300 leading-relaxed mb-6">
        {$t('philosophy.intro.paragraph1')}
      </p>
      <p class="text-lg text-slate-300 leading-relaxed">
        {$t('philosophy.intro.paragraph2')}
      </p>
    </div>
  </section>

  <!-- Core Concepts Grid -->
  <section class="mb-20">
    <h2 class="text-3xl text-center mb-12">{$t('philosophy.concepts.title')}</h2>
    
    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      <!-- Politics as Forest -->
      <div 
        class="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 hover:bg-slate-700/50 transition-all cursor-pointer group border border-slate-700/30"
        on:click={() => showSection('forest')}
      >
        <div class="text-center mb-4">
          <div class="w-16 h-16 mx-auto mb-4 bg-green-600/20 rounded-full flex items-center justify-center group-hover:bg-green-600/30 transition-colors">
            <svg class="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
            </svg>
          </div>
        </div>
        <h3 class="text-xl font-semibold mb-3 text-center">{$t('philosophy.concepts.forest.title')}</h3>
        <p class="text-slate-300 text-center">{$t('philosophy.concepts.forest.summary')}</p>
      </div>

      <!-- Metamorphosis -->
      <div 
        class="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 hover:bg-slate-700/50 transition-all cursor-pointer group border border-slate-700/30"
        on:click={() => showSection('metamorphosis')}
      >
        <div class="text-center mb-4">
          <div class="w-16 h-16 mx-auto mb-4 bg-purple-600/20 rounded-full flex items-center justify-center group-hover:bg-purple-600/30 transition-colors">
            <svg class="w-8 h-8 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 4V2a1 1 0 011-1h4a1 1 0 011 1v2M7 4h10M7 4v16a2 2 0 002 2h6a2 2 0 002-2V4M7 4L5 6M17 4l2 2" />
            </svg>
          </div>
        </div>
        <h3 class="text-xl font-semibold mb-3 text-center">{$t('philosophy.concepts.metamorphosis.title')}</h3>
        <p class="text-slate-300 text-center">{$t('philosophy.concepts.metamorphosis.summary')}</p>
      </div>

      <!-- Expanding Self -->
      <div 
        class="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 hover:bg-slate-700/50 transition-all cursor-pointer group border border-slate-700/30"
        on:click={() => showSection('expandingSelf')}
      >
        <div class="text-center mb-4">
          <div class="w-16 h-16 mx-auto mb-4 bg-blue-600/20 rounded-full flex items-center justify-center group-hover:bg-blue-600/30 transition-colors">
            <svg class="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9" />
            </svg>
          </div>
        </div>
        <h3 class="text-xl font-semibold mb-3 text-center">{$t('philosophy.concepts.expandingSelf.title')}</h3>
        <p class="text-slate-300 text-center">{$t('philosophy.concepts.expandingSelf.summary')}</p>
      </div>

      <!-- Beyond Left-Right -->
      <div 
        class="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 hover:bg-slate-700/50 transition-all cursor-pointer group border border-slate-700/30"
        on:click={() => showSection('beyondLeftRight')}
      >
        <div class="text-center mb-4">
          <div class="w-16 h-16 mx-auto mb-4 bg-yellow-600/20 rounded-full flex items-center justify-center group-hover:bg-yellow-600/30 transition-colors">
            <svg class="w-8 h-8 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
        </div>
        <h3 class="text-xl font-semibold mb-3 text-center">{$t('philosophy.concepts.beyondLeftRight.title')}</h3>
        <p class="text-slate-300 text-center">{$t('philosophy.concepts.beyondLeftRight.summary')}</p>
      </div>

      <!-- Natural Evolution -->
      <div 
        class="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 hover:bg-slate-700/50 transition-all cursor-pointer group border border-slate-700/30"
        on:click={() => showSection('naturalEvolution')}
      >
        <div class="text-center mb-4">
          <div class="w-16 h-16 mx-auto mb-4 bg-teal-600/20 rounded-full flex items-center justify-center group-hover:bg-teal-600/30 transition-colors">
            <svg class="w-8 h-8 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
            </svg>
          </div>
        </div>
        <h3 class="text-xl font-semibold mb-3 text-center">{$t('philosophy.concepts.naturalEvolution.title')}</h3>
        <p class="text-slate-300 text-center">{$t('philosophy.concepts.naturalEvolution.summary')}</p>
      </div>

      <!-- Unity Field -->
      <div 
        class="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 hover:bg-slate-700/50 transition-all cursor-pointer group border border-slate-700/30 md:col-span-2 lg:col-span-1"
        on:click={() => showSection('unityField')}
      >
        <div class="text-center mb-4">
          <div class="w-16 h-16 mx-auto mb-4 bg-indigo-600/20 rounded-full flex items-center justify-center group-hover:bg-indigo-600/30 transition-colors">
            <svg class="w-8 h-8 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          </div>
        </div>
        <h3 class="text-xl font-semibold mb-3 text-center">{$t('philosophy.concepts.unityField.title')}</h3>
        <p class="text-slate-300 text-center">{$t('philosophy.concepts.unityField.summary')}</p>
      </div>
    </div>
  </section>

  <!-- Call to Action -->
  <section class="text-center bg-slate-800/30 rounded-xl p-8 md:p-12 backdrop-blur-sm border border-slate-700/50">
    <h2 class="text-3xl mb-6">{$t('philosophy.cta.title')}</h2>
    <p class="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
      {$t('philosophy.cta.description')}
    </p>
    
    <div class="flex flex-col sm:flex-row items-center justify-center gap-6">
      <div class="flex gap-4">
        <a href="{base}/exploration" class="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors">
          {$t('philosophy.cta.explore')}
        </a>
        <a href="{base}/tools" class="px-6 py-3 bg-green-600 hover:bg-green-700 rounded-lg transition-colors">
          {$t('philosophy.cta.tools')}
        </a>
      </div>
      
      <div class="flex items-center gap-3">
        <span class="text-sm text-slate-400">{$t('share.vision')}</span>
        <ShareButtons 
          title="Our Philosophy - Unity Beyond the Known"
          description="Discover how humanity can naturally evolve beyond left-right political divisions through understanding consciousness development and interconnection."
          hashtags="Philosophy,ConsciousnessEvolution,UnityBeyondTheKnown,SpiralDynamics,PoliticalMetamorphosis"
          size="small"
          showLabels={false}
        />
      </div>
    </div>
  </section>
</div>

<!-- Modal for detailed sections -->
{#if selectedSection && isModalVisible}
  <div 
    class="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 z-50"
    on:click={() => isModalVisible = false}
  >
    <div 
      class="bg-slate-800 rounded-lg p-8 max-w-4xl w-full max-h-[90vh] overflow-y-auto"
      on:click|stopPropagation
    >
      <div class="mb-6">
        <h2 class="text-3xl mb-4">
          {$t(`philosophy.concepts.${selectedSection}.title`)}
        </h2>
        <div class="w-16 h-1 bg-gradient-to-r from-blue-500 to-green-500"></div>
      </div>
      
      <div class="prose prose-invert max-w-none">
        {#if selectedSection === 'forest'}
          <p class="text-lg text-slate-300 leading-relaxed mb-6">
            {$t('philosophy.detailed.forest.intro')}
          </p>
          
          <h3 class="text-xl mb-4">{$t('philosophy.detailed.forest.components.title')}</h3>
          <div class="grid md:grid-cols-2 gap-6 mb-8">
            <div class="bg-slate-700/30 p-4 rounded-lg">
              <h4 class="font-semibold mb-2 text-green-400">{$t('philosophy.detailed.forest.components.roots.title')}</h4>
              <p class="text-slate-300">{$t('philosophy.detailed.forest.components.roots.description')}</p>
            </div>
            <div class="bg-slate-700/30 p-4 rounded-lg">
              <h4 class="font-semibold mb-2 text-blue-400">{$t('philosophy.detailed.forest.components.trunk.title')}</h4>
              <p class="text-slate-300">{$t('philosophy.detailed.forest.components.trunk.description')}</p>
            </div>
            <div class="bg-slate-700/30 p-4 rounded-lg">
              <h4 class="font-semibold mb-2 text-yellow-400">{$t('philosophy.detailed.forest.components.canopy.title')}</h4>
              <p class="text-slate-300">{$t('philosophy.detailed.forest.components.canopy.description')}</p>
            </div>
            <div class="bg-slate-700/30 p-4 rounded-lg">
              <h4 class="font-semibold mb-2 text-purple-400">{$t('philosophy.detailed.forest.components.mycelium.title')}</h4>
              <p class="text-slate-300">{$t('philosophy.detailed.forest.components.mycelium.description')}</p>
            </div>
          </div>
          
          <p class="text-lg text-slate-300 leading-relaxed">
            {$t('philosophy.detailed.forest.conclusion')}
          </p>
          
        {:else if selectedSection === 'metamorphosis'}
          <p class="text-lg text-slate-300 leading-relaxed mb-6">
            {$t('philosophy.detailed.metamorphosis.intro')}
          </p>
          
          <h3 class="text-xl mb-4">{$t('philosophy.detailed.metamorphosis.stages.title')}</h3>
          <div class="space-y-4 mb-8">
            <div class="bg-slate-700/30 p-4 rounded-lg">
              <h4 class="font-semibold mb-2 text-orange-400">{$t('philosophy.detailed.metamorphosis.stages.caterpillar.title')}</h4>
              <p class="text-slate-300">{$t('philosophy.detailed.metamorphosis.stages.caterpillar.description')}</p>
            </div>
            <div class="bg-slate-700/30 p-4 rounded-lg">
              <h4 class="font-semibold mb-2 text-blue-400">{$t('philosophy.detailed.metamorphosis.stages.chrysalis.title')}</h4>
              <p class="text-slate-300">{$t('philosophy.detailed.metamorphosis.stages.chrysalis.description')}</p>
            </div>
            <div class="bg-slate-700/30 p-4 rounded-lg">
              <h4 class="font-semibold mb-2 text-purple-400">{$t('philosophy.detailed.metamorphosis.stages.butterfly.title')}</h4>
              <p class="text-slate-300">{$t('philosophy.detailed.metamorphosis.stages.butterfly.description')}</p>
            </div>
          </div>
          
          <p class="text-lg text-slate-300 leading-relaxed">
            {$t('philosophy.detailed.metamorphosis.conclusion')}
          </p>
          
        {:else if selectedSection === 'expandingSelf'}
          <p class="text-lg text-slate-300 leading-relaxed mb-6">
            {$t('philosophy.detailed.expandingSelf.intro')}
          </p>
          
          <h3 class="text-xl mb-4">{$t('philosophy.detailed.expandingSelf.circles.title')}</h3>
          <div class="space-y-4 mb-8">
            <div class="bg-slate-700/30 p-4 rounded-lg border-l-4 border-red-500">
              <h4 class="font-semibold mb-2 text-red-400">{$t('philosophy.detailed.expandingSelf.circles.individual.title')}</h4>
              <p class="text-slate-300">{$t('philosophy.detailed.expandingSelf.circles.individual.description')}</p>
            </div>
            <div class="bg-slate-700/30 p-4 rounded-lg border-l-4 border-orange-500">
              <h4 class="font-semibold mb-2 text-orange-400">{$t('philosophy.detailed.expandingSelf.circles.tribe.title')}</h4>
              <p class="text-slate-300">{$t('philosophy.detailed.expandingSelf.circles.tribe.description')}</p>
            </div>
            <div class="bg-slate-700/30 p-4 rounded-lg border-l-4 border-blue-500">
              <h4 class="font-semibold mb-2 text-blue-400">{$t('philosophy.detailed.expandingSelf.circles.nation.title')}</h4>
              <p class="text-slate-300">{$t('philosophy.detailed.expandingSelf.circles.nation.description')}</p>
            </div>
            <div class="bg-slate-700/30 p-4 rounded-lg border-l-4 border-green-500">
              <h4 class="font-semibold mb-2 text-green-400">{$t('philosophy.detailed.expandingSelf.circles.humanity.title')}</h4>
              <p class="text-slate-300">{$t('philosophy.detailed.expandingSelf.circles.humanity.description')}</p>
            </div>
            <div class="bg-slate-700/30 p-4 rounded-lg border-l-4 border-purple-500">
              <h4 class="font-semibold mb-2 text-purple-400">{$t('philosophy.detailed.expandingSelf.circles.planet.title')}</h4>
              <p class="text-slate-300">{$t('philosophy.detailed.expandingSelf.circles.planet.description')}</p>
            </div>
          </div>
          
          <p class="text-lg text-slate-300 leading-relaxed">
            {$t('philosophy.detailed.expandingSelf.conclusion')}
          </p>
          
        {:else if selectedSection === 'beyondLeftRight'}
          <p class="text-lg text-slate-300 leading-relaxed mb-6">
            {$t('philosophy.detailed.beyondLeftRight.intro')}
          </p>
          
          <h3 class="text-xl mb-4">{$t('philosophy.detailed.beyondLeftRight.synthesis.title')}</h3>
          <div class="grid md:grid-cols-2 gap-6 mb-8">
            <div class="bg-slate-700/30 p-4 rounded-lg">
              <h4 class="font-semibold mb-2 text-red-400">{$t('philosophy.detailed.beyondLeftRight.synthesis.conservative.title')}</h4>
              <p class="text-slate-300 mb-3">{$t('philosophy.detailed.beyondLeftRight.synthesis.conservative.gifts')}</p>
              <p class="text-slate-300 text-sm">{$t('philosophy.detailed.beyondLeftRight.synthesis.conservative.shadow')}</p>
            </div>
            <div class="bg-slate-700/30 p-4 rounded-lg">
              <h4 class="font-semibold mb-2 text-blue-400">{$t('philosophy.detailed.beyondLeftRight.synthesis.progressive.title')}</h4>
              <p class="text-slate-300 mb-3">{$t('philosophy.detailed.beyondLeftRight.synthesis.progressive.gifts')}</p>
              <p class="text-slate-300 text-sm">{$t('philosophy.detailed.beyondLeftRight.synthesis.progressive.shadow')}</p>
            </div>
          </div>
          
          <div class="bg-gradient-to-r from-blue-600/20 to-red-600/20 p-6 rounded-lg mb-6">
            <h4 class="font-semibold mb-3 text-purple-400">{$t('philosophy.detailed.beyondLeftRight.integration.title')}</h4>
            <p class="text-slate-300">{$t('philosophy.detailed.beyondLeftRight.integration.description')}</p>
          </div>
          
          <p class="text-lg text-slate-300 leading-relaxed">
            {$t('philosophy.detailed.beyondLeftRight.conclusion')}
          </p>
          
        {:else if selectedSection === 'naturalEvolution'}
          <p class="text-lg text-slate-300 leading-relaxed mb-6">
            {$t('philosophy.detailed.naturalEvolution.intro')}
          </p>
          
          <h3 class="text-xl mb-4">{$t('philosophy.detailed.naturalEvolution.examples.title')}</h3>
          <div class="space-y-4 mb-8">
            <div class="bg-slate-700/30 p-4 rounded-lg">
              <h4 class="font-semibold mb-2 text-blue-400">{$t('philosophy.detailed.naturalEvolution.examples.cooperation.title')}</h4>
              <p class="text-slate-300">{$t('philosophy.detailed.naturalEvolution.examples.cooperation.description')}</p>
            </div>
            <div class="bg-slate-700/30 p-4 rounded-lg">
              <h4 class="font-semibold mb-2 text-green-400">{$t('philosophy.detailed.naturalEvolution.examples.adaptation.title')}</h4>
              <p class="text-slate-300">{$t('philosophy.detailed.naturalEvolution.examples.adaptation.description')}</p>
            </div>
            <div class="bg-slate-700/30 p-4 rounded-lg">
              <h4 class="font-semibold mb-2 text-purple-400">{$t('philosophy.detailed.naturalEvolution.examples.emergence.title')}</h4>
              <p class="text-slate-300">{$t('philosophy.detailed.naturalEvolution.examples.emergence.description')}</p>
            </div>
          </div>
          
          <p class="text-lg text-slate-300 leading-relaxed">
            {$t('philosophy.detailed.naturalEvolution.conclusion')}
          </p>
          
        {:else if selectedSection === 'unityField'}
          <p class="text-lg text-slate-300 leading-relaxed mb-6">
            {$t('philosophy.detailed.unityField.intro')}
          </p>
          
          <h3 class="text-xl mb-4">{$t('philosophy.detailed.unityField.dimensions.title')}</h3>
          <div class="grid md:grid-cols-3 gap-4 mb-8">
            <div class="bg-slate-700/30 p-4 rounded-lg text-center">
              <h4 class="font-semibold mb-2 text-blue-400">{$t('philosophy.detailed.unityField.dimensions.outer.title')}</h4>
              <p class="text-slate-300">{$t('philosophy.detailed.unityField.dimensions.outer.description')}</p>
            </div>
            <div class="bg-slate-700/30 p-4 rounded-lg text-center">
              <h4 class="font-semibold mb-2 text-purple-400">{$t('philosophy.detailed.unityField.dimensions.inner.title')}</h4>
              <p class="text-slate-300">{$t('philosophy.detailed.unityField.dimensions.inner.description')}</p>
            </div>
            <div class="bg-slate-700/30 p-4 rounded-lg text-center">
              <h4 class="font-semibold mb-2 text-green-400">{$t('philosophy.detailed.unityField.dimensions.between.title')}</h4>
              <p class="text-slate-300">{$t('philosophy.detailed.unityField.dimensions.between.description')}</p>
            </div>
          </div>
          
          <p class="text-lg text-slate-300 leading-relaxed">
            {$t('philosophy.detailed.unityField.conclusion')}
          </p>
        {/if}
      </div>

      <div class="mt-8 pt-6 border-t border-slate-700 flex justify-between items-center">
        <button 
          class="px-6 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors"
          on:click={() => isModalVisible = false}
        >
          {$t('philosophy.close')}
        </button>
        
        <ShareButtons 
          title="{$t(`philosophy.concepts.${selectedSection}.title`)} - Unity Beyond the Known"
          description="{$t(`philosophy.concepts.${selectedSection}.summary`)}"
          hashtags="Philosophy,ConsciousnessEvolution,UnityBeyondTheKnown,SpiralDynamics"
          size="small"
          showLabels={false}
        />
      </div>
    </div>
  </div>
{/if}

<style>
  .prose h3 {
    @apply text-slate-200 text-xl mt-6 mb-3;
  }
  
  .prose h4 {
    @apply text-slate-300 text-lg mt-4 mb-2;
  }
  
  .prose p {
    @apply text-slate-300 leading-relaxed mb-4;
  }
</style>
