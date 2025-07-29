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
      <div class="bg-slate-800/50 backdrop-blur-sm rounded-lg p-8 hover:bg-slate-700/50 transition-all transform hover:scale-105 border border-slate-700/50">
        <div class="text-4xl mb-4 group-hover:animate-pulse">🦋</div>
        <h2 class="text-2xl mb-4">{$t('tools.curiosityCards.title')}</h2>
        <p class="text-slate-300">
          {$t('tools.curiosityCards.description')}
        </p>
        <div class="mt-4 text-blue-400 group-hover:text-blue-300 transition-colors">
          {$t('tools.curiosityCards.try')}
        </div>
      </div>
    </a>
    
    <!-- Coming Soon: Community Projects -->
    <div class="bg-slate-800/30 backdrop-blur-sm rounded-lg p-8 opacity-75 border border-slate-700/30">
      <div class="text-4xl mb-4">🌱</div>
      <h2 class="text-2xl mb-4">{$t('tools.communityProjects.title')}</h2>
      <p class="text-slate-300">
        {$t('tools.communityProjects.description')}
      </p>
      <p class="text-slate-500 text-sm mt-4">{$t('tools.curiosityCards.comingSoon')}</p>
    </div>
  </div>

  <!-- Share Section -->
  <section class="text-center">
    <h2 class="text-2xl mb-4">{$t('tools.share')}</h2>
    <p class="text-slate-300 mb-6">{$t('tools.help')}</p>
    
    <ShareButtons 
      title="Tools for Transformation - Unity Beyond the Known"
      description="Discover tools that help bridge political divides and spark curiosity. Perfect for meaningful conversations across differences."
      hashtags="Tools,BridgeBuilding,Unity,Transformation,UnityBeyondTheKnown"
      size="medium"
    />
  </section>
</div>
