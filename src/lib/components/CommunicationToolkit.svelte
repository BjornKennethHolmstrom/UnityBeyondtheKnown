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
        <h4 class="text-lg font-medium mb-4 text-white">{$t('communityProjects.yellowCommunication.keyMessages')}</h4>
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
        <h4 class="text-lg font-medium mb-4 text-white">{$t('communityProjects.yellowCommunication.sampleConversation')}</h4>
        <div class="bg-slate-800/50 rounded-lg p-4 border border-slate-600/30">
          <p class="text-slate-300 italic">
            {$t(`communityProjects.yellowCommunication.conversations.${activeAudience}`)}
          </p>
        </div>

        <!-- Tips -->
        <div class="mt-4">
          <h5 class="text-sm font-medium mb-2 text-white">{$t('communityProjects.yellowCommunication.proTips')}</h5>
          <div class="text-sm text-slate-400 space-y-1">
            {#each $t(`communityProjects.yellowCommunication.tips.${activeAudience}`) as tip}
              <p>{tip}</p>
            {/each}
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Universal Bridge-Building Tips -->
  <div class="mt-8 bg-gradient-to-r from-purple-800/20 to-blue-800/20 rounded-xl p-6 border border-purple-700/30">
    <h4 class="text-lg font-medium mb-4 text-white text-center">{$t('communityProjects.yellowCommunication.universalPrinciples.title')}</h4>
    <div class="grid md:grid-cols-3 gap-4 text-sm">
      <div class="text-center">
        <div class="text-2xl mb-2">👂</div>
        <p class="text-white font-medium">{$t('communityProjects.yellowCommunication.universalPrinciples.listenFirst.title')}</p>
        <p class="text-slate-300">{$t('communityProjects.yellowCommunication.universalPrinciples.listenFirst.description')}</p>
      </div>
      <div class="text-center">
        <div class="text-2xl mb-2">🎯</div>
        <p class="text-white font-medium">{$t('communityProjects.yellowCommunication.universalPrinciples.commonGround.title')}</p>
        <p class="text-slate-300">{$t('communityProjects.yellowCommunication.universalPrinciples.commonGround.description')}</p>
      </div>
      <div class="text-center">
        <div class="text-2xl mb-2">🌱</div>
        <p class="text-white font-medium">{$t('communityProjects.yellowCommunication.universalPrinciples.startSmall.title')}</p>
        <p class="text-slate-300">{$t('communityProjects.yellowCommunication.universalPrinciples.startSmall.description')}</p>
      </div>
    </div>
  </div>
</div>
