<!-- src/routes/why-now/+page.svelte -->
<script>
  import { t } from 'svelte-i18n';
  import { base } from '$app/paths';
  import ShareButtons from '$lib/components/ShareButtons.svelte';

  let activeCategory = null;
  let expandedFact = null;

  const categories = [
    {
      id: 'energy',
      icon: '⚡',
      color: 'yellow',
      colorClass: 'bg-yellow-600/20 group-hover:bg-yellow-600/30',
      iconColor: 'text-yellow-400',
      borderColor: 'border-yellow-500/50',
      accentColor: 'text-yellow-400'
    },
    {
      id: 'human',
      icon: '🧠',
      color: 'blue',
      colorClass: 'bg-blue-600/20 group-hover:bg-blue-600/30',
      iconColor: 'text-blue-400',
      borderColor: 'border-blue-500/50',
      accentColor: 'text-blue-400'
    },
    {
      id: 'food',
      icon: '🌱',
      color: 'green',
      colorClass: 'bg-green-600/20 group-hover:bg-green-600/30',
      iconColor: 'text-green-400',
      borderColor: 'border-green-500/50',
      accentColor: 'text-green-400'
    },
    {
      id: 'health',
      icon: '❤️',
      color: 'red',
      colorClass: 'bg-red-600/20 group-hover:bg-red-600/30',
      iconColor: 'text-red-400',
      borderColor: 'border-red-500/50',
      accentColor: 'text-red-400'
    },
    {
      id: 'housing',
      icon: '🏠',
      color: 'purple',
      colorClass: 'bg-purple-600/20 group-hover:bg-purple-600/30',
      iconColor: 'text-purple-400',
      borderColor: 'border-purple-500/50',
      accentColor: 'text-purple-400'
    },
    {
      id: 'information',
      icon: '📡',
      color: 'teal',
      colorClass: 'bg-teal-600/20 group-hover:bg-teal-600/30',
      iconColor: 'text-teal-400',
      borderColor: 'border-teal-500/50',
      accentColor: 'text-teal-400'
    },
    {
      id: 'economics',
      icon: '🔄',
      color: 'orange',
      colorClass: 'bg-orange-600/20 group-hover:bg-orange-600/30',
      iconColor: 'text-orange-400',
      borderColor: 'border-orange-500/50',
      accentColor: 'text-orange-400'
    },
    {
      id: 'education',
      icon: '🎓',
      color: 'indigo',
      colorClass: 'bg-indigo-600/20 group-hover:bg-indigo-600/30',
      iconColor: 'text-indigo-400',
      borderColor: 'border-indigo-500/50',
      accentColor: 'text-indigo-400'
    }
  ];

  const toggleCategory = (id) => {
    activeCategory = activeCategory === id ? null : id;
    expandedFact = null;
  };

  const toggleFact = (id) => {
    expandedFact = expandedFact === id ? null : id;
  };
</script>

<svelte:head>
  <title>{$t('whyNow.title')} - Unity Beyond the Known</title>
  <meta name="description" content={$t('whyNow.meta.description')} />
</svelte:head>

