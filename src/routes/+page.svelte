<!-- src/routes/+page.svelte -->
<script>
  import { onMount } from 'svelte';
  import { t } from 'svelte-i18n';
  import { base } from '$app/paths';

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
</div>
