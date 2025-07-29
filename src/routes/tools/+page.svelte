<!-- src/routes/tools/+page.svelte -->
<script>
  import { t } from 'svelte-i18n';
  import { base } from '$app/paths';
  import ShareButtons from '$lib/components/ShareButtons.svelte';
</script>

<svelte:head>
  <title>{$t('tools.title')} - Unity Beyond the Known</title>
  <meta name="description" content={$t('tools.description')} />
</svelte:head>

<div class="max-w-4xl mx-auto px-4 py-12">
  <h1 class="text-4xl md:text-5xl font-light mb-8">
    {$t('tools.title')}
  </h1>
  
  <p class="text-xl text-slate-300 mb-12 max-w-3xl">
    {$t('tools.description')}
  </p>
  
  <div class="grid md:grid-cols-2 gap-8 mb-16">
    <!-- Curiosity Cards -->
    <a href="{base}/tools/curiosity-cards" class="group block">
      <div class="bg-slate-800/50 backdrop-blur-sm rounded-lg p-8 hover:bg-slate-700/50 transition-all transform hover:scale-105 border border-slate-700/50 h-full">
        <div class="text-4xl mb-4 group-hover:animate-pulse">🦋</div>
        <h2 class="text-2xl mb-4">{$t('tools.curiosityCards.title')}</h2>
        <p class="text-slate-300 mb-4">
          {$t('tools.curiosityCards.description')}
        </p>
        <div class="mt-auto">
          <div class="text-blue-400 group-hover:text-blue-300 transition-colors font-medium">
            {$t('tools.curiosityCards.try')}
          </div>
          <div class="text-sm text-slate-500 mt-2">
            {$t('tools.curiosityCards.features')}
          </div>
        </div>
      </div>
    </a>
    
    <!-- Community Projects -->
    <a href="{base}/tools/community-projects" class="group block">
      <div class="bg-gradient-to-br from-green-800/30 to-blue-800/30 backdrop-blur-sm rounded-lg p-8 hover:from-green-700/40 hover:to-blue-700/40 transition-all transform hover:scale-105 border border-green-700/30 h-full">
        <div class="text-4xl mb-4 group-hover:animate-bounce">🌱</div>
        <h2 class="text-2xl mb-4">{$t('tools.communityProjects.title')}</h2>
        <p class="text-slate-300 mb-4">
          {$t('tools.communityProjects.description')}
        </p>
        <div class="mt-auto">
          <div class="text-green-400 group-hover:text-green-300 transition-colors font-medium">
            {$t('tools.communityProjects.cta')}
          </div>
          <div class="text-sm text-green-500 mt-2 font-medium">
            {$t('tools.communityProjects.available')} • {$t('tools.communityProjects.availableNote')}
          </div>
        </div>
      </div>
    </a>
  </div>

  <!-- How These Tools Work Together -->
  <div class="bg-slate-800/30 backdrop-blur-sm rounded-2xl p-8 mb-16 border border-slate-700/50">
    <h2 class="text-2xl mb-6 text-center">{$t('tools.howTheyWork.title')}</h2>
    
    <div class="grid md:grid-cols-3 gap-6 mb-6">
      <div class="text-center">
        <div class="text-3xl mb-3">🧠</div>
        <h3 class="text-lg font-medium mb-2">{$t('tools.howTheyWork.step1.title')}</h3>
        <p class="text-slate-300 text-sm">{$t('tools.howTheyWork.step1.description')}</p>
      </div>
      
      <div class="text-center">
        <div class="text-3xl mb-3">🤝</div>
        <h3 class="text-lg font-medium mb-2">{$t('tools.howTheyWork.step2.title')}</h3>
        <p class="text-slate-300 text-sm">{$t('tools.howTheyWork.step2.description')}</p>
      </div>
      
      <div class="text-center">
        <div class="text-3xl mb-3">🌱</div>
        <h3 class="text-lg font-medium mb-2">{$t('tools.howTheyWork.step3.title')}</h3>
        <p class="text-slate-300 text-sm">{$t('tools.howTheyWork.step3.description')}</p>
      </div>
    </div>
    
    <div class="text-center">
      <p class="text-slate-400 text-sm">
        {$t('tools.howTheyWork.bottomText')}
      </p>
    </div>
  </div>

  <!-- Coming Soon Previews -->
  <div class="mb-16">
    <h2 class="text-2xl mb-8 text-center">{$t('tools.comingSoon.title')}</h2>
    <div class="grid md:grid-cols-3 gap-6">
      <div class="bg-slate-800/20 backdrop-blur-sm rounded-lg p-6 opacity-75 border border-slate-700/30">
        <div class="text-3xl mb-3">🔧</div>
        <h3 class="text-lg font-medium mb-2">{$t('tools.comingSoon.toolLibraries.title')}</h3>
        <p class="text-slate-300 text-sm mb-3">{$t('tools.comingSoon.toolLibraries.description')}</p>
        <p class="text-slate-500 text-xs">{$t('tools.comingSoon.q2')}</p>
      </div>
      
      <div class="bg-slate-800/20 backdrop-blur-sm rounded-lg p-6 opacity-75 border border-slate-700/30">
        <div class="text-3xl mb-3">🛠️</div>
        <h3 class="text-lg font-medium mb-2">{$t('tools.comingSoon.repairCafes.title')}</h3>
        <p class="text-slate-300 text-sm mb-3">{$t('tools.comingSoon.repairCafes.description')}</p>
        <p class="text-slate-500 text-xs">{$t('tools.comingSoon.q2')}</p>
      </div>
      
      <div class="bg-slate-800/20 backdrop-blur-sm rounded-lg p-6 opacity-75 border border-slate-700/30">
        <div class="text-3xl mb-3">📚</div>
        <h3 class="text-lg font-medium mb-2">{$t('tools.comingSoon.storyGardens.title')}</h3>
        <p class="text-slate-300 text-sm mb-3">{$t('tools.comingSoon.storyGardens.description')}</p>
        <p class="text-slate-500 text-xs">{$t('tools.comingSoon.q3')}</p>
      </div>
    </div>
  </div>

  <!-- Share Section -->
  <section class="text-center bg-gradient-to-r from-blue-800/20 to-purple-800/20 rounded-2xl p-8 border border-blue-700/30">
    <h2 class="text-2xl mb-4">{$t('tools.share.title')}</h2>
    <p class="text-slate-300 mb-6 max-w-2xl mx-auto">
      {$t('tools.share.description')}
    </p>
    
    <ShareButtons 
      title="Tools for Transformation - Unity Beyond the Known"
      description="Discover practical tools that help bridge political divides and create community unity. Includes butterfly curiosity cards and food forest blueprints!"
      hashtags="Tools,BridgeBuilding,Unity,CommunityProjects,UnityBeyondTheKnown"
      size="medium"
    />
    
    <div class="mt-6 text-sm text-slate-400">
      {$t('tools.share.subtitle')}
    </div>
  </section>
</div>