<div class="max-w-6xl mx-auto px-4 py-12">

  <!-- Hero -->
  <section class="text-center mb-16">
    <div class="inline-block mb-6 px-4 py-2 bg-slate-800/60 border border-slate-600/50 rounded-full text-sm text-slate-400 tracking-wider uppercase">
      {$t('whyNow.badge')}
    </div>
    <h1 class="text-4xl md:text-6xl font-light mb-8 tracking-wide">
      {$t('whyNow.title')}
    </h1>
    <p class="text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed mb-6">
      {$t('whyNow.subtitle')}
    </p>
    <div class="w-24 h-1 bg-gradient-to-r from-yellow-500 via-green-500 to-blue-500 mx-auto mb-8"></div>
    <p class="text-lg text-slate-400 max-w-3xl mx-auto leading-relaxed">
      {$t('whyNow.intro')}
    </p>
  </section>

  <!-- OS Framing Box -->
  <section class="max-w-4xl mx-auto mb-20">
    <div class="bg-slate-800/30 rounded-xl p-8 md:p-12 backdrop-blur-sm border border-slate-700/50">
      <h2 class="text-2xl md:text-3xl mb-6 text-center">{$t('whyNow.osFraming.title')}</h2>
      <p class="text-lg text-slate-300 leading-relaxed mb-6">
        {$t('whyNow.osFraming.paragraph1')}
      </p>
      <p class="text-lg text-slate-300 leading-relaxed">
        {$t('whyNow.osFraming.paragraph2')}
      </p>
      <!-- Spiral stages visual -->
      <div class="mt-8 grid grid-cols-2 md:grid-cols-4 gap-3 text-center text-sm">
        <div class="bg-blue-900/30 border border-blue-700/40 rounded-lg p-3">
          <div class="text-blue-400 font-semibold mb-1">{$t('whyNow.osFraming.stages.blue.label')}</div>
          <div class="text-slate-400">{$t('whyNow.osFraming.stages.blue.description')}</div>
        </div>
        <div class="bg-orange-900/30 border border-orange-700/40 rounded-lg p-3">
          <div class="text-orange-400 font-semibold mb-1">{$t('whyNow.osFraming.stages.orange.label')}</div>
          <div class="text-slate-400">{$t('whyNow.osFraming.stages.orange.description')}</div>
        </div>
        <div class="bg-green-900/30 border border-green-700/40 rounded-lg p-3">
          <div class="text-green-400 font-semibold mb-1">{$t('whyNow.osFraming.stages.green.label')}</div>
          <div class="text-slate-400">{$t('whyNow.osFraming.stages.green.description')}</div>
        </div>
        <div class="bg-yellow-900/30 border border-yellow-600/40 rounded-lg p-3 ring-1 ring-yellow-500/30">
          <div class="text-yellow-300 font-semibold mb-1">{$t('whyNow.osFraming.stages.yellow.label')}</div>
          <div class="text-slate-400">{$t('whyNow.osFraming.stages.yellow.description')}</div>
        </div>
      </div>
    </div>
  </section>

  <!-- Domain Cards -->
  <section class="mb-20">
    <h2 class="text-3xl text-center mb-4">{$t('whyNow.domains.title')}</h2>
    <p class="text-center text-slate-400 mb-12 max-w-2xl mx-auto">{$t('whyNow.domains.subtitle')}</p>

    <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
      {#each categories as cat}
        <button
          class="bg-slate-800/50 backdrop-blur-sm rounded-lg p-5 hover:bg-slate-700/50 transition-all border border-slate-700/30 group text-left {activeCategory === cat.id ? 'ring-2 ring-offset-1 ring-offset-slate-900 ring-' + cat.color + '-500/60' : ''}"
          on:click={() => toggleCategory(cat.id)}
        >
          <div class="w-12 h-12 mb-3 {cat.colorClass} rounded-full flex items-center justify-center transition-colors text-2xl">
            {cat.icon}
          </div>
          <h3 class="font-semibold {cat.accentColor} mb-1">{$t(`whyNow.domains.${cat.id}.title`)}</h3>
          <p class="text-sm text-slate-400">{$t(`whyNow.domains.${cat.id}.summary`)}</p>
        </button>
      {/each}
    </div>

    <!-- Expanded domain panel -->
    {#if activeCategory}
      {@const cat = categories.find(c => c.id === activeCategory)}
      <div class="bg-slate-800/40 border {cat.borderColor} rounded-xl p-6 md:p-8 backdrop-blur-sm transition-all">
        <div class="flex items-center gap-3 mb-6">
          <span class="text-3xl">{cat.icon}</span>
          <h3 class="text-2xl {cat.accentColor}">{$t(`whyNow.domains.${activeCategory}.title`)}</h3>
        </div>

        <div class="space-y-4">
          {#each $t(`whyNow.domains.${activeCategory}.facts`) as fact, i}
            <div class="bg-slate-900/40 rounded-lg overflow-hidden border border-slate-700/30">
              <button
                class="w-full text-left px-5 py-4 flex justify-between items-start gap-4 hover:bg-slate-800/50 transition-colors"
                on:click={() => toggleFact(`${activeCategory}-${i}`)}
              >
                <div>
                  <div class="font-semibold text-white mb-1">{fact.stat}</div>
                  <div class="text-sm text-slate-400">{fact.label}</div>
                </div>
                <svg
                  class="w-5 h-5 text-slate-400 flex-shrink-0 mt-1 transition-transform {expandedFact === `${activeCategory}-${i}` ? 'rotate-180' : ''}"
                  fill="none" stroke="currentColor" viewBox="0 0 24 24"
                >
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {#if expandedFact === `${activeCategory}-${i}`}
                <div class="px-5 pb-5 border-t border-slate-700/30">
                  <p class="text-slate-300 leading-relaxed mt-4 mb-3">{fact.diagnosis}</p>
                  <div class="inline-block px-3 py-1 rounded-full text-xs {cat.colorClass} {cat.accentColor} border {cat.borderColor}">
                    {fact.upgrade}
                  </div>
                </div>
              {/if}
            </div>
          {/each}
        </div>
      </div>
    {/if}
  </section>

  <!-- The Conclusion -->
  <section class="max-w-4xl mx-auto mb-20">
    <div class="bg-gradient-to-br from-slate-800/40 to-slate-900/60 rounded-xl p-8 md:p-12 backdrop-blur-sm border border-slate-700/50 text-center">
      <h2 class="text-3xl mb-6">{$t('whyNow.conclusion.title')}</h2>
      <p class="text-lg text-slate-300 leading-relaxed mb-6 max-w-3xl mx-auto">
        {$t('whyNow.conclusion.paragraph1')}
      </p>
      <p class="text-lg text-slate-300 leading-relaxed max-w-3xl mx-auto">
        {$t('whyNow.conclusion.paragraph2')}
      </p>
    </div>
  </section>

  <!-- Navigation to next steps -->
  <section class="text-center">
    <h2 class="text-2xl mb-8 text-slate-300">{$t('whyNow.cta.title')}</h2>
    <div class="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
      <a href="{base}/perspectives" class="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors">
        {$t('whyNow.cta.perspectives')}
      </a>
      <a href="{base}/frameworks" class="px-6 py-3 bg-green-600 hover:bg-green-700 rounded-lg transition-colors">
        {$t('whyNow.cta.frameworks')}
      </a>
      <a href="{base}/philosophy" class="px-6 py-3 bg-slate-700 hover:bg-slate-600 rounded-lg transition-colors">
        {$t('whyNow.cta.philosophy')}
      </a>
    </div>
    <div class="flex items-center justify-center gap-3">
      <span class="text-sm text-slate-400">{$t('share.vision')}</span>
      <ShareButtons
        title="The Case for a Civilizational Upgrade - Unity Beyond the Known"
        description="Our current systems waste ⅓ of food, 85% of worker potential, and $7 trillion on fossil fuel subsidies. The bugs are features of the wrong OS."
        hashtags="CivilizationalUpgrade,SystemsChange,UnityBeyondTheKnown,SpiralDynamics,WhyNow"
        size="small"
        showLabels={false}
      />
    </div>
  </section>

</div>
