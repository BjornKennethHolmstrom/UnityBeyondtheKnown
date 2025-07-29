<!-- src/lib/components/CommunicationToolkit.svelte -->
<script>
  import { t } from 'svelte-i18n';
  
  let activeAudience = 'general';
  
  const audiences = ['conservative', 'progressive', 'officials', 'general'];
  
  const audienceIcons = {
    conservative: '🇺🇸',
    progressive: '🌍', 
    officials: '🏛️',
    general: '🤝'
  };
  
  const audienceColors = {
    conservative: 'from-red-600 to-red-800',
    progressive: 'from-green-600 to-green-800',
    officials: 'from-blue-600 to-blue-800', 
    general: 'from-purple-600 to-purple-800'
  };
</script>

<div class="p-8">
  <div class="text-center mb-8">
    <h2 class="text-3xl mb-4 text-white">{$t('communityProjects.yellowCommunication.title')}</h2>
    <p class="text-xl text-slate-300 max-w-2xl mx-auto">
      {$t('communityProjects.yellowCommunication.description')}
    </p>
  </div>

  <!-- Audience Selector -->
  <div class="flex flex-wrap justify-center gap-3 mb-8">
    {#each audiences as audience}
      <button
        class="px-4 py-2 rounded-lg transition-all flex items-center gap-2 {activeAudience === audience 
          ? 'bg-gradient-to-r ' + audienceColors[audience] + ' text-white' 
          : 'bg-slate-700/50 text-slate-300 hover:bg-slate-600/50'}"
        on:click={() => activeAudience = audience}
      >
        <span class="text-lg">{audienceIcons[audience]}</span>
        {$t(`communityProjects.yellowCommunication.audiences.${audience}.title`)}
      </button>
    {/each}
  </div>

  <!-- Active Audience Content -->
  <div class="bg-slate-700/30 rounded-xl p-8 border border-slate-600/50">
    <div class="text-center mb-6">
      <div class="text-4xl mb-2">{audienceIcons[activeAudience]}</div>
      <h3 class="text-2xl text-white mb-2">
        {$t(`communityProjects.yellowCommunication.audiences.${activeAudience}.title`)}
      </h3>
      <p class="text-lg text-green-300 font-medium">
        "{$t(`communityProjects.yellowCommunication.audiences.${activeAudience}.frame`)}"
      </p>
    </div>

    <div class="grid md:grid-cols-2 gap-6">
      <!-- Key Points -->
      <div>
        <h4 class="text-lg font-medium mb-4 text-white">Key Messages:</h4>
        <div class="space-y-3">
          {#each $t(`communityProjects.yellowCommunication.audiences.${activeAudience}.points`) as point}
            <div class="flex items-start gap-3 bg-slate-800/30 rounded-lg p-3">
              <div class="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
              <p class="text-slate-300">{point}</p>
            </div>
          {/each}
        </div>
      </div>

      <!-- Sample Conversation -->
      <div>
        <h4 class="text-lg font-medium mb-4 text-white">Sample Conversation Starter:</h4>
        <div class="bg-slate-800/50 rounded-lg p-4 border border-slate-600/30">
          {#if activeAudience === 'conservative'}
            <p class="text-slate-300 italic">
              "I've been thinking about food security and how we can make our community more self-reliant. 
              What if we created a space where families could grow traditional foods together? 
              It would teach our kids valuable skills and strengthen our neighborhood bonds..."
            </p>
          {:else if activeAudience === 'progressive'}
            <p class="text-slate-300 italic">
              "I've been learning about food justice and how communities can take climate action right in their own neighborhood. 
              There's this amazing approach called food forests that helps restore ecosystems while providing fresh food for everyone. 
              Want to explore creating one together?"
            </p>
          {:else if activeAudience === 'officials'}
            <p class="text-slate-300 italic">
              "I'd like to propose an innovative community development project that could increase property values, 
              provide educational opportunities, and create a unique attraction for our town. 
              Food forests are becoming popular economic development tools in cities nationwide..."
            </p>
          {:else}
            <p class="text-slate-300 italic">
              "What if we could create a beautiful space where neighbors could get fresh food, 
              kids could learn about nature, and we could all work together on something positive? 
              I've been researching community food forests and think our neighborhood would be perfect..."
            </p>
          {/if}
        </div>

        <!-- Tips -->
        <div class="mt-4">
          <h5 class="text-sm font-medium mb-2 text-white">Pro Tips:</h5>
          <div class="text-sm text-slate-400 space-y-1">
            {#if activeAudience === 'conservative'}
              <p>• Lead with shared values: family, tradition, preparedness</p>
              <p>• Emphasize learning from elders and passing on skills</p>
              <p>• Mention property value benefits and community safety</p>
            {:else if activeAudience === 'progressive'}
              <p>• Connect to larger environmental and social justice movements</p>
              <p>• Emphasize Indigenous land practices and climate solutions</p>
              <p>• Highlight equitable access and community empowerment</p>
            {:else if activeAudience === 'officials'}
              <p>• Come with data on successful projects in similar communities</p>
              <p>• Address liability concerns upfront with solutions</p>
              <p>• Propose pilot project with clear success metrics</p>
            {:else}
              <p>• Focus on immediate, tangible benefits everyone can enjoy</p>
              <p>• Invite people to visit existing food forests if possible</p>
              <p>• Start small and let success build momentum</p>
            {/if}
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Universal Bridge-Building Tips -->
  <div class="mt-8 bg-gradient-to-r from-purple-800/20 to-blue-800/20 rounded-xl p-6 border border-purple-700/30">
    <h4 class="text-lg font-medium mb-4 text-white text-center">🌉 Universal Bridge-Building Principles</h4>
    <div class="grid md:grid-cols-3 gap-4 text-sm">
      <div class="text-center">
        <div class="text-2xl mb-2">👂</div>
        <p class="text-white font-medium">Listen First</p>
        <p class="text-slate-300">Understand their concerns before sharing your vision</p>
      </div>
      <div class="text-center">
        <div class="text-2xl mb-2">🎯</div>
        <p class="text-white font-medium">Find Common Ground</p>
        <p class="text-slate-300">Start with what you both care about</p>
      </div>
      <div class="text-center">
        <div class="text-2xl mb-2">🌱</div>
        <p class="text-white font-medium">Start Small</p>
        <p class="text-slate-300">Propose a pilot or small test project first</p>
      </div>
    </div>
  </div>
</div>
