<!-- src/lib/components/ImplementationRoadmap.svelte -->
<script>
  import { t } from 'svelte-i18n';
  
  let activePhase = 0;
  
  const phaseColors = [
    'from-blue-600 to-blue-800',
    'from-green-600 to-green-800', 
    'from-yellow-600 to-yellow-800',
    'from-purple-600 to-purple-800'
  ];
  
  const phaseIcons = ['👂', '🤝', '🎨', '🌱'];
</script>

<div class="p-8">
  <div class="text-center mb-8">
    <h2 class="text-3xl mb-4 text-white">{$t('communityProjects.implementation.title')}</h2>
    <p class="text-xl text-slate-300 max-w-2xl mx-auto">
      {$t('communityProjects.implementation.description')}
    </p>
  </div>

  <!-- Phase Timeline -->
  <div class="flex justify-center mb-8 overflow-x-auto pb-4">
    <div class="flex gap-4 min-w-max">
      {#each $t('communityProjects.implementation.phases') as phase, index}
        <button
          class="flex flex-col items-center gap-2 p-4 rounded-lg transition-all min-w-[120px] {activePhase === index 
            ? 'bg-gradient-to-br ' + phaseColors[index] + ' text-white scale-105' 
            : 'bg-slate-700/30 text-slate-300 hover:bg-slate-600/30'}"
          on:click={() => activePhase = index}
        >
          <div class="text-2xl">{phaseIcons[index]}</div>
          <div class="text-sm font-medium text-center">{$t('communityProjects.implementation.phaseLabel')} {index + 1}</div>
          <div class="text-xs text-center opacity-80">{phase.title.split(':')[0]}</div>
        </button>
      {/each}
    </div>
  </div>

  <!-- Active Phase Content -->
  {#each $t('communityProjects.implementation.phases') as phase, index}
    {#if activePhase === index}
      <div class="bg-slate-700/30 rounded-xl p-8 border border-slate-600/50 transition-all">
        <div class="text-center mb-6">
          <div class="text-4xl mb-2">{phaseIcons[index]}</div>
          <h3 class="text-2xl text-white mb-2">{phase.title}</h3>
          <p class="text-lg text-slate-300">{phase.description}</p>
        </div>

        <div class="grid md:grid-cols-2 gap-6">
          <!-- Steps -->
          <div>
            <h4 class="text-lg font-medium mb-4 text-white">{$t('communityProjects.implementation.keySteps')}</h4>
            <div class="space-y-3">
              {#each phase.steps as step, stepIndex}
                <div class="flex items-start gap-3 bg-slate-800/30 rounded-lg p-3">
                  <div class="w-6 h-6 bg-gradient-to-r {phaseColors[index]} rounded-full flex items-center justify-center text-white text-sm font-medium flex-shrink-0">
                    {stepIndex + 1}
                  </div>
                  <p class="text-slate-300">{step}</p>
                </div>
              {/each}
            </div>
          </div>

          <!-- Tips & Resources -->
          <div>
            <h4 class="text-lg font-medium mb-4 text-white">{$t('communityProjects.implementation.tipsForSuccess')}</h4>
            <div class="bg-slate-800/50 rounded-lg p-4 border border-slate-600/30">
              <div class="space-y-3 text-sm text-slate-300">
                <p><strong>{$t('communityProjects.implementation.phaseTips.labels.goal')}</strong> {$t(`communityProjects.implementation.phaseTips.phase${index + 1}.goal`)}</p>
                <p><strong>{$t('communityProjects.implementation.phaseTips.labels.tip')}</strong> {$t(`communityProjects.implementation.phaseTips.phase${index + 1}.tip`)}</p>
                <p><strong>{$t('communityProjects.implementation.phaseTips.labels.avoid')}</strong> {$t(`communityProjects.implementation.phaseTips.phase${index + 1}.avoid`)}</p>
                <p><strong>{$t(`communityProjects.implementation.phaseTips.phase${index + 1}.extraLabel`)}</strong> {$t(`communityProjects.implementation.phaseTips.phase${index + 1}.extraContent`)}</p>
                <p><strong>{$t('communityProjects.implementation.phaseTips.labels.success')}</strong> {$t(`communityProjects.implementation.phaseTips.phase${index + 1}.success`)}</p>
              </div>
            </div>

            <!-- Phase Navigation -->
            <div class="flex gap-2 mt-4">
              {#if index > 0}
                <button 
                  on:click={() => activePhase = index - 1}
                  class="px-3 py-2 bg-slate-600 hover:bg-slate-500 rounded text-white text-sm transition-all"
                >
                  {$t('communityProjects.implementation.previous')}
                </button>
              {/if}
              {#if index < 3}
                <button 
                  on:click={() => activePhase = index + 1}
                  class="px-3 py-2 bg-gradient-to-r {phaseColors[index + 1] || phaseColors[0]} hover:opacity-80 rounded text-white text-sm transition-all"
                >
                  {$t('communityProjects.implementation.next')}
                </button>
              {/if}
            </div>
          </div>
        </div>
      </div>
    {/if}
  {/each}

  <!-- Timeline Overview -->
  <div class="mt-8 bg-gradient-to-r from-slate-800/20 to-blue-800/20 rounded-xl p-6 border border-slate-700/30">
    <h4 class="text-lg font-medium mb-4 text-white text-center">{$t('communityProjects.implementation.timelineOverview.title')}</h4>
    <div class="grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-sm">
      <div>
        <div class="text-blue-400 font-medium">{$t('communityProjects.implementation.timelineOverview.months1to2')}</div>
        <div class="text-slate-300">{$t('communityProjects.implementation.timelineOverview.phase1Short')}</div>
      </div>
      <div>
        <div class="text-green-400 font-medium">{$t('communityProjects.implementation.timelineOverview.months2to4')}</div>
        <div class="text-slate-300">{$t('communityProjects.implementation.timelineOverview.phase2Short')}</div>
      </div>
      <div>
        <div class="text-yellow-400 font-medium">{$t('communityProjects.implementation.timelineOverview.months3to6')}</div>
        <div class="text-slate-300">{$t('communityProjects.implementation.timelineOverview.phase3Short')}</div>
      </div>
      <div>
        <div class="text-purple-400 font-medium">{$t('communityProjects.implementation.timelineOverview.months6to12')}</div>
        <div class="text-slate-300">{$t('communityProjects.implementation.timelineOverview.phase4Short')}</div>
      </div>
    </div>
    <p class="text-slate-400 text-xs text-center mt-4">
      {$t('communityProjects.implementation.timelineOverview.note')}
    </p>
  </div>
</div>
