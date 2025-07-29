<!-- src/routes/+page.svelte -->
<script>
  import { onMount } from 'svelte';
  import { t } from 'svelte-i18n';
  import { base } from '$app/paths';
  import ShareButtons from '$lib/components/ShareButtons.svelte';

  let militarySpending = 0;
  let spaceSpending = 0;
  const targetMilitary = 2400; // $2.4 trillion
  const targetSpace = 107; // $107 billion

  onMount(() => {
    // Animate the numbers
    const duration = 2000;
    const steps = 60;
    const interval = duration / steps;
    
    let currentStep = 0;
    const timer = setInterval(() => {
      currentStep++;
      militarySpending = (targetMilitary * currentStep) / steps;
      spaceSpending = (targetSpace * currentStep) / steps;
      
      if (currentStep >= steps) clearInterval(timer);
    }, interval);

    return () => clearInterval(timer);
  });
</script>

<div class="relative">
  <!-- Hero Section -->
  <section class="min-h-screen flex flex-col justify-center items-center text-center px-4 py-20">
    <h1 class="text-5xl md:text-7xl font-light mb-8 tracking-wider">
      {$t('home.title')}
    </h1>
    
    <p class="text-xl md:text-2xl text-slate-300 max-w-3xl mb-12 leading-relaxed">
      {$t('home.tagline')}
    </p>

    <!-- Spending Comparison -->
    <div class="w-full max-w-2xl bg-slate-800/50 backdrop-blur-sm rounded-lg p-8 mb-12">
      <h2 class="text-2xl mb-6">{$t('home.comparison.title')}</h2>
      
      <div class="space-y-6">
        <div>
          <div class="flex justify-between mb-2">
            <span>{$t('home.comparison.military')}</span>
            <span>${militarySpending.toFixed(1)} T</span>
          </div>
          <div class="h-4 bg-slate-700 rounded-full overflow-hidden">
            <div 
              class="h-full bg-red-500 transition-all duration-1000" 
              style="width: 100%"
            ></div>
          </div>
        </div>

        <div>
          <div class="flex justify-between mb-2">
            <span>{$t('home.comparison.space')}</span>
            <span>${spaceSpending.toFixed(1)} B</span>
          </div>
          <div class="h-4 bg-slate-700 rounded-full overflow-hidden">
            <div 
              class="h-full bg-blue-500 transition-all duration-1000" 
              style="width: 4.46%"
            ></div>
          </div>
        </div>
      </div>

      <p class="mt-6 text-slate-300">
        {$t('home.comparison.context')}
      </p>
    </div>

    <!-- Call to Action -->
    <div class="flex flex-col sm:flex-row gap-4">
      <a 
        href="{base}/perspectives" 
        class="px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors text-center"
      >
        {$t('home.cta.explore')}
      </a>
      <a 
        href="{base}/experiments" 
        class="px-8 py-3 bg-slate-700 hover:bg-slate-600 rounded-lg transition-colors text-center"
      >
        {$t('home.cta.participate')}
      </a>
    </div>
  </section>

  <!-- Introduction Section -->
  <section class="max-w-4xl mx-auto px-4 py-20">
    <div class="grid md:grid-cols-2 gap-12">
      <div>
        <h2 class="text-3xl mb-6">{$t('home.intro.outer.title')}</h2>
        <p class="text-slate-300 leading-relaxed">
          {$t('home.intro.outer.content')}
        </p>
      </div>
      <div>
        <h2 class="text-3xl mb-6">{$t('home.intro.inner.title')}</h2>
        <p class="text-slate-300 leading-relaxed">
          {$t('home.intro.inner.content')}
        </p>
      </div>
    </div>
  </section>

  <!-- NEW: Frameworks Bridge Section -->
  <section class="max-w-6xl mx-auto px-4 py-20">
    <div class="bg-slate-800/30 rounded-xl p-8 md:p-12 backdrop-blur-sm border border-slate-700/50">
      <div class="text-center mb-12">
        <h2 class="text-4xl md:text-5xl font-light mb-6 tracking-wide">
          {$t('home.frameworks.title')}
        </h2>
        <p class="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
          {$t('home.frameworks.subtitle')}
        </p>
      </div>

      <div class="grid md:grid-cols-3 gap-8 mb-12">
        <div class="text-center">
          <div class="w-16 h-16 mx-auto mb-4 bg-blue-600 rounded-full flex items-center justify-center">
            <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h3 class="text-xl font-semibold mb-3">{$t('home.frameworks.hardware.title')}</h3>
          <p class="text-slate-300">{$t('home.frameworks.hardware.description')}</p>
        </div>

        <div class="text-center">
          <div class="w-16 h-16 mx-auto mb-4 bg-green-600 rounded-full flex items-center justify-center">
            <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          </div>
          <h3 class="text-xl font-semibold mb-3">{$t('home.frameworks.heart.title')}</h3>
          <p class="text-slate-300">{$t('home.frameworks.heart.description')}</p>
        </div>

        <div class="text-center">
          <div class="w-16 h-16 mx-auto mb-4 bg-purple-600 rounded-full flex items-center justify-center">
            <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <h3 class="text-xl font-semibold mb-3">{$t('home.frameworks.nervous.title')}</h3>
          <p class="text-slate-300">{$t('home.frameworks.nervous.description')}</p>
        </div>
      </div>

      <div class="text-center">
        <a 
          href="https://www.globalgovernanceframeworks.org?ref=ubtk"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-lg transition-all text-lg font-medium"
        >
          {$t('home.frameworks.cta')}
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </a>
      </div>
    </div>
  </section>

  <section class="max-w-4xl mx-auto px-4 py-16 text-center">
    <div class="bg-slate-800/20 rounded-xl p-8 backdrop-blur-sm border border-slate-700/30">
      <h3 class="text-2xl mb-4">{$t('home.philosophy.title')}</h3>
      <p class="text-slate-300 mb-6 max-w-2xl mx-auto">
        {$t('home.philosophy.description')}
      </p>
      <a 
        href="{base}/philosophy" 
        class="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
      >
        {$t('home.philosophy.cta')}
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </a>
    </div>
  </section>

  <section class="max-w-4xl mx-auto px-4 py-20 text-center">
    <h2 class="text-3xl mb-6">{$t('share.ready')}</h2>
    <p class="text-slate-300 mb-8 max-w-2xl mx-auto">
      {$t('share.join')}
    </p>
    
    <div class="flex flex-col sm:flex-row items-center justify-center gap-6">
      <div class="flex gap-4">
        <a href="{base}/perspectives" class="btn-primary">{$t('share.start')}</a>
        <a href="{base}/experiments" class="btn-secondary">{$t('share.try')}</a>
      </div>
      
      <div class="flex items-center gap-3">
        <span class="text-sm text-slate-400">{$t('share.vision')}</span>
        <ShareButtons 
          title="Unity Beyond the Known - Redirecting Humanity's Resources"
          description="What if humanity redirected its resources from conflict to exploration? Discover the possibilities for space exploration, consciousness development, and global cooperation."
          hashtags="UnityBeyondTheKnown,SpaceExploration,Consciousness,Peace,Future"
          size="small"
          showLabels={false}
        />
      </div>
    </div>
  </section>
</div>
