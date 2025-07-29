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
      A step-by-step journey from idea to thriving community space
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
          <div class="text-sm font-medium text-center">Phase {index + 1}</div>
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
            <h4 class="text-lg font-medium mb-4 text-white">Key Steps:</h4>
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
            <h4 class="text-lg font-medium mb-4 text-white">Tips for Success:</h4>
            <div class="bg-slate-800/50 rounded-lg p-4 border border-slate-600/30">
              {#if index === 0}
                <!-- Phase 1 Tips -->
                <div class="space-y-3 text-sm text-slate-300">
                  <p><strong>🎯 Goal:</strong> Build trust and understand community needs</p>
                  <p><strong>💡 Tip:</strong> Use the Bridge-Builder communication strategies for different audiences</p>
                  <p><strong>⚠️ Avoid:</strong> Leading with your solution - listen first, then adapt</p>
                  <p><strong>📅 Timeline:</strong> Don't rush - relationship building takes time</p>
                  <p><strong>✅ Success Metric:</strong> 3-5 committed core team members from diverse backgrounds</p>
                </div>
              {:else if index === 1}
                <!-- Phase 2 Tips -->
                <div class="space-y-3 text-sm text-slate-300">
                  <p><strong>🎯 Goal:</strong> Secure location and institutional support</p>
                  <p><strong>💡 Tip:</strong> Present to officials with economic development framing</p>
                  <p><strong>⚠️ Avoid:</strong> Overwhelming partners with too many asks too quickly</p>
                  <p><strong>📋 Documents:</strong> Simple MOU templates available in full blueprint</p>
                  <p><strong>✅ Success Metric:</strong> Site secured with appropriate permissions</p>
                </div>
              {:else if index === 2}
                <!-- Phase 3 Tips -->
                <div class="space-y-3 text-sm text-slate-300">
                  <p><strong>🎯 Goal:</strong> Collaborative design that includes all voices</p>
                  <p><strong>💡 Tip:</strong> Use visual design workshops - everyone can participate</p>
                  <p><strong>⚠️ Avoid:</strong> Expert-driven design that excludes community input</p>
                  <p><strong>🌱 Plants:</strong> Choose varieties meaningful to different cultural groups</p>
                  <p><strong>✅ Success Metric:</strong> Design that reflects community input and needs</p>
                </div>
              {:else}
                <!-- Phase 4 Tips -->
                <div class="space-y-3 text-sm text-slate-300">
                  <p><strong>🎯 Goal:</strong> Create ongoing community connection through the project</p>
                  <p><strong>💡 Tip:</strong> Make work days social events with food and music</p>
                  <p><strong>⚠️ Avoid:</strong> Burnout - distribute responsibilities widely</p>
                  <p><strong>🎉 Celebrate:</strong> Regular harvest festivals and community meals</p>
                  <p><strong>✅ Success Metric:</strong> Self-sustaining community participation</p>
                </div>
              {/if}
            </div>

            <!-- Phase Navigation -->
            <div class="flex gap-2 mt-4">
              {#if index > 0}
                <button 
                  on:click={() => activePhase = index - 1}
                  class="px-3 py-2 bg-slate-600 hover:bg-slate-500 rounded text-white text-sm transition-all"
                >
                  ← Previous
                </button>
              {/if}
              {#if index < 3}
                <button 
                  on:click={() => activePhase = index + 1}
                  class="px-3 py-2 bg-gradient-to-r {phaseColors[index + 1] || phaseColors[0]} hover:opacity-80 rounded text-white text-sm transition-all"
                >
                  Next →
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
    <h4 class="text-lg font-medium mb-4 text-white text-center">🗓️ Typical Timeline Overview</h4>
    <div class="grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-sm">
      <div>
        <div class="text-blue-400 font-medium">Months 1-2</div>
        <div class="text-slate-300">Community Listening</div>
      </div>
      <div>
        <div class="text-green-400 font-medium">Months 2-4</div>
        <div class="text-slate-300">Site & Partnerships</div>
      </div>
      <div>
        <div class="text-yellow-400 font-medium">Months 3-6</div>
        <div class="text-slate-300">Design & Planning</div>
      </div>
      <div>
        <div class="text-purple-400 font-medium">Months 6-12</div>
        <div class="text-slate-300">Implementation</div>
      </div>
    </div>
    <p class="text-slate-400 text-xs text-center mt-4">
      * Phases can overlap • Adapt timeline to your community's pace • Some projects move faster, others need more time
    </p>
  </div>
</div>
